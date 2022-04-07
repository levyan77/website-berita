import Vue from 'vue'
import VueRouter from 'vue-router'
import HalamanUtama from '@/views/HalamanUtama.vue'
import HalamanBerita from '@/views/HalamanBerita.vue'
import defaultLayout from '@/layout/defaultLayout.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: defaultLayout,
        children:[
            {
                path: '',
                name: 'Halaman Utama',
                component: HalamanUtama
            },
            {
                path: "/HalamanBerita/:id/:index",
                name: "Halaman Berita",
                component: HalamanBerita,
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router;