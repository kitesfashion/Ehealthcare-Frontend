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
                     <form>
                        <div class="form-row">
                            <div class="col-md-6 col-lg-6 col-12">
                            <input type="text" class="form-control" required placeholder="Your Name">
                            <br>
                            </div>
                            <div class="col-md-6 col-lg-6 col-12">
                            <input type="Number" class="form-control" min="1" required placeholder="Your Phone">
                            <br>
                            </div>
                            <div class="col-md-6 col-lg-6 col-12">
                            <input type="email" class="form-control"  placeholder="Your Email">
                             <br>
                            </div>
                            <div class=" col-md-3 col-lg-3 col-6">
                            <input type="date" class="form-control" required placeholder="Age">
                            <br>
                            </div>
                            <div class="col-md-3 col-lg-3 col-6">
                            <input type="time" class="form-control" required >
                            <br>
                            </div>
                           <div class="col-md-4 col-lg-4 col-12">
                              <select class="form-control" >
                                 <option value="">Appointment Category</option>
                                 <option value="">Doctor Appointment</option>
                                 <option value="">Blood Test</option>
                                 <option value="">Covid-19 Test</option>
                                 <option value="">Routing Test</option>
                                 <option value="">Others Test</option>
                              </select>
                              <br>
                           </div>
                            
                             <div class="col-md-4 col-lg-4 col-12">
                              <select class="form-control" >
                                 <option value="">Sample Collection</option>
                                 <option value="">Home</option>
                                 <option value="">Hospital</option>
                              </select>
                              <br>
                           </div>
                              <br>
                             <div class="col-md-4 col-lg-4 col-12">
                              <select class="form-control" >
                                 <option value="">Report Collection</option>
                                 <option value="">Home</option>
                                 <option value="">Hospital</option>
                                 <option value="">Online</option>
                              </select>
                                <br>
                           </div>
                          <div class="col-md-6 col-lg-6 col-12">
                            <input type="text" class="form-control" required placeholder="Your Address" >
                            <br>
                            </div>
                             <div class="col-md-6 col-lg-6 col-12">
                            <input type="text" class="form-control" required placeholder="Comments" >
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
export default {

  

}
</script>

<style>
.bn{
   padding: 0px!important;
}
</style>