//dependencias
import Vue from 'vue'
import Router from 'vue-router'
//componentes
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

//registrando o vue router
Vue.use(Router)

export default new Router({
    //definimos o modo que iremos usar o vue-router, modo 'history'
    mode: 'history',
    routes: [
        //definimos as rotas que estarão disponíveis, e os conteúdos também
        //essas rotas estarão disponíveis onde definimos o <router-view>
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})

/* é necessário registrar o 'router.js' dentro do 'main.js', 
para que a instância do vue saiba que essas rotas foram definidas */