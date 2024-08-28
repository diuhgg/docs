import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
import nav from './nav.mts'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base:'/docs/',
  title: "cuirx的文档站",
  description: "构建知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '折腾喜欢的',
      copyright: 'Copyright © 2024-present Cuirx'
    }
  }
})
