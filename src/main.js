// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App)
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
