import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
// import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  title: "XSlime's Blog",
  description: "A Blog made by XSlime",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/imgs/logo.jpg",
    author: "XSlime",
    authorAvatar: "/imgs/head.jpg",
    docsRepo: "https://github.com/W9pi3cZ1/xslime.blog",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "Last Updated",
    primaryColor: "#00ccbb",
    // series 为原 sidebar
    navbar: [
      { icon: "Home", text: "Home", link: "/" },
      { icon: "Category", text: "Categories", link: "/categories/Me/1.html" },
      { icon: "Tag", text: "Tags", link: "/tags/AboutMe/1.html" },
      {
        text: "About",
        icon: "User",
        link: "/blogs/about.html",
      },
      {
        text: "History",
        icon: "Time",
        link: "/timeline.html",
      },
      {
        text: "Github",
        icon: "LogoGithub",
        link: "https://github.com/W9pi3cZ1/xslime.blog",
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    commentConfig: {
      type: "giscus",
      options: {
        repo: "W9pi3cZ1/xslime.blog",
        repoId: "R_kgDOMDeNUw",
        category: "Announcements",
        categoryId: "DIC_kwDOMDeNU84Cf9lE",
        mapping: "title",
        hideComments: true,
      },
    },
  }),
  // debug: true,
});
