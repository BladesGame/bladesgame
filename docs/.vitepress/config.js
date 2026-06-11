import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-TW',
  title: 'Blades Game 游刃攻略',
  description: '找攻略來遊刃，讓你的遊戲時光遊刃有餘。',
  head: [
    ['script', { async: 'true', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5694985640527222', crossorigin: 'anonymous' }],
    ['script', {}, '(adsbygoogle = window.adsbygoogle || []).push({});'],
  ],
  themeConfig: {
    logo: '/images/blade-logo.png',
    nav: [
      { text: '首頁', link: '/' },
      { text: '騎馬與砍殺2', link: '/bannerlord/' },
      { text: '關於', link: '/about' },
      { text: '內容回報', link: '/feedback' },
    ],
    sidebar: {
      '/bannerlord/': [
        { text: '攻略總覽', link: '/bannerlord/' },
        {
          text: '🟢 新手到自立',
          collapsed: false,
          items: [
            { text: '新手求生指南', link: '/bannerlord/beginner-guide' },
            { text: '兵種大亂鬥', link: '/bannerlord/troop-tier-list' },
            { text: '賺錢密技', link: '/bannerlord/money-making' },
            { text: '自立為王', link: '/bannerlord/kingdom-building' },
            { text: '2026 必裝 MOD 推薦', link: '/bannerlord/mod-recommendations' },
          ]
        },
        {
          text: '🟡 進階玩法',
          collapsed: true,
          items: [
            { text: '戰鬥技巧完全指南', link: '/bannerlord/combat-tactics' },
            { text: '終極跑商路線圖', link: '/bannerlord/trade-routes' },
            { text: '鍛造系統深入指南', link: '/bannerlord/smithing-guide' },
            { text: '夥伴全指南', link: '/bannerlord/companions' },
            { text: '家族與結婚系統', link: '/bannerlord/clan-family' },
          ]
        },
        {
          text: '🟠 王國治理',
          collapsed: true,
          items: [
            { text: '王國管理深度指南', link: '/bannerlord/kingdom-management' },
            { text: '外交系統詳解', link: '/bannerlord/diplomacy-guide' },
            { text: '攻城戰完全手冊', link: '/bannerlord/siege-warfare' },
            { text: '政策與封地管理', link: '/bannerlord/policies-fiefs' },
            { text: '領主忠誠與叛變預防', link: '/bannerlord/lord-loyalty' },
          ]
        },
        {
          text: '🔵 兵種與戰術深度',
          collapsed: true,
          items: [
            { text: '六大文化深度解析', link: '/bannerlord/culture-deep-dive' },
            { text: '純騎兵流終極指南', link: '/bannerlord/cavalry-only' },
            { text: '純弓兵流終極指南', link: '/bannerlord/archer-only' },
            { text: '步兵陣地戰完全指南', link: '/bannerlord/infantry-warfare' },
            { text: '混合兵種進階戰術', link: '/bannerlord/advanced-tactics' },
          ]
        },
        {
          text: '🟣 特殊玩法',
          collapsed: true,
          items: [
            { text: '鐵人模式生存指南', link: '/bannerlord/ironman-survival' },
            { text: '商人流玩法全攻略', link: '/bannerlord/merchant-playthrough' },
            { text: '罪犯與海盜玩法', link: '/bannerlord/bandit-pirate' },
            { text: '快速升級練等攻略', link: '/bannerlord/fast-leveling' },
            { text: '競技場大師指南', link: '/bannerlord/arena-master' },
          ]
        },
        {
          text: '⚪ 綜合',
          collapsed: true,
          items: [
            { text: '密技與控制台指令', link: '/bannerlord/console-commands' },
            { text: '新手常見問題 FAQ', link: '/bannerlord/faq' },
            { text: '遊戲設定與效能優化', link: '/bannerlord/performance-optimization' },
            { text: '多人模式入門指南', link: '/bannerlord/multiplayer-guide' },
            { text: '騎砍1→騎砍2 轉換指南', link: '/bannerlord/warband-to-bannerlord' },
          ]
        },
      ],
    },
    socialLinks: [],
    footer: {
      message: '遊刃有餘的遊戲攻略。',
      copyright: '© 2026 Blades Game',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})
