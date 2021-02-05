import SVGOptimizer from 'svgo';

/**
 * Returns an instance of SVGO
 *
 * @param root0 The options setting
 * @param root0.prefixIds prefix IDs and classes with the SVG filename or an arbitrary string
 * @param root0.removeOffCanvasPaths removes elements that are drawn outside of the viewbox
 * @param root0.removeRasterImages remove raster images
 * @param root0.removeXMLNS removes xmlns attribute (for inline svg)
 * @param root0.removeColors remove color attributes (to make sure it works with all colors)
 */
export const getSvgo = ({
  prefixIds,
  removeOffCanvasPaths,
  removeRasterImages,
  removeXMLNS,
  removeColors
}: Record<string, unknown>) =>
  new SVGOptimizer({
    plugins: [
      ...(prefixIds ? [{ prefixIds: true }] : []),
      ...(removeOffCanvasPaths ? [{ removeOffCanvasPaths: true }] : []),
      ...(removeRasterImages ? [{ removeRasterImages: true }] : []),
      ...(removeXMLNS ? [{ removeXMLNS: true }] : []),
      ...(removeColors ? [{ removeAttrs: { attrs: '(stroke|fill)' } }] : [])
    ]
  });
