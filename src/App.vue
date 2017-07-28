<template>
  <div>
    <!--<ul>
      <li v-for="(item,index) in list" list :class="{odd: index % 2}">{{ item.name }} {{ item.price }} 索引值为：{{ index }}</li>
    </ul>
    <button @click="addItem">addItem</button>
    <button @click="setItem">setItem</button>-->

    <!--<a :href="link" :class="[classA,classB]" :style="linkCss">BaiDu</a>-->

   <!-- <a v-if="partA">partA</a>
    <a v-else>no data</a>
    <button @click="toggle">toggle</button>-->
   <!-- <a v-show="!partA">partB</a>-->

    <!--<input type="text" @keydown.enter="onKeyDown" placeholder="input something">-->

   <!-- <com-a @my-event="getMyEvent" :number-to-do="myValue">
      <p slot="header">xxxx header</p>
      <p>content</p>
      <p slot="footer">yyyy footer</p>
    </com-a>
    <p :is="comToRender"></p>
    <input type="text" v-model="myValue">{{ myValue }}-->

    <!--<input type="radio" v-model="myBox" value="apple">
    <input type="radio" v-model="myBox" value="banana">
    <input type="radio" v-model="myBox" value="orange">{{ myBox }}-->

   <!-- <select v-model="selection">
      <option v-for="item in selectionOption" :value="item.value">{{ item.text }}</option>
    </select>
    {{ selection }}-->

    <!--<ul>
      <li v-for="(value,key) in objList">{{ key + ':' + value }}</li>
    </ul>-->

    <!--<com-a v-for="(value,key) in objList" :key="key"> {{ value }} </com-a>-->

    <!--css-transition-->

    <!--<button @click="toggleCom">Toggle</button>
    <div class="transbox">
      <transition name="fade" mode="out-in">
        <p :is="currentView"></p>
      </transition>
    </div>-->

    <!--js-transition-->
    <!--<button class="transbox" @click="show = !show">toggle</button>
    <div class="transbox">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false">
        <p class="animate-p" v-show="show">I am show</p>
      </transition>
    </div>-->

   <!-- directives 局部自定义指令-->
    <!--<p v-color="'red'">Hello World</p>-->

    <!--<input type="text" v-focus>-->

    <!--vue-router-->
    <!--<transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <router-link :to="{name:'applePage'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>
    <router-link :to="{path:'red'}">to red apple</router-link>
    <router-link :to="{path:'green'}">to green apple</router-link>-->

    <!--vuex-->
  <h1>TotalPrice {{ totalPrice }}</h1>
    <book></book>
    <pen></pen>

  </div>
</template>

<script>
  import Vue from 'vue'
  import comA from './components/a.vue'
  import comB from './components/b.vue'
  import book from './components/book.vue'
  import pen from './components/pen.vue'
export default {
  name: 'app',
 components:{
   comA,
   comB,
   book,
   pen,
 },
  directives:{
    color:function (el,binding) {
      el.style.color = binding.value
    },
    focus:{
      inserted(el,binding){
        el.focus();
      }
    }
  },
  data(){
      return{
        currentView:'com-a',
        show:true,
        comToRender:'com-a',
        selectionOption:[
          {
              text:'milk',
              value:1
          },
          {
              text:'egg',
              value:2
          },
        ],
        selection:null,
        myBox: [],
        myValue:'',
        link:'http://www.baidu.com',
        classStr:'red-font',
        classObj:{
          'blue-font':true,
          'big-font':false,
        },
        classA:'hello',
        classB:'world',
        linkCss:{
          'color':'#f00',
          'font-size':'20px'
        },
        partA:true,
        myVal:'',
        list: [
          {
            name:'apple',
            price:38
          },
          {
            name:'banana',
            price:29
          },
        ],
        objList:{
          name:'apple',
          price:38,
          color:'red',
          weight:300,
        }
      }
  },
  computed:{
    myValueWithNum () {
        return this.myValue.replace(/\d/g,'')
    },
    totalPrice(){
        /*return this.$store.state.totalPrice*/
      return this.$store.getters.getTotal
    }
  },
  watch:{
    myValue:function (val,oldval) {
      console.log(val,oldval)
    },
    list () {
        this.tellUser()
    }
  },
  methods:{
    addItem () {
        this.list.push({
          name:'pinaapple',
          price:256
        })
    },
    setItem () {
      Vue.set(this.list,1,{
          name:'orange',
          price:20
      })
    },
    toggle () {
      this.partA = !this.partA
    },
    onKeyDown () {
      console.log('on key down')
    },
    getMyEvent (paraFromA) {
      console.log('getMyEvent'+paraFromA)
    },
    getMyValueWithNum(){
      return this.myValue.replace(/\d/g,'')
    },
    tellUser() {
        alert('list change!')
    },
    toggleCom(){
        if (this.currentView === "com-a"){
            this.currentView = 'com-b'
        }else{
            this.currentView = 'com-a'
        }
    },
    beforeEnter:function (el) {
      $(el).css({
        left:'-500px',
        opacity:0,
      })
    },
    enter:function (el,done) {
      $(el).animate({
        left:'0',
        opacity:1
      },{
        duration:1500,
        complete:done,
      });
    },
    leave:function (el,done) {
      $(el).animate({
        left:'500px',
        opacity:0
      },{
        duration:1500,
        complete:done,
      });
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.transbox{
  width: 100px;
  height: 50px;
  position: relative;
  top: 300px;
  left: 300px;
}
.fade-enter-active,.fade-leave-active{
  transition: all .5s ease-out;
}
.fade-enter{
  transform:translateY(-500px);
  opacity:0;
}
.fade-leave-active{
  transform:translateY(800px);
  opacity:0;
}
.animate-p{
  position: absolute;
  top:0;
  left:0;
}

</style>
