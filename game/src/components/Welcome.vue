<template>
    <v-container id="container" fluid fill-height color="#CFD7F5" class="deep-purple lighten-5">
        <v-layout align-center justify-center>
            <v-flex class="mx-10 justify-center">
                <v-card dark color="#62637F" class="py-10 px-10 mx-auto" max-height="1000px" max-width="780px">
                    <v-img
                            :src="require('../assets/infoIcon.svg')"
                            contain
                            height="30"
                            position="right"
                    ></v-img>
                    <v-card-title class="justify-center">
                        Добро пожаловать!
                    </v-card-title>
                    <v-card-text class="text-center my-4">
                        LearningCMD - игра, которая научит тебя работать с командной строкой
                    </v-card-text>
                    <v-card-actions id="btnText" class="justify-space-around mx-auto flex-wrap">
                        <v-btn outlined color="deep-purple lighten-5" class="text-uppercase my-4 mx-0" width="180" height="50">Демо</v-btn>
                        <v-btn outlined color="deep-purple lighten-5" class="text-uppercase my-4 mx-0" width="180" height="50">Играть</v-btn>
                        <v-btn outlined color="deep-purple lighten-5" class="text-uppercase my-4 mx-0" width="180" height="50">Инструкция</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped>
#container {
    font-family: "Roboto Slab", serif !important;
    font-weight: 400 !important;
}
#btnText{
    font-family: Lato, sans-serif !important;
    font-weight: 600 !important;
}
</style>