<template>
  <div>
          
 <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img :src="kl+sample.bannerimage" alt="" class="bnnerw"> </a> 
                </div>
            </div>
     </div>
          
    <div class="container-fluid  samplec"> <br><br><br>
            <div class="row"> 
               <div class="col-lg-2 col-md-2 col-12"> 
                        
                   </div>
                  <div class="col-lg-8 col-md-8 col-12 ">
              <h1 class="text-center gren">Our Team Collect Sample At your Home</h1> 
                     <br>
                     <br>
                     <div class="row">
                         <div class="col-lg-6 col-md-6 col-12">
                            <h3 class="text-left smc">{{sample.header1}}</h3>
                            <p class="text-justify">{{sample.details1}}</p>
                      </div>
                        <div class="col-lg-6 col-md-6 col-12"> 
                        <h3 class="text-left smc">{{sample.header2}}</h3>
                         <p class="text-justify">{{sample.details2}}</p>
                   </div> 
                        <div class="col-lg-6 col-md-6 col-12">
                            <h3 class="text-left smc">{{sample.header3}}</h3>
                            <p class="text-justify">{{sample.details3}}</p>
                      </div>
                        <div class="col-lg-6 col-md-6 col-12"> 
                        <h3 class="text-left smc">{{sample.header4}}</h3>
                        <p class="text-justify">{{sample.details4}}</p>
                   </div> 
                     
                   </div>
                  </div>
                   <div class="col-lg-2 col-md-2 col-12"> 
                        
                   </div>                     
            </div>
            <br><br><br>
    </div>
     <div class="container-fluid">   
            <div class="row ">             
                <div class="col-lg-2 col-md-2 col-12">
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <br><br>
                  <h2 class="smc">{{sample.header5}}</h2>
                  <br>
                  <p>{{sample.details5}}</p>
                 <br><br>

                    <router-link to="/appoinment"   class="btn btn-info btn-lg ">Appointment </router-link>
                <br> <br>
                </div>
                <div class="col-lg-6 col-md-6 col-12 bn">
               <a  href="#"><img :src="kl+sample.image" alt="" class="bnnerw"> </a> 
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
        sample: [],
        errors: [],
       kl:config.My_url,
      }
    },
    created() {
      axios.get(`${config.BASE_URL}/api/homesample`)
      .then(response => {
      console.log(response.data)
        this.sample = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }

}
</script>

<style>
.samplec{
  background-color:#e6f5ed;
}
.smc{
  color:green;
}



</style>