<template>
  <div>
    {{ hello }}
   <!-- {{ numberToDo }}-->
    <!--<button @click="emitMyEvent">emit</button>-->
    <!--<slot name="header">no header</slot>
    <p>this is content</p>
    <slot name="footer">no footer</slot>-->
<!--    <slot name="header">no header</slot>
    <p>I am vince</p>
    <slot name="footer">no footer</slot>-->
  </div>
</template>

<script>
 export default{
     props:{
       'number-to-do':[Number,String,Object]
     },
     data(){
         return{
           hello:'I am component A'
         }
     },
   methods: {
     emitMyEvent () {
         this.$emit('my-event',this.hello)
     }
   }
 }
</script>
