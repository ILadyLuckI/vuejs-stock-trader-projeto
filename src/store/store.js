//este arquivo vai centralizar a store e será importado no arquivo main.js
//importando a biblioteca Vue
import Vue from 'vue'
//importando a biblioteca Vuex
import Vuex from 'vuex'

import actions from './actions'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'


//registrando globalmente o Vuex na instância do Vue, usando o metodo 'use',
//dessa forma todos os componentes da aplicação podem acessar o Vuex
Vue.use(Vuex)


export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
})