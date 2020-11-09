<template>
<div>
     <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img :src="kl+banner.image2" alt="" class="bnnerw" > </a> 
                </div>
            </div>
         </div>
         <br>
  <div class="container-fluid">
        <div class="row">
             <div class="col-lg-12 col-md-12 col-12">
                 <h2 class="grenop gren" >OUR DOCTORS</h2>
                 <h4 class="orngeop ty">Which one are among the most needed</h4>
                 <br>
            </div>       
        <div class="col-lg-1 col-md-12 col-xl-1 col-sm-12 col-12"></div>

          <div class="col-lg-10 col-md-12 col-xl-10 col-sm-12 col-12">
              <div class="row">
               <div class="col-lg-4 col-md-4 col-xl-4 col-sm-6 col-12 ggop" v-for="doc in doctor" :key="doc.id">
                   <div class="card" style="width:99%">
                     <div class="img-wrapperop">
                    <img :src="kl+doc.image" class="card-img-top inner-imgop" alt="...">
                     </div>
                    <div class="card-body">
                      <h5>{{doc.name}}</h5>
                    </div>
                    <ul class="list-group list-group-flush kgf">
                        <li class="list-group-item"><span style="color:gray"><b>Specialty:</b> {{doc.specialty}}</span></li>
                        <li class="list-group-item"> <span style="color:gray"><b>Degree:</b>{{doc.degree}}</span></li>
                        <li class="list-group-item"> <span style="color:gray"><b>Chamber:</b>{{doc.chamber}}</span></li>

                    </ul>
                    <div class="card-body">
                        <a href="#"  ><button class="btn  btn-info" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Get Appointment</button></a>
                     
                    </div>               
                    </div>
               </div>

               </div>
               </div>
                <div class="col-lg-1 col-md-12 col-xl-1 col-sm-12 col-12"></div>
        </div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered kgf">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Make a Appointment </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.stop.prevent="addDoctor">
            <div class="row">
               <div class="form-group col-md-12">
            <div v-if="success" class="alert alert-success">
            Thanks For Doctor Appoinment,Please Wait For Confirmation
            </div>
            </div>
          <div class="form-group col-md-12">
            <!-- <label for="recipient-name" class="col-form-label">Patient Name</label> -->
            <input type="text" class="form-control" required  v-model="appointment.patient"  placeholder="Patient Name" id="recipient-name">
          </div>
           <div class="form-group col-md-8">
            <!-- <label for="recipient-name" class="col-form-label">Phone</label> -->
            <input type="number" class="form-control" required  v-model="appointment.phone" min="1" minlength="11" placeholder="Phone" id="recipient-name">
          </div>
           <div class="form-group col-md-4">
            <!-- <label for="recipient-name" class="col-form-label">Age</label> -->
            <input type="number" placeholder="Age"   v-model="appointment.age" min="1" minlength="2" class="form-control" id="recipient-name">
          </div>
          
            <div class="form-group col-md-6">
            <!-- <label for="recipient-name" class="col-form-label">Phone</label> -->
            <input type="date" class="form-control" required  v-model="appointment.date" placeholder="Phone" id="recipient-name">
          </div>
            <div class="form-group col-md-6">
            <!-- <label for="recipient-name" class="col-form-label">Phone</label> -->
            <input type="time" class="form-control" required v-model="appointment.time" placeholder="Phone" id="recipient-name">
          </div>
          </div>
      
     
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
        <button type="submit" class="btn btn-info">Send message</button>
      </div>
        </form>
         </div>
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
        doctor: [],
        banner: [],
        errors: [],
        appointment:{},
        success:false,
       kl:config.My_url,
      }
    },
    created() {
      axios.get(`${config.BASE_URL}/api/doctor`)
      .then(response => {
      console.log(response.data)
        this.doctor = response.data
      })
      .catch(e => {
        this.errors.push(e)
      }),
      axios.get(`${config.BASE_URL}/api/banner`)
      .then(response => {
      console.log(response.data)
        this.banner = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    },
     methods : {
           
       addDoctor() {
             axios.post(`${config.BASE_URL}/api/appointment`, this.appointment)
                .then( res => {
                  //  event.target.reset();
                     console.log(res.data)             
                        this.flashMessage.success({
                            title: 'Thanks For Doctor Appointment',
                            message: 'We Are Happy to you',
                            time: 5000,
                            flashMessageStyle: {
                                backgroundColor: 'linear-gradient(#e66465, #9198e5)'
                            }
                        });
                   this.appointment=''
                    this.success = true;          
                })
              }
            }
}
</script>

<style>
.grenop{
    color:#009640;
}
.orngeop{
    color:#EF7D00;
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
 h5{
  color:#009640;
}
.card a{
   color:#009640;
}
.ggop img{
    height:250px;
}
.img-wrapperop { 
  height: 250px;
  overflow: hidden; 
}

.inner-imgop {
  transition: 0.3s;
}

.inner-imgop:hover {
  transform: scale(1.1);
}

.img-wrapperop {
  display: inline-block;
  box-sizing: border-box;

}
.kgf{
    text-align: left;
}
.bnnerw{
    width:100%;
}
</style>