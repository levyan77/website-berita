import Axios from 'axios'

const state = () => ({
    listArtikel: [],
    Page: 2,
    Kategori: '',
    searchText: '',
    ApiKey: 'e662876be5954d1c8c843326b941ad91',
    index: 0,
    info: ''
})

const mutations =  {
    setListArtikel(state,payload){
        state.listArtikel = payload;
    },
    setKategori(state,payload){
        state.Kategori = payload;
    },
    setSearch(state,payload){
        state.searchText = payload;
    },
    setError(state,param){
        state.info = param;
    }
}

const actions = {
        fetchArtikel(store){
        Axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${ store.state.Kategori }&apiKey=${ store.state.ApiKey }`).then((response => {
                console.log('response', response);
                store.commit('setListArtikel', response.data.articles)
            }))
            .catch((error)=>{
                store.commit('setError', error);
            })
        },
        fetchArtikelDenganSeach(store){
            Axios.get(`https://newsapi.org/v2/top-headlines?country=id&q=${ store.state.searchText }&apiKey=${ store.state.ApiKey }`).then((response => {
                    console.log('response', response);
                    store.commit('setListArtikel', response.data.articles)
                }))
                .catch((error)=>{
                    store.commit('setError', error);
                })
            },
        fetchMoreArtikel(store){
            Axios
            .get(`https://newsapi.org/v2/top-headlines?country=id&category=${ store.state.Kategori }&apiKey=${ store.state.ApiKey }`, {
                params: {
                    page: store.state.Page ++,
                    pageSize: 20,
                }
            })
            .then((response) => {
                store.commit("setListArtikel", [
                    ...store.state.listArtikel,
                    ...response.data.articles,
                ]);
            })
            .catch((error)=>{
                store.commit('setError', error);
            })
        },
        gantiKategori(store,payload){
            store.commit('setKategori', payload)
        },
        searchFunction(store,payload){
            store.commit('setSearch', payload)
        },
        GantiBerita(store,payload){
            store.commit('setListArtikel',payload)
        }
}

export default {
    state,
    mutations,
    actions,
}