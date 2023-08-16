import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$' + value.toLocaleString() 
})

new Vue({
	//registrando o router diretamente dentro da instância
	router,
	store,
	render: h => h(App),
}).$mount('#app')
