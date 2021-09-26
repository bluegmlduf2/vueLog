<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand px-3" href="/vueLog">Vuelog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="/vueLog">Home</a>
        <a class="nav-link" href="/vueLog/list">List</a>
        <!-- <router-link to="/"></router-link> a태그대신에 사용가능-->
      </div>
    </div>
  </nav>
  <div div class="container-fluid mt-4">
    <router-view :blogs="blogs"></router-view>
  </div>      
</template>

<script>
import Blogs from './assets/blogs.js'

export default {
  name: 'App',
  data(){
    return{
      blogs:Blogs
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
