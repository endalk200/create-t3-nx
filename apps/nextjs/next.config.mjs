//@ts-check
import '../../libs/utils/src/lib/env/env.mjs';

import { withNx } from '@nrwl/next/plugins/with-nx.js';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

export default withNx({
  enabled: process.env.ANALYZE_BUNDLE === 'true',
  openAnalyzer: true,
  ...nextConfig,
});
