import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
      },
      {
        path: 'post/:slug',
        name: 'Post',
        component: () => import('@/pages/Post.vue'),
      },
      {
        path: 'archives',
        name: 'Archives',
        component: () => import('@/pages/Archives.vue'),
      },
      {
        path: 'tags',
        name: 'Tags',
        component: () => import('@/pages/Tags.vue'),
      },
      {
        path: 'tag/:tag',
        name: 'Tag',
        component: () => import('@/pages/TagPosts.vue'),
      },
      {
        path: 'links',
        name: 'Links',
        component: () => import('@/pages/Links.vue'),
      },
      {
        path: 'guestbook',
        name: 'Guestbook',
        component: () => import('@/pages/Guestbook.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
