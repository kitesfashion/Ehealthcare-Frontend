<template>
<div>
  <div class="container-fluid">
        <div class="row">
             <div class="col-lg-12 col-md-12 col-12">
                 <h2 class="gren" >OUR TEST CATEGORY</h2>
                 <h4 class="ornge ty">We are committed to provide affordable services</h4>
                    <br>
            </div>
         
             <div class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12"></div>
          <div class="col-lg-10 col-md-10 col-xl-10 col-sm-12 col-12">
              <div class="row">

               <div class="col-lg-4 col-md-4 col-xl-3 col-sm-6 col-12 gg" v-for="item in category" :key="item.id">
                   <div class="card" style="width:99%">
                     <div class="img-wrapper">
                    <img :src="item.image" class="card-img-top inner-img" alt="...">
                     </div>
                    <div class="card-body">
             <router-link :to="'/test_view/' +item.id"><h5>{{item.test_category}}</h5></router-link>
                    </div>
                 
                    </div>
               </div>

               </div>
               </div>
               <div class="col-lg-1 col-md-1 col-xl-1 col-sm-12 col-12"></div>

        </div>
  </div>
</div>
</template>

<script>
    import axios from 'axios';
    import config from '@/config'
  
       
export default {
data() {
      return {
        category: [],
        errors: []
      }
    },
  

    created() {
      axios.get(`${config.BASE_URL}/api/test_category`)
      .then(response => {
      console.log(response.data)
        this.category = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
}
</script>

<style>
.gren{
    color:#009640;
}
.ornge{
    color:#EF7D00;
}
@media (min-width: 268px) and (max-width: 579px) {
      .gren{
    font-size:25px;
  }
}

.card:hover{
  box-shadow: 0 10px 10px rgb(37, 37, 37) ;
 
}
.card a:hover{
  color:#EF7D00;
  text-decoration: none !important;
}
.card{
margin-bottom: 20px;

}
.card a{
   color:#009640;
}
.gg img{
    height:200px;
}
.img-wrapper { 
  height: 200px;
  overflow: hidden; 
}

.inner-img {
  transition: 0.3s;
}

.inner-img:hover {
  transform: scale(1.1);
}

.img-wrapper {
  display: inline-block;
  box-sizing: border-box;

}

</style>