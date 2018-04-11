import Vue from 'vue'
import Router from 'vue-router'
import GlitchText from '@/components/GlitchText'
import GlitchImage from '@/components/GlitchImage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/glitch-text',
      name: 'HelloWorld',
      component: GlitchText
    },
    {
      path: '/',
      name: 'GlitchImage',
      component: GlitchImage
    }
  ]
})
