<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                 <div class="col-lg-12 cl-md-12 col-12">
               <h2 class="blueh text-center gren">OURS BLOGS</h2>
               <h4 class="ty">As a  <span class="blue">Health</span>  And <span class="g"> Information services</span> </h4><br>
               </div>
               
          <div class="col-lg-1 col-md-12 col-xl-1 col-sm-12 col-12"></div>
          <div class="col-lg-10 col-md-12 col-xl-10 col-sm-12 col-12">
              <div class="row">

               <div class="col-lg-4 col-md-4 col-xl-4 col-sm-6 col-12 gg" v-for="blog in blog" :key="blog.id">
                   <div class="card cardss" style="width:99%">
                    <img :src="blog.image" class="card-img-top zoom" alt="...">
                    <div class="card-body">
                      <a href="#"><h4 class="card-title"> {{blog.name.substring(0,38)}} </h4></a>  
                        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-justify"><span style="color:gray;">
                          {{blog.details.substring(0,300)}}
                          
                        
                          </span></li>                 
                    </ul>
                    <div class="card-body">
                    <router-link :to="'/blog_view/' + blog.id" ><button class="btn  btn-block btn-info">Read More</button></router-link>


                    </div>
                    </div>
               </div>        
               </div>
               </div>
                <div class="col-lg-1 col-md-12 col-xl-1 col-sm-12 col-12"></div>
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
        blog: [],
        errors: []
      }
    },
  
    created() {
      axios.get(`${config.BASE_URL}/api/blogs`)
      .then(response => {
      console.log(response.data)
        this.blog = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
}
</script>


<style scoped>
.cardss{
margin-bottom: 35px;
text-align:left;
}
.cardss a{
    text-decoration: none ;
}
.cardss a:hover{
    color:coral
}
.cardss li{
    color:rgb(7, 13, 24);
     font-weight: bold;
}
.card:hover{
  box-shadow: 0 10px 10px rgb(37, 37, 37) ;
 
}
.zoom:hover {
  transform: rotateY(180deg);
}
.gg img{
    height:300px;
}
@media (min-width: 268px) and (max-width: 579px) {
      .card-body h4{
    font-size:20px;
  }
}
</style>   