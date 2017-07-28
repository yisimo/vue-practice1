<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="addOne">addOne</button>
    <button @click="minusOne">minusOne</button>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              msg:'I am book',
              price:15
          }
      },
    methods:{
      addOne(){
        this.$store.dispatch('increase',this.price)
      },
      minusOne(){
          this.$store.commit('decreament',this.price)
      }
      }
  }
</script>
