<template>
  <div>
          
 <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img src="https://aighospitals.com/wp-content/uploads/2018/08/Banner-Doctors.png" alt="" class="bnnerw"> </a> 
                </div>
            </div>
     </div>
          
    <div class="container-fluid  samplec"> <br><br><br>
            <div class="row"> 
               <div class="col-lg-2 col-md-2 col-12"> 
                        
                   </div>
                  <div class="col-lg-8 col-md-8 col-12 ">
              <h1 class="text-center  gren">Download Your Test Report </h1> 
                     <br>
                     <br>
                     <div class="row">
                         <div class="col-lg-6 col-md-6 col-12">
                            <h3 class="text-left smc">Find Your Report</h3>
                            <p class="text-justify">The decision of which statistical test to use depends on the research design, the distribution of the data, and the type of variable. In general, if the data is normally distributed, parametric tests should be used. If the data is non-normal, non-parametric tests should be used.</p>
                      </div>
                        <div class="col-lg-6 col-md-6 col-12"> 
                        <h3 class="text-left smc">Provide Your Register Phone Number  </h3>
                         <ul class="text-justify">
                           <li>Go to Appointment Or Test Menu</li>
                           <li>Submit Your All Query Form</li>
                           <li>Confirm For Calling </li>
                           <li>And Make Sure Your Appointment</li>
                         </ul>
                   </div> 
                        <div class="col-lg-6 col-md-6 col-12">
                            <h3 class="text-left smc">Home Sample Collection</h3>
                            <p class="text-justify">
                            You are welcomed by a receptionist at whichever of our hundreds of conveniently-located patient centres suits you best. If required, we can even travel to your home.
                            Your blood is collected in the best possible conditions with the utmost care by a member of our experienced nurse teams.
                              </p>
                      </div>
                        <div class="col-lg-6 col-md-6 col-12"> 
                        <h3 class="text-left smc">Are you Sure Your Report Ready?</h3>
                        <p class="text-justify">Our Service Providers Phlebotomist will visit your home to take samples (e.g. blood, urine) for tests.
                        Note: Price includes only for sample collection. For tests, please check the tests’ price list.
                          BDT 150 Registration fee is weaved for first time user for only the first month of Ma</p>
                   </div> 
                     
                   </div>
                   <br><br>
          
                  </div>
                   <div class="col-lg-2 col-md-2 col-12"> 
                        
                   </div>                     
            </div>
            <br><br><br>
    </div>
     <div class="container-fluid kjh"> 
            <div class="row"> 
               <div class="col-lg-2 col-md-2 col-12"></div>
                  <div class="col-lg-8 col-md-8 col-12 ">
                    
                        <div class="row">
                       <div class="col-lg-5 col-md-5 col-12">
                              <input class="form-control" required placeholder="Your Phone"
                             
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                type = "number"
                                maxlength = "11"
                                min="1"
                                
                             />
                       </div>
                       <div class="col-lg-5 col-md-5 col-12">
                           <input type="number" class="form-control" required placeholder="Test No" name="mobile" >
                       </div>
                        <div class="col-lg-2 col-md-2 col-12">
                           <button class="btn btn-block btn-info">Find Report</button>
                       </div>
                   </div>
                  </div>
             <div class="col-lg-2 col-md-2 col-12"> </div>
            </div>
     </div>


     <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-2 col-md-2 col-12"></div>
                <div class="col-lg-4 col-md-4 col-12">
                  <br><br>
                  <h2 class="smc">Missing Your Report?<br> If You Cannot find Your Online Report </h2>
                  <br>
                  <p>Inpatient care requires overnight hospitalization. Patients must stay at the medical facility where their procedure was done (which is usually a hospital) for at least one night. During this time, they remain under the supervision of a nurse or doctor.</p>
                 <br><br>

                    <router-link to="/contact"   class="btn btn-info btn-lg ">Support</router-link>

                </div>
                <div class="col-lg-6 col-md-6 col-12 bn">
               <a  href="#"><img src="https://image.freepik.com/free-photo/stethoscope-top-view-doctor-s-desk-table-blank-paper-white-background-view-doctor-work-tools-white-stethoscope-laptop-eyeglass-medical-drug-white-background-medical-doctor_11358-1583.jpg" alt="" class="bnnerw"> </a> 
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
.samplec{
  background-color:#e6f5ed;
}
.smc{
  color:green;
}
.kjh{
    background-color: lightcoral;
    padding: 60px;
}


</style>