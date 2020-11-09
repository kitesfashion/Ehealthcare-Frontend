<template>
<div>

    <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img src="https://www.flexicomms.co.uk/wp-content/uploads/2017/06/47935028_ml.jpg" alt="" class="kjl"> </a> 
                </div>
            </div>
          <hr>
            <div class="row">  
                <div class="col-lg-1 col-md-1 col-12">
                </div>
            
                <div class="col-lg-10 col-md-10 col-12">
                <div class="row">
                <div class="col-lg-8 col-md-8 col-12">
                <!-- <img :src="blog.image" alt="" class="kjl sid">  -->

                <img :src="k+blog.image" alt="" class="kjl sid"> 

               <h5 class="ssss"> <span> <i class="fa fa-user-md" aria-hidden="true"></i> {{blog.author}} </span></h5> 
                <h5 class="ssss"> <span class="fg"> <i class="fa fa-calendar" aria-hidden="true"> </i> 
                {{blog.created_at}}
                
                </span></h5> 
               <hr>
                <table class="table table-bordered text-justify ">
                    <tr>
               <td > <h3 >{{blog.name}}</h3></td>                  
                    </tr>
                    <tr>
                        <td>
                       <p>{{blog.details}}</p>
                       <p>{{blog.details1}}</p>
                       <p>{{blog.details2}}</p>
                       <p>{{blog.details3}}</p>
                        </td>
                    </tr>
                </table>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="sidebar">
                    <h5 class="bg-success" style="padding:15px; color:white">Recent Post</h5>

                    <a :href="'/blog_view/' + blogg.id" v-for="blogg in blogview" :key="blogg.id">{{blogg.name.substring(0,100)}}</a> 
                         
                    <!-- <router-link :to="'/blog_view/' + blogg.id" v-for="blogg in blogview" :key="blogg.id" >{{blogg.name.substring(0,100)}}</router-link> -->

                    </div>
                </div>
                </div>
                </div>
                 <div class="col-lg-1 col-md-1 col-12">
                </div>
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
        blogview: [],
        errors: [],
        blogId:0,
        blog:{},
        k:config.My_url
      }
    },
   mounted() { 
     this.blogId = this.$route.params.bid;
     this.blogsingle();

     
   },
    created() {  
      axios.get(`${config.BASE_URL}/api/blogs`)
      .then(response => {
      console.log(response.data)
        this.blogview = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    },
    methods : {
            blogsingle(){
                axios.get(`${config.BASE_URL}/api/blog/`+ this.blogId)            
                    .then(response => { 
                       console.log(response.data)
                       this.blog = response.data
                       })
                          
                 .catch(function (error) {
                console.log(error);
       });
   }
}
}
</script>

<style>
.sid{
    height: 600px;
}
.ssss{
    color:rgb(16, 143, 84);
    text-align: left;
}
.fg{
    padding: 5px;
}
</style>