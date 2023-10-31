import type { NextApiRequest, NextApiResponse } from 'next';
import { getSvgo } from '../../utils/svgo';

/**
 * Returns an optimized version of an svg input
 * @param req the server request
 * @param res the server response
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(404).end();
  }

  const { svgString, datauri, ...opts } = req.body;

  try {
    res.status(200).json(getSvgo(svgString, datauri, opts));
  } catch (error) {
    res.status(500).json({ error });
  }
};
