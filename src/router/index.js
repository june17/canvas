import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageGettingStarted from '@/pages/PageGettingStarted'
import PageAccessibility from '@/pages/PageAccessibility'
import PageResources from '@/pages/PageResources'
import PageButtons from '@/pages/PageButtons'
import PageAvatars from '@/pages/PageAvatars.vue'
import PageTables from '@/pages/PageTables'
import PageTooltips from '@/pages/PageTooltips'
import PageTags from '@/pages/PageTags'
import PageColors from '@/pages/PageColors'
import PageSpacing from '@/pages/PageSpacing.vue'
import PageLayout from '@/pages/PageLayout'
import PageIconography from '@/pages/PageIconography'
import PageLayering from '@/pages/PageLayering'
import PageTypography from '@/pages/PageTypography'
import PageDataVis from '@/pages/PageDataVis'
import PageSpinners from '@/pages/PageSpinners'
import PageProgressBars from '@/pages/PageProgressBars'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/getting-started',
      name: 'GettingStarted',
      component: PageGettingStarted
    },
    {
      path: '/accessibility',
      name: 'Accessibility',
      component: PageAccessibility
    },
    {
      path: '/resources',
      name: 'Resources',
      component: PageResources
    },
    {
      path: '/component-avatars',
      name: 'Avatars',
      component: PageAvatars
    },
    {
      path: '/component-buttons',
      name: 'Buttons',
      component: PageButtons
    },
    {
      path: '/component-tooltips',
      name: 'ToolTips',
      component: PageTooltips
    },
    {
      path: '/component-tables',
      name: 'Tables',
      component: PageTables
    },
    {
      path: '/component-tags',
      name: 'Tags',
      component: PageTags
    },
    {
      path: '/component-spinners',
      name: 'Spinners',
      component: PageSpinners
    },
    {
      path: '/component-progressbar',
      name: 'ProgressBars',
      component: PageProgressBars
    },
    {
      path: '/component-data-vis',
      name: 'DataVis',
      component: PageDataVis
    },
    {
      path: '/foundation-Iconography',
      name: 'Iconography',
      component: PageIconography
    },
    {
      path: '/foundation-colors',
      name: 'Colors',
      component: PageColors
    },
    {
      path: '/foundation-spacing',
      name: 'Spacing',
      component: PageSpacing
    },
    {
      path: '/foundation-typography',
      name: 'Typography',
      component: PageTypography
    },
    {
      path: '/foundation-layout',
      name: 'Layout',
      component: PageLayout
    },
    {
      path: '/foundation-layering',
      name: 'Layering',
      component: PageLayering
    }
  ],
  mode: 'history'
})
