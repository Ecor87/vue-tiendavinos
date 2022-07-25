<template>
  <div id="app">
    <Navbar/>
    <router-view class="main" />
    <footer><p><i class="fa-regular fa-copyright"></i> Vinos mi Chile, 2022</p></footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapActions } from 'vuex'
export default{
  name: 'App',
  components:{
    Navbar
  },
  methods:{
    ...mapActions(['getHome','getProductos','getPromocion','getAccesorios'])
  },
  created(){
    this.getHome();
    this.getProductos();
    this.getPromocion();
    this.getAccesorios();
  }
}
</script>

<style>
footer{
  background-color: #343a40;
  color: white;
  height: 50px;
  padding-top: 15px;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: snow;
}
.main{
  margin: 20px 0 20px 0;
  min-height: 83vh
}


</style>
