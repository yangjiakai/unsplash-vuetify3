<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
</script>

<template>
    <div class="">
        <v-sheet class="d-flex pa-5" height="400" elevation="1">
            <v-card class="mr-5" width="300" height="300" v-for="i in 10 " :elevation="i">

            </v-card>
        </v-sheet>
        <v-sheet class="d-flex pa-5" height="300" elevation="1">
            <v-card class="shadow-md mr-5" width="200" height="200">

            </v-card>
            <v-card class="shadow-lg mr-5" width="200" height="200">

            </v-card>
            <v-card class="shadow-xl mr-5" width="200" height="200">

            </v-card>
            <v-card class="shadow-inner mr-5" width="200" height="200">

            </v-card>

        </v-sheet>
    </div>
</template>

<style scoped lang="scss">

</style>
