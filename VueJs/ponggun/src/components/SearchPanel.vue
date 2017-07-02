<template>
 <div class="ui teal center aligned segment">
   <div class="ui fluid action input">
     <a class="ui teal ribbon label">
       <h4>Contacts</h4>
     </a>
     <input type="text" placeholder="Search...">
     <div class="ui button" @click="onClickedAdd">Search</div>
   </div>
 </div>
</template>
<script>
/* eslint-disable */

export default {
 name: 'searchpanel',
 data () {
   return {
     msg: 'Welcome to Search Panel'
   }
 },
 methods:{
   onClickedAdd(){
    this.$emit('onClickedAdd')
   }
 }
}
</script>
