<template>
   <div>
        <div class="container-fluid bck">
             
               <br>
               <div class="row ">    
               <div class="col-lg-2 col-md-1 col-12 "></div>

               <div class="col-lg-9 col-md-12 col-12 "><br><br>
                   <h3 class="bluef font-weight-bold text-justify gggh">
                       {{quoto.quoto}}
                        </h3> 
               <div class="row ">    

               <div class="col-lg-6 col-md-6 col-12 ">
                <img :src="quoto.image" alt="" class="gkg"> 
                   <span class="sir gggh"> {{quoto.quotoname}} </span>
<br><br><br>
               </div>
               <div class="col-lg-6 col-md-6 col-12 "></div>
               </div>
               </div>
               <div class="col-lg-1 col-md-1 col-12 "></div>

                <br>
              
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
        quoto: [],
        errors: []
      }
    },
  
    created() {
      axios.get(`${config.BASE_URL}/api/mission`)
      .then(response => {
      console.log(response.data)
        this.quoto = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
}
</script>

<style>
.bluef{
     color:#ffffff;
    text-align: center;
    
  
}
.g{
   color:#EF7D00;
   text-align: left;
}
.sir{
    color:#ffffff;
     font-size:25px;
}
.bck{
     
     height:100%;
     width: 100%;
    background: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url("https://www.wa11papers.com/assets/previews/medical-science-laboratory-doctor-medicine-research-lab-test%20tube-chemistry-wallpaper-4164-preview-59f07d97.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
}

.gkg{
    height: 100px;
    width: 100px;
     border-radius: 50%;
     text-align: left;
}
@media (min-width: 268px) and (max-width: 579px) {
      .gggh{
    font-size:15px;
  }
}
</style>