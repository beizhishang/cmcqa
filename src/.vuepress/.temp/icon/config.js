import { hasGlobalComponent } from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.120_vuepress@2.0.0-rc.26_@vuepress+bundler-vite@2.0.0-rc.26_@_b8c4b079bef62f60bc176f14f1a3074d/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vueuse+core@14.1.0_vue@3.5.26/node_modules/@vueuse/core/dist/index.js";
import { h } from "vue";
import { VPIcon } from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.120_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vuepress+bu_dee13e0d4cea7bac11bc33956d521062/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
