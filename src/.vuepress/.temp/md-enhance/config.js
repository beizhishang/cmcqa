import CodeDemo from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.99_markdown-it@14.1.0_sass-embedded@1.97.1_sass@1.9_a76bcd6c417eaba92fb0fd9ceb843697/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/xpy/Coding/cmcqa/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.99_markdown-it@14.1.0_sass-embedded@1.97.1_sass@1.9_a76bcd6c417eaba92fb0fd9ceb843697/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
