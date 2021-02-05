import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import styles from './Optimize.module.css';
import debounce from 'lodash/debounce';
import styled from 'styled-components';

const CssIconDisplay = styled.div<{ height?: string; width: string; uri?: string }>`
  /* Set up positioning by setting it to relative, so other elements can be absolute */
  position: relative;

  height: ${(props) => props.height};
  width: ${(props) => props.width};

  &::after {
    /* Sets the box sizing */
    box-sizing: border-box;
    /* It should have absolute position */
    position: absolute;
    /* Do not allow for mouse interaction */
    pointer-events: none;
    /* Try to align it on center */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;

    /* Actually display the icon */
    content: '';

    height: ${(props) => props.height};
    width: ${(props) => props.width};

    background-color: black;
    /* If updating the icon, refer to wiki: SVGs, to learn now to generate these */
    mask-image: ${(props) => props.uri};
  }
`;

/**
 * Index page container
 *
 * @returns The index page container
 */
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [optimizedSvg, setOptimizedSvg] = useState<Record<string, any>>();
  const [uriSvg, setUriSvg] = useState<string>('');
  const [originalSvg, setOriginalSvg] = useState<string>('');

  const optimize = useMemo(
    () =>
      debounce((svgString: string) => {
        if (svgString) {
          setOriginalSvg(svgString);
          fetch('/api/optimize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              svgString,
              prefixIds: (document?.getElementById('prefixIds') as HTMLInputElement)?.checked,
              removeOffCanvasPaths: (document?.getElementById('removeOffCanvasPaths') as HTMLInputElement)?.checked,
              removeRasterImages: (document?.getElementById('removeRasterImages') as HTMLInputElement)?.checked,
              removeXMLNS: (document?.getElementById('removeXMLNS') as HTMLInputElement)?.checked,
              removeColors: (document?.getElementById('removeColors') as HTMLInputElement)?.checked
            })
          })
            .then((response) => response.json())
            .then(setOptimizedSvg)
            .catch((err) => {
              console.error(err);
              setOptimizedSvg({});
              setOriginalSvg('');
              setUriSvg('');
            });
        } else {
          setOptimizedSvg({});
          setOriginalSvg('');
          setUriSvg('');
        }
      }, 300),
    []
  );

  const onType = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => optimize(event.target.value), [
    optimize
  ]);

  const onCheck = useCallback(() => optimize((document?.getElementById('svg') as HTMLTextAreaElement)?.value), [
    optimize
  ]);

  useEffect(
    () =>
      setUriSvg(
        optimizedSvg && optimizedSvg.data ? `url('data:image/svg+xml,${encodeURIComponent(optimizedSvg.data)}')` : ''
      ),
    [optimizedSvg]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Optimize</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full py-8">
        {optimizedSvg && optimizedSvg.data && (
          <div className="mb-4 flex flex-wrap items-center justify-center">
            <div className="mx-4">
              <p className="mb-4">Original</p>
              <div dangerouslySetInnerHTML={{ __html: originalSvg.trim() }} />
            </div>
            <div className="mx-4">
              <p className="mb-4">Optimized</p>
              <div dangerouslySetInnerHTML={{ __html: optimizedSvg.data }} />
            </div>
            <div className="mx-4">
              <p className="mb-4">CSS</p>
              <CssIconDisplay
                height={`${optimizedSvg.info.height}px`}
                width={`${optimizedSvg.info.width}px`}
                uri={uriSvg}
              />
            </div>
          </div>
        )}
        <div className="mb-4">
          <div>
            <input defaultChecked={true} type="checkbox" id="prefixIds" onChange={onCheck} />
            <label htmlFor="prefixIds"> Prefix IDS (recommended)</label>
          </div>
          <div>
            <input defaultChecked={true} type="checkbox" id="removeRasterImages" onChange={onCheck} />
            <label htmlFor="removeRasterImages"> Remove raster images (make sure svg only contain paths)</label>
          </div>
          <div>
            <input defaultChecked={true} type="checkbox" id="removeColors" onChange={onCheck} />
            <label htmlFor="removeColors"> Remove color attributes (to make sure it works with all colors)</label>
          </div>
          <div>
            <input type="checkbox" id="removeOffCanvasPaths" onChange={onCheck} />
            <label htmlFor="removeOffCanvasPaths"> Removes elements that are drawn outside of the viewbox</label>
          </div>
          <div>
            <input type="checkbox" id="removeXMLNS" onChange={onCheck} />
            <label htmlFor="removeXMLNS"> Removes xmlns attribute (for inline svg)</label>
          </div>
          <p className="italic mt-2">
            Look at all the settings enabled by default{' '}
            <a
              className="text-pui-primary"
              href="https://github.com/svg/svgo#what-it-can-do"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
        <div>
          <label className="pui-label-input" htmlFor="svg">
            Paste SVG(Including svg tag)
          </label>
          <textarea rows={10} id="svg" placeholder="<svg>...</svg>" className="pui-text-input" onChange={onType} />
        </div>
        <div>
          <label className="pui-label-input" htmlFor="json">
            Optimized SVG
          </label>
          <textarea readOnly rows={10} id="json" className="pui-text-input" value={optimizedSvg && optimizedSvg.data} />
        </div>
        <div>
          <label className="pui-label-input" htmlFor="css">
            uri() version for css use
          </label>
          <textarea rows={10} readOnly id="css" className="pui-text-input" value={uriSvg} />
        </div>

        <pre className="w-full overflow-x-scroll">{optimizedSvg && JSON.stringify(optimizedSvg, null, 4)}</pre>
      </div>
    </div>
  );
}
