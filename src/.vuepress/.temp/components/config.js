import { hasGlobalComponent } from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.120_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_b8c4b079bef62f60bc176f14f1a3074d/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.99_sass-embedded@1.97.1_sass@1.97.1_vuepress@2.0.0-_e2df8aaae20b264881d9950659e12d75/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.99_sass-embedded@1.97.1_sass@1.97.1_vuepress@2.0.0-_e2df8aaae20b264881d9950659e12d75/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.120_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_b8c4b079bef62f60bc176f14f1a3074d/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
