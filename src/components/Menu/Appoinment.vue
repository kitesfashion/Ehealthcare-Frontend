<template>
  <div>
       <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img src="https://www.asterbangalore.com/assets/images/doctor_listing_banner.png" alt="" class="bnnerw"> </a> 
                </div>
            </div>
         </div>
            <br>
    <div class="container">  
            <div class="row">                     
                   <div class="col-lg-12 col-md-12 col-12 boxes">
                     <h3 class="addrss">Make Your Appointment</h3> <hr>
                     <form  @submit.prevent="addAppoinment">
                        <div class="form-row">
                            <div class="col-md-6 col-lg-6 col-12">
                            <input type="text" class="form-control" v-model="appoinment.name" required placeholder="Your Name">
                            <br>
                            </div>
                            <div class="col-md-6 col-lg-6 col-12">
                            <input type="Number" class="form-control" min="1" v-model="appoinment.phone" required placeholder="Your Phone">
                            <br>
                            </div>
                            <div class="col-md-6 col-lg-6 col-12">
                            <input type="email" class="form-control" v-model="appoinment.email"  placeholder="Your Email">
                             <br>
                            </div>
                            <div class=" col-md-3 col-lg-3 col-6">
                            <input type="date" class="form-control" v-model="appoinment.date" required placeholder="Age">
                            <br>
                            </div>
                            <div class="col-md-3 col-lg-3 col-6">
                            <input type="time" class="form-control" v-model="appoinment.time" required >
                            <br>
                            </div>
                           <div class="col-md-4 col-lg-4 col-12">
                              <select class="form-control" v-model="appoinment.appointcat" required>
                                 <option value="">Select Appointment Category</option>
                                 <option :value="cat.id" v-for="cat in category" :key="cat.id">{{cat.test_category}}</option>
                               
                              </select>
                              <br>
                           </div>
                          
                             <div class="col-md-4 col-lg-4 col-12">
                              <select class="form-control" v-model="appoinment.sample" required>
                                 <option value="">Sample Collection</option>
                                 <option value="Home">Home</option>
                                 <option value="Hospital">Hospital</option>
                              </select>
                              <br>
                           </div>
                              <br>
                             <div class="col-md-4 col-lg-4 col-12">
                              <select class="form-control" v-model="appoinment.report" required>
                                 <option value="">Report Collection</option>
                                 <option value="Home">Home</option>
                                 <option value="Hospital">Hospital</option>
                                 <option value="Online">Online</option>
                              </select>
                                <br>
                           </div>
                          <div class="col-md-6 col-lg-6 col-12">
                            <input type="text" class="form-control" v-model="appoinment.address" required placeholder="Your Address" >
                            <br>
                            </div>
                             <div class="col-md-6 col-lg-6 col-12">
                            <input type="text" class="form-control" v-model="appoinment.comments" required placeholder="Comments" >
                            <br>
                            </div>
                            <div class="col-3"></div>
                            <div class="col-6"><button class="btn btn-info  btn-block">Send </button></div>
                            <div class="col-3"></div>
                            <br><br>
                        </div>
                    </form>

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
        category: [],
        errors: [],
        appoinment:{}
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

    },
     methods: {
        addAppoinment() {
             axios.post(`${config.BASE_URL}/api/appoinments`, this.appoinment)
                .then( res => {
                  //  event.target.reset();
                     console.log(res.data)             
                        this.flashMessage.success({
                            title: 'Thanks For Appoinment',
                            message: 'We Are Confirm to calling',
                            time: 5000,
                            flashMessageStyle: {
                                backgroundColor: 'linear-gradient(#e66465, #9198e5)'
                            }
                        });
                   this.appoinment=''
                })
              
        }
    },

}
</script>

<style>
.bn{
   padding: 0px!important;
}
</style>