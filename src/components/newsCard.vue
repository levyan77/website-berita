<template>
    <v-card
    class="mx-auto"
    max-width="700"
    >
        <v-img
        :src="gambar"
        height="400px"
        ></v-img>

        <v-card-title>
            {{judul}}
        </v-card-title>

        <v-card-text>
            {{deskripsi}}
        </v-card-text>

        <v-card-actions>
            <v-sheet
                color="grey darken-2"
                elevation="10"
                height="25"
                rounded
                width="192"
                class="white--text"
            >
            {{author}}
            </v-sheet>
            <v-spacer></v-spacer>
            <v-icon>mdi-reddit</v-icon>
            <v-icon>mdi-twitter</v-icon>
            <v-icon>mdi-facebook</v-icon>
            <v-icon>mdi-google</v-icon>
            <v-icon>mdi-linkedin</v-icon>
            <v-spacer></v-spacer>
            <v-btn :to="{ name: 'Halaman Berita', params: { id: author, index: index }}">READ MORE</v-btn> 

        </v-card-actions>

    </v-card>
</template>

<script>
export default {
    props: ['gambar', 'author', 'judul', 'waktu','deskripsi', 'path', 'index'],
}
</script>