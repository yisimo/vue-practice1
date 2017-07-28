<template>
  <div>
    <h1>{{ msg }}</h1>
    {{ $route.params.color }}
    <button @click="getParams">get params</button>
   <!-- <router-view></router-view>-->
  </div>
</template>

<script>
  export default{
    data() {
       return{
          msg:'I am apple'
       }
    },
    methods:{
      getParams(){
          console.log(this.$route.params)
      }
    }
  }
</script>
