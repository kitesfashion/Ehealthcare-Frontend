<template>
   <div>
        <div class="container-fluid">
               <div class="row">
              <div class="col-lg-12 col-md-12 col-12">
              <h2 class="blueh text-center">ABOUT US</h2>
               <h4 class="ty">We're <span class="blue">Local Lab</span>  With <span class="g">Global Expertise..</span> </h4>
               </div>
               </div>
               <br>
               <div class="row">
               <div class="col-lg-6 col-md-6 col-12 ">
                   <div class="box2">
                <p class="text-justify ">{{mission.about}}</p>
              
                <h3 class="color ty ">Our Mission & Vision</h3>
                <p class="text-justify">{{mission.mission}}</p>
                <br>
                 <h3 class="gp ty">Our Unique Specialty</h3>
                <p class="text-justify">{{mission.uniquenes}}</p>
                   </div>       
               </div>
                <br>
               <div class="col-lg-6 col-md-6 col-12 ">
                <img :src="mission.banner" alt="" class="gk box">
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
        mission: [],
        errors: []
      }
    },
  
    created() {
      axios.get(`${config.BASE_URL}/api/mission`)
      .then(response => {
      console.log(response.data)
        this.mission = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
}
</script>

<style>
.blueh{
    color:#009640;
}
@media (min-width: 268px) and (max-width: 579px) {
      .blueh{
    font-size:25px;
  }
}
@media (min-width: 268px) and (max-width: 579px) {
      .ty{
    font-size:20px;
  }
}

.gp{
   color:#EF7D00;
}
.gk{
    width:100%;
}

.box2 {
padding: 40px;
   position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

 
  }
  .color{
      color:rgb(10, 153, 69)
  }
</style>