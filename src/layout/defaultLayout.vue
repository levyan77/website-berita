<template>
  <div class="text-center">
      <nav-draw/>
      <!-- <h1>
          PORTAL BERITA
      </h1> -->
      <v-btn class="btn" color="primary" to="/">
            Halaman Utama
      </v-btn>
      
        <router-view />
   </div>
</template>

<script>

import navDraw from '@/components/NavDrawer.vue'

export default {
    components:{
        navDraw
    },
    name: "defaultLayout",
    methods: {
    redirectTo(path) {
    this.$router.push(path);
    }},
}
</script>

<style scoped>
h1{
    text-align: center;
    background-color: brown;
    color: whitesmoke;
}
btn{
    justify-content: center;
}
</style>