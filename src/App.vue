<template>
  <div id="app" >
    

<component v-if="header==true" v-bind:is="component"></component>
<router-view></router-view>



  </div>
</template>

<script>
import test from './Header.vue'
export default {
   components:{
        'test' : test,
    },
  name: 'App',
  data () {
    return {
      header: true,
      component: 'test'
       
       
       
    }
  },
  mounted() {

      if(localStorage.getItem('Header') == "true"){
        this.header = true
      }else
      {
        this.header = false
      }

    }
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
   -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#logo-grouppe{
  margin-left: 5%;
  margin-top: -5%;
  width: 120px;
  height: 40px;
}
</style>
