// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple.vue'
import Banana from './components/banana.vue'
import RedApple from './components/redApple.vue'
import GreenApple from './components/greenApple.vue'
import Vuex from 'vuex'

Vue.use(VRouter)
Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    totalPrice:0,
  },
  getters:{
    getTotal(state){
      return state.totalPrice
    }
  },
  /*mutations 须同步*/
  mutations:{
    increament(state,price){
      state.totalPrice += price
    },
    decreament(state,price){
      state.totalPrice -= price
    }
  },

  /*actions 可异步*/
  actions:{
    increase(context,price){
      context.commit('increament',price)
    },
    /*increase(context,id){
      api(id,function (price){
        context.commit('increament',price)
      })
    }*/
  }
})

let router = new VRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/#'
    },
    {
      path:'/apple',
      component:Apple,
      name:'applePage',
      children:[
        {
          path:'red',
          component:RedApple
        },
        {
          path:'green',
          component:GreenApple
        }
      ]
    },
    {
      path:'/banana/:color/detail/:type',
      component:{
        viewA:'banana',
        viewB:'bigbanana'
      },
    }
  ]
})
router.beforeEach(router.push({path:'/'}))

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
  /*全局自定义指令*/
  directives:{
    color:function (el,binding) {
      el.style.color = binding.value
    },
  },
})

/*var myHeaderChild = {
  template:'<p v-html="test" @keydown.enter="enter"> <component :is=""></component> I am myHeaderChild </p>',
}

var myHeader = {
  template:'<p>This is myHeader <my-header-child></my-header-child></p> <keep-alive><router-view></router-view></keep-alive>',
  components:{
    'my-header-child': myHeaderChild
  }
}*/

/* eslint-disable no-new */
/*
new Vue({
  el:'#app',
  data(){
    return{
      word:'Hello Vue'
    }
  },
  components:{
    'my-header': myHeader,
  }
})
*/
