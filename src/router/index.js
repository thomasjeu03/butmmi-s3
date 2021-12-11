import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import BUTMMI from '@/components/BUTMMI'
import Departement from '@/components/Departement'
import Projets from '@/components/Projets'
import Mobilite from '@/components/Mobilite'
import Extras from '@/components/Extras'
import Actualites from '@/components/Actualites'
import Pro from '@/components/Pro'
import MentionsLegales from '@/components/MentionsLegales'
import Politiques from '@/components/Politiques'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },{
      path: '/butmmi',
      name: 'BUTMMI',
      component: BUTMMI
    },{
      path: '/departement',
      name: 'Departement',
      component: Departement
    },{
      path: '/projets',
      name: 'Projets',
      component: Projets
    },{
      path: '/mobilite',
      name: 'Mobilite',
      component: Mobilite
    },{
      path: '/extras',
      name: 'Extras',
      component: Extras
    },{
      path: '/actualites',
      name: 'Actualites',
      component: Actualites
    },{
      path: '/pro',
      name: 'Pro',
      component: Pro
    },{
      path: '/mentionslegales',
      name: 'MentionsLegales',
      component: MentionsLegales
    },{
      path: '/politiques',
      name: 'Politiques',
      component: Politiques
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
