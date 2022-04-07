<template>
  <div class="container">
      <div class="image">
          <img :src="gambar" />
      </div>
      <div class="content">
          <span class="author">{{author}}</span>
          <h4>{{judul}}</h4>
          <span class="published">{{waktu}}</span>          
      </div>
  </div>
</template>

<script>
export default {
    props: ['gambar', 'author', 'judul', 'waktu'],
    data(){
        return{
            gambarJadi: this.gambar
        }
         
    },
    methods:{
         urlToImage(url){
             this.gambarJadi = require(url)
         }
     }

}
</script>

<style scoped>

    img{
        max-width: 100%;
        max-height: 100%;
    }
    .container{
        display: flex;
        background-color: #e3eee8;
        min-height: 150px;
        cursor: pointer;
    }
    .content{
        width: 70%;
        padding: 4px 12px;
    }
    .image{
        width: 30%;
        margin-block: auto;
    }
    .author{
        font-size: small;
        font-weight: 600;
    }
    .published{
        font-size: small;
    }
    h4{
        display: block;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
</style>