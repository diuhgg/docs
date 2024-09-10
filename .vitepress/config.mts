import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
import nav from './nav.mts'




// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base:'/docs/',
  head: [['link', { rel: 'icon', href: 'xg.svg' }]],
  title: "Cuirx的文档站",
  description: "Cuirx的文档站",



  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'xg.svg',
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '折腾喜欢的',
      copyright: 'Copyright © 2024-present Cuirx'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText:"关闭",
            },
          },
        },
      },
    },
    outlineTitle: '页面导航',
    outline: 'deep',
  }
})
