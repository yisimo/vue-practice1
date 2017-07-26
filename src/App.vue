<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" list :class="{odd: index % 2}">{{ item.name }} {{ item.price }} 索引值为：{{ index }}</li>
    </ul>
    <button @click="addItem">addItem</button>
    <button @click="setItem">setItem</button>
    <a :href="link" :class="[classA,classB]" :style="linkCss">BaiDu</a>
    <a v-if="partA">partA</a>
    <a v-else>no data</a>
   <!-- <a v-show="!partA">partB</a>-->
    <button @click="toggle">toggle</button>
    <input type="text" @keydown.enter="onKeyDown" placeholder="input something">
    <com-a @my-event="getMyEvent"></com-a>
    <input type="text" v-model="myValue">{{ myValue }}
    <input type="radio" v-model="myBox" value="apple">
    <input type="radio" v-model="myBox" value="banana">
    <input type="radio" v-model="myBox" value="orange">{{ myBox }}
    <select v-model="selection">
      <option v-for="item in selectionOption" :value="item.value">{{ item.text }}</option>
    </select>
    {{ selection }}
<!--    <ul>
      <li v-for="(value,key) in objList">{{ key + ':' + value }}</li>
    </ul>-->
  <!--  <input type="text" v-model.number="myVal">
    <com-a :my-value="myVal" @my-event="getMyEvent">
      <p slot="header">xxx header</p>
      <p slot="footer">xxx footer</p>
    </com-a>-->
    <!--    <com-a v-for="(value,key) in objList" :key="key"> {{ value }} </com-a>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import comA from './components/a.vue'
export default {
  name: 'app',
 components:{
   comA
 },
  data(){
      return{
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
</style>
