<template>
  <div >
  
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators"  data-slide-to="1" v-for="item in slider" :key="item.id"></li>


   
  </ol>
  
  <div class="carousel-inner ">

    <div class="carousel-item active maxh maaxh">
      <img class="d-block w-100 imh" src="https://lifelabs.azureedge.net/lifelabs-wp-cdn/wp-content/themes/lifelabs/assets/images/post-temp.png"   alt="Main">
    </div> 



     <div class="carousel-item maxh maaxh" v-for="item in slider" :key="item.id">
      <img class="d-block w-100 imh" :src="item.image"   :alt="item.name" >
    </div>
  



  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


  </div>
</template>

<script>
 import axios from 'axios';
 import config from '@/config'
export default {
  data() {
      return {
        slider: [],
        errors: []
      }
    },
  

    created() {
      axios.get(`${config.BASE_URL}/api/slider`)
      .then(response => {
      console.log(response.data)
        this.slider = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
}
</script>

<style scoped>

 @media (min-width: 268px) and (max-width: 579px) {
    .maxh{
    height:250px;

  }
}
  .imh{
    height: 100%;
  } 
 @media (min-width: 580px) and (max-width:1800px) {
     .maaxh{
      height:450px;
    
  }
}
</style>