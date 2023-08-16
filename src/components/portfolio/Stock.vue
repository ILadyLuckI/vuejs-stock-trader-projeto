<!--Botão de VENDER-->
<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }} 
                    <small>
                        (Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})
                    </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" 
                    :error="insufficientQuantity || !Number.isInteger(quantity)"
                    v-model.number="quantity" />
                    <!-- determina que o botão seja desabilitado ao inserir numeros negativos no display,
                    e determina que o numero a ser comprado seja um número inteiro -->
                <v-btn class="blue darken-3 white--text"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="sellStock">{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    //recebendo propriedade do tipo 'stock'
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        ...mapActions({ sellStockAction: 'sellStock' }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.sellStockAction(order)
            //após efetuar a compra, a quantidade mostrada no display será zerada novamente
            this.quantity = 0
        }
    }
}
</script>

<style>

</style>