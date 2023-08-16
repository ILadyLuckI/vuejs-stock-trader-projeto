import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        //setStocks recebe dois parametros, um sendo o 'state' e outro sendo o payload,
        //neste caso o 'stocks'
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))
            })
        }
    },
    actions: {
        //method 'order' criado em stocks/Stock.vue
        buyStock({ commit }, order) {
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks )
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    getters: {
        //obtem todas as ações cadastradas dentro do 'state'
        stocks(state) {
            return state.stocks
        }
    }
}