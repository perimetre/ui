import SVGOptimizer from 'svgo';
import { nanoid } from 'nanoid';

/**
 * Returns an instance of SVGO
 *
 * @param root0 The options setting
 * @param root0.datauri Output as Data URI string.
 * @param root0.prefixIds prefix IDs and classes with the SVG filename or an arbitrary string
 * @param root0.removeOffCanvasPaths removes elements that are drawn outside of the viewbox
 * @param root0.removeRasterImages remove raster images
 * @param root0.removeXMLNS removes xmlns attribute (for inline svg)
 * @param root0.removeColors remove color attributes (to make sure it works with all colors)
 */
export const getSvgo = ({
  datauri,
  prefixIds,
  removeOffCanvasPaths,
  removeRasterImages,
  removeXMLNS,
  removeColors
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
Record<string, any>) =>
  new SVGOptimizer({
    datauri,
    plugins: [
      { removeDimensions: false },
      { removeViewBox: false },
      ...(prefixIds ? [{ prefixIds: { delim: `_${nanoid(5)}_` } }] : []),
      ...(removeOffCanvasPaths ? [{ removeOffCanvasPaths: true }] : []),
      ...(removeRasterImages ? [{ removeRasterImages: true }] : []),
      ...(removeXMLNS ? [{ removeXMLNS: true }] : []),
      ...(removeColors ? [{ removeAttrs: { attrs: '(stroke|fill)' } }] : [])
    ]
  });
