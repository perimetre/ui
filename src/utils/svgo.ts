import { OptimizeOptions, optimize } from 'svgo';
import { nanoid } from 'nanoid';

/**
 * Returns an instance of SVGO
 *
 * @param svgString The SVG to be optimized
 * @param datauri Output as Data URI string.
 * @param root1 The options setting
 * @param root1.prefixIds prefix IDs and classes with the SVG filename or an arbitrary string
 * @param root1.removeOffCanvasPaths removes elements that are drawn outside of the viewbox
 * @param root1.removeRasterImages remove raster images
 * @param root1.removeXMLNS removes xmlns attribute (for inline svg)
 * @param root1.removeColors remove color attributes (to make sure it works with all colors)
 */
export const getSvgo = (
  svgString: string | Buffer,
  datauri: OptimizeOptions['datauri'],
  {
    prefixIds,
    removeOffCanvasPaths,
    removeRasterImages,
    removeXMLNS,
    removeColors
  }: Record<string, boolean | undefined>
) =>
  optimize(svgString, {
    multipass: true,
    datauri,
    plugins: [
      { name: 'removeDimensions', active: false },
      { name: 'removeViewBox', active: false },
      { name: 'prefixIds', params: { delim: `_${nanoid(5)}_` }, active: prefixIds },
      { name: 'removeOffCanvasPaths', active: removeOffCanvasPaths },
      { name: 'removeRasterImages', active: removeRasterImages },
      { name: 'removeXMLNS', active: removeXMLNS },
      { name: 'removeAttrs', params: { attrs: '(stroke|fill)' }, active: removeColors }
    ]
  });
