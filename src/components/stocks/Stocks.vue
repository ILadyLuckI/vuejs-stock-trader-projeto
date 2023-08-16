<!--Irá mostrar todas as ações no mercado-->
<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
import Stock from './Stock.vue'

export default {
    //registrando o componente
    components: { Stock },
    computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    }
}
</script>

<style>

</style>