<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

</style>
