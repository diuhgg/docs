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
    search: {
      provider: 'local'
    },
    outlineTitle: '页面导航',

    outline: 'deep',
  }
})
