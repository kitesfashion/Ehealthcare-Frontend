<template>
  <div id="app">  
     
    <Layout></Layout>
  
  </div>
</template>

<script>
import Layout from './components/Layout/Layout'
export default {
  name: 'App',
  
  components: {
      Layout
  }
}

</script>

<style>
#app {
  /* font-family: "Times New Roman", Helvetica, Arial, sans-serif; */
  font-family: "Geneva", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(255, 255, 255);
  text-justify:left;
  
}
h1, h2, h3, h4, h5 {
    /* font-family: "Times New Roman", Helvetica, sans-serif; */
    /* font-family: "Arial Verdana", Helvetica, sans-serif; */
    /* font-family: "Lucida Console", Helvetica, sans-serif; */
    /* font-family: "Monospace", Helvetica, sans-serif; */
    /* font-family: "Courier New", Helvetica, sans-serif; */
    font-family: "Lucida Bright", Helvetica, sans-serif;
    /* font-family: "Lucida Console", Helvetica, sans-serif; */
    font-weight: 700;
    line-height: 1.5em;
}

</style>
