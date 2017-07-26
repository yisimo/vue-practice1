<template>
  <div>
    {{ hello }}
    <button @click="emitMyEvent">emit</button>
<!--    <slot name="header">no header</slot>
    <p>I am vince</p>
    <slot name="footer">no footer</slot>-->
  </div>
</template>

<script>
 export default{
     props: {
         'my-value':[String]
     },
     data(){
         return{
           hello:'I am component a'
         }
     },
   methods: {
     emitMyEvent () {
         this.$emit('my-event',this.hello)
     }
   }
 }
</script>
