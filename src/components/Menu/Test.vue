<template>
<div>
 <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img :src="kl+banner.image1" alt="" class="kjl"> </a> 
                </div>
            </div>
            <br>
            <div class="row">             
                <div class="col-lg-3 col-md-3 col-xl-3 col-sm-12 col-12">
                  <div class="sidebar">
                    <h5 class="bg-success" style="padding:15px; color:white">Ours Test Category</h5>
                    <a :href="'/test_view/'+ item.id" v-for="item in category" :key="item.id">{{item.test_category}}</a>


                    <!-- <a :href="'/blog_view/' + blogg.id" v-for="blogg in blogview" :key="blogg.id">{{blogg.name.substring(0,100)}}</a>  -->
                   
                    </div>
                </div>
                 <div class="col-lg-9 col-xl-9  col-md-9 col-sm-12  col-12">
                  <div class="row">

               <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6  col-12 gg" v-for="t in test" :key='t.id' >
                   <div class="card cards" style="width:99%">
                    <img :src="kl+t.image" class="card-img-top zoom" alt="...">
                    <div class="card-body">
                      <a href="#"><h4 class="card-title">{{t.name}}</h4></a>  
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span style="color:gray">Duration: {{t.duration}} Days</span></li>
                        <li class="list-group-item"><span style="color:red;font-size:23px;"> ৳ {{t.price}}</span>  <span style="color:gray">Per Person</span></li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="float-left" ><button class="btn  btn-info" @click="signleTest(t.id)" data-toggle="modal" data-target="#staticBackdrop">View Details</button></a>


                        <a href="#" class="float-right" ><button class="btn  btn-danger" @click="Book(t.id)" data-toggle="modal" data-target="#exampleModal1" data-whatever="@getbootstrap">Book Now</button></a>
                    </div>
                    </div>
               </div>
               
               </div>                
                </div>
            </div>

 </div>
<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
  Launch static backdrop modal
</button> -->
  
<!-- Details for Testing -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{{single.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">  
        <img :src="kl+single.image" style="width:100%;">
        <br>
     
        <table class="table table-hover table-bordered table-info">
           <tr>
            <td colspan="2"><b>{{single.name}}</b></td>    
          </tr>
          <tr>
            <td>Duration</td>
            <td v-if="single.duration==1">{{single.duration}}  Day</td>
            <td v-if="single.duration>1">{{single.duration}}  Days</td>
          </tr>
            <tr>
            <td>Test Fee</td>
            <td>{{single.price}} Tk.</td>
          </tr>
          <tr>
            <td>Report</td>
            <td>{{single.report}}</td>
          </tr>
            <tr>
            <td>Appointment</td>
            <td>{{single.appointment}}</td>
          </tr>
           <tr class="text-justify">
            <td colspan="2">{{single.details}}</td>    
          </tr>
          </table>    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal1" data-whatever="@getbootstrap">Book Now</button>
      </div>
    </div>
  </div>
</div>

<!-- Booking -->

  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered kgf">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Make a Booking</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <form @submit.prevent="addTest">
      <div class="modal-body"> 
            <div class="row">
              <div class="form-group col-md-12">
            <div v-if="success" class="alert alert-success">
            Thanks For Test Appoinment,Please Wait For Confirmation
            </div>
            </div>
            <input type="text"   v-model="testappoinment.testid">
          <div class="form-group col-md-12">       
            <input type="text" class="form-control"  v-model="testappoinment.patient" required placeholder="Patient Name" id="recipient-name">
          </div>
           <div class="form-group col-md-8">
            <!-- <label for="recipient-name" class="col-form-label">Phone</label> -->
            <input type="number" class="form-control" v-model="testappoinment.phone" min="1" required placeholder="Phone" id="recipient-name">
          </div>
           <div class="form-group col-md-4">
            <!-- <label for="recipient-name" class="col-form-label">Age</label> -->
            <input type="number" placeholder="Age" min="1" v-model="testappoinment.age" class="form-control" id="recipient-name">
          </div>
             <div class="form-group col-md-12">
            <!-- <label for="recipient-name" class="col-form-label">Age</label> -->
            <input type="text" placeholder="Your address" v-model="testappoinment.address" required class="form-control" id="recipient-name">
          </div>
            <div class="form-group col-md-6">
            <!-- <label for="recipient-name" class="col-form-label">Phone</label> -->
            <input type="date" class="form-control" v-model="testappoinment.date"  required id="recipient-name">
          </div>
            <div class="form-group col-md-6">
            <!-- <label for="recipient-name" class="col-form-label">Phone</label> -->
            <input type="time" class="form-control" v-model="testappoinment.time" required id="recipient-name">
          </div>
            <div class="form-group col-md-6" itemref="">
            <select class="form-control" required v-model="testappoinment.sample" >
                <option value="">Sample Collection</option>
                <option value="Home">Home</option>
                <option value="Hospital">Hospital</option>
              </select>
          </div>
            <div class="form-group col-md-6">
            <select class="form-control"  required  v-model="testappoinment.report">
                <option value="">Report Collection</option>
                <option value="Home">Home</option>
                <option value="Hospital">Hospital</option>
                <option value="Online">Online</option>
            </select>
          </div>
          </div>
       
      </div>
      <div class="modal-footer ">   
        <button type="submit" class="btn btn-info float-right">Send</button>
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
        banner: [],
        errors: [],
        success: false,
        test:{},
        Testid:0,
       kl:config.My_url,
       single:{}, 
       book:'',
       testappoinment:{testid:7},
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
    mounted() { 
      
     this.Testid = this.$route.params.tid;
     this.testView();
     this.signleTest();

   },
      methods : {
            testView(){
                axios.get(`${config.BASE_URL}/api/test_view/`+ this.Testid)            
                    .then(response => { 
                       console.log(response.data)
                       this.test = response.data
                       })
                          
                 .catch(function (error) {
                console.log(error);
               });
             },
            signleTest(id){
                axios.get(`${config.BASE_URL}/api/single_view/`+id)            
                    .then(response => { 
                       console.log(response.data)
                       this.single = response.data
                       })
                          
                 .catch(function (error) {
                console.log(error);
              });
             },
        Book(id){
            this.book=id;          
        },
       addTest() {
             axios.post(`${config.BASE_URL}/api/testappoinment`, this.testappoinment)
                .then( res => {
                     console.log(res.data)             
                        this.flashMessage.success({
                            title: 'Thanks For Test Appointment',
                            message: 'We Are Happy to you',
                            time: 5000,
                            flashMessageStyle: {
                                backgroundColor: 'linear-gradient(#e66465, #9198e5)'
                            }
                        });
                   this.testappoinment=''
                 this.success = true;
                })
              }
            }
          }
</script>

          <style>
          .kjl{
          width: 100%;
          }
          .cards{
          margin-bottom: 35px;
          text-align:left;
          }
          .cards a{
              text-decoration: none ;
          }
          .cards a:hover{
              color:coral
          }
          .cards li{
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
              height:200px;
          }
          .sidebar {
            margin: 0;
            padding: 0;
            width: 100%;
            background-color: #f1f1f1;
            height: 100%;
            overflow: auto;
          }

          /* Sidebar links */
          .sidebar a {
            display: block;
            color: black;
            padding: 16px;
            text-decoration: none;
            border:solid 1px rgb(255, 255, 255);
          }

          /* Active/current link */
          .sidebar a.active {
            background-color: #4CAF50;
            color: white;
          }

          /* Links on mouse-over */
          .sidebar a:hover:not(.active) {
            background-color: #555;
            color: white;
            text-decoration: none;
          }

          </style>