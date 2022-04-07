import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import news from './news'


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        news: {
            namespaced: true,
            ...news,
        }

    },
    // state: {
    //     listArtikel: [],
    // },
    // mutations: {
    //     setListArtikel(state,payload){
    //         state.listArtikel = payload;
    //     },
    // },
    // actions: {
    //     fetchArtikel(store){
    //         Axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1156d39b5db24373b6f622418dca3292').then((response => {
    //             console.log('response', response);
    //             store.commit('setListArtikel', response.data.articles)
    //         }));
    //     },
    //     fetchMoreArtikel(store){
    //         Axios
    //         .get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1156d39b5db24373b6f622418dca3292', {
    //             params: {
    //                 pageSize: 2,
    //                 offset: store.state.listArtikel.length,
    //             }
    //         })
    //         .then((response) => {
    //             store.commit("setListArtikel", [
    //                 ...store.state.listArtikel,
    //                 ...response.data.articles,
    //             ]);
    //         })
    //     },
    // },
});