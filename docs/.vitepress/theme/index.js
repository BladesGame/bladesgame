import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import './custom.css'

function loadAds() {
  if (window.adsbygoogle) {
    try { window.adsbygoogle.push({}) } catch (e) {}
  }
}

const AdSidebar = {
  setup() {
    onMounted(() => loadAds())
  },
  render() {
    return h('div', { style: 'margin: 1rem 0; min-height: 250px;' }, [
      h('ins', {
        class: 'adsbygoogle',
        style: 'display:block',
        'data-ad-client': 'ca-pub-5694985640527222',
        'data-ad-slot': '3766406141',
        'data-ad-format': 'auto',
        'data-full-width-responsive': 'true'
      })
    ])
  }
}

const AdFooter = {
  setup() {
    onMounted(() => loadAds())
  },
  render() {
    return h('div', { style: 'margin: 2rem auto 1rem; max-width: 728px; text-align: center;' }, [
      h('ins', {
        class: 'adsbygoogle',
        style: 'display:block',
        'data-ad-client': 'ca-pub-5694985640527222',
        'data-ad-slot': '8954586283',
        'data-ad-format': 'horizontal',
        'data-full-width-responsive': 'true'
      })
    ])
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(AdSidebar),
      'doc-after': () => h(AdFooter)
    })
  }
}