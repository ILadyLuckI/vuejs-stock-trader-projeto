<!--Botão de COMPRAR-->
<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" 
                    :error="insufficientFunds || !Number.isInteger(quantity)"
                    v-model.number="quantity" />
                    <!-- determina que o botão seja desabilitado ao inserir numeros negativos no display,
                    e determina que o numero a ser comprado seja um número inteiro -->
                <v-btn class="green darken-3 white--text"
                    :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="buyStock">{{ insufficientFunds ? 'Insuficiente' : 'Comprar' }}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    //recebendo propriedade do tipo 'stock'
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            //o dispatch é de actions, e o commit é de mutations
            this.$store.dispatch('buyStock', order)
            //após efetuar a compra, a quantidade mostrada no display será zerada novamente
            this.quantity = 0
        }
    }
}
</script>

<style>

</style>