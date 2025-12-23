import { CodeTabs } from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.120_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_b15fca57146a89fe85ff7fb590cc4bb3/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.120_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_b15fca57146a89fe85ff7fb590cc4bb3/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.120_markdown-it@14.1.0_vuepress@2.0.0-rc.26_@vue_b15fca57146a89fe85ff7fb590cc4bb3/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
