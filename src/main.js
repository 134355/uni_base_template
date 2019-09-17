import Vue from 'vue'
import App from './App'
import store from './store'
import MinRouter from './utils/MinRouter'
import minRouter from './router'
import MinRequest from './utils/MinRequest'
import minRequest from './api'
import MinCache from './utils/MinCache'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(MinRouter)
Vue.use(MinRequest)
Vue.use(MinCache)
// 设置默认缓存时间
// Vue.use(MinCache, {timeout: 600})

const app = new Vue({
	...App,
	store,
	minRouter,
	minRequest
})
app.$mount()
