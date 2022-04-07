<template>
  
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Portal</span>
        <span>Berita</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        @focus="searchClosed = false"
        @blur="searchClosed = true"
        placeholder="search"
        v-model="searchText"
        prepend-inner-icon="mdi-magnify"
        filled
        dense
        class="expanding-search mt-5"
        :class="{'closed' : searchClosed && !searchText}"
        @keyup.enter="changeSearch(searchText)"
      ></v-text-field>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="white">
          <v-card-title>Kategori Berita</v-card-title>
          <div class="container" id="wrapper">
                <div class="article" v-for="(kategori, index) in KategoriBerita" :key="index">
                    <div class="item">
                        <v-btn @click="changeKategori(kategori)">{{kategori}}</v-btn>
                    </div>
                    
                </div>
        </div>
    </v-navigation-drawer>
  </nav>

</template>

<script>

// import kontainer from '@/components/containerNavDraw.vue'

export default {
  components:{
    // kontainer
  },
  data(){
    return {
      drawer: false,
      searchClosed: true,
      searchText: null,
      KategoriBerita:['business', 'entertainment','general','health','science','sports','technology']
    }
  },

  methods:{
      changeKategori(param){
         this.$store.dispatch('news/gantiKategori',param)
         this.$store.dispatch('news/fetchArtikel',param)
   },
      changeSearch(param){
         this.$store.dispatch('news/searchFunction',param)
         this.$store.dispatch('news/fetchArtikelDenganSeach',param)
         this.$store.dispatch('news/GantiBerita',param)
         this.$store.dispatch('news/fetchArtikel',param)
   }
  },

  computed:{
   ListArtikel(){
     return this.$store.state.news.listArtikelNavDraw;
   },
   ListKategoriArtikel(){
     return this.$store.state.news.Kategori;
   },
   searchFunction(){
     return this.$store.state.news.searchText;
   }
  }
}
</script>

<style lang="sass">
  .v-input.expanding-search
   transition: max-width 0.3s
   .v-input__slot
     &:before, &:after
       border-color: transparent !important
   &.closed
      max-width: 45px
      .v-input__slot
       background: transparent !important
</style>
<style scoped>

#wrapper{
    display: flex;
    flex-wrap: wrap;
}
.kotakBerita{
    text-decoration: none;
}
.judul{
    text-align: center;
}

.item{
    /* display: flex;
    flex-wrap: wrap; */
    padding: 12px;
    border-radius: 4px;
}

.article{
    width: 100%;
}
/* 
@media only screen and (max-width: 640px){
.article{
        width: 100%;
    }
} */
</style>