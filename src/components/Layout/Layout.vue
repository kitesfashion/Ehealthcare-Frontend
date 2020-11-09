<template>

        <div> 
           <nav class="navbar navbar-warning bg-success">
              <div class="container-fluid kj">                             
                     <div class="col-lg-4 col-md-4 col-12"><i class="fa fa-mobile" aria-hidden="true"></i> {{contact.mobile1}}, {{contact.mobile2}}</div>
                     <div class="col-lg-4 col-md-4 col-12"> <marquee>{{contact.address}}</marquee></div>
                     <div class="col-lg-4 col-md-4 col-12"> <i class="fa fa-calendar" aria-hidden="true"></i> {{contact.free}} </div>
     
              </div>
           </nav> 
        <nav class="navbar f sticky-top navbar-expand-lg navbar-light bg-light navsa">
            <div class="container">

          <!-- <router-link to="/"  class="nav-link"><img src="@/assets/logo.png" alt="" class="g"></router-link> -->

          <router-link to="/"  class="nav-link"><img :src="k+contact.image" alt="" class="g"></router-link>
           
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse float-pull" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active hl">
                    <!-- <router-link to="{{name: 'Index'}}"  class="nav-link">Home <span class="sr-only">(current)</span></router-link> -->
                    <router-link class="nav-link" :to="{ path: '/' }"> <i class="fa fa-home" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</router-link>
                </li>
               
                <li class="nav-item active hl">
                    <router-link to="/test_view/all "  class="nav-link"> <i class="fa fa-heartbeat" aria-hidden="true"></i> Test Menu</router-link>
                </li>
                  <li class="nav-item active">
                    <router-link to="/doctor"  class="nav-link"> <i class="fa fa-user-md" aria-hidden="true"></i> Our Doctors</router-link>
                </li>
                <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <i class="fa fa-plus-square" aria-hidden="true"></i> Online Service
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <router-link to="/sample"  class="dropdown-item"> <i class="fa fa-ambulance" aria-hidden="true"></i> Home Sample Collection</router-link>
                    <router-link to="/home_report"  class="dropdown-item"> <i class="fa fa-h-square" aria-hidden="true"></i> Home Report Delivery</router-link>
                    <router-link to="/online_report"  class="dropdown-item"> <i class="fa fa-stethoscope" aria-hidden="true"></i> Online Report</router-link>
                   
                    </div>
                </li>
                  <li class="nav-item active">
                    <router-link to="/contact"  class="nav-link"> <i class="fa fa-address-book" aria-hidden="true"></i> Contact Us</router-link>
                </li>
                </ul>
             </div>
                 <form class="form-inline my-2 my-lg-0">
               <router-link to="/appoinment"> <button class="btn btn-outline-success my-2 my-sm-0"> <i class="fa fa-medkit" aria-hidden="true"></i>  Appointment</button></router-link>
                </form>
             </div>                         
            </nav>       
                <router-view/>  
                 
                
               <FlashMessage :position="'right bottom'"></FlashMessage>
        <div class="kjk navsa">
            <div class="container">
                <br>
                <div class="row jkh">
                <div class="col-lg-4 col-md-4 col-12">
                    <h4 class="l">Contact Us</h4>
                    <p>{{contact.address}}<br>
                    Phone : {{contact.mobile1}}<br>
                    Phone : {{contact.mobile2}}<br>
                    Email: {{contact.email}}

                   </p>             
                    
                </div>	
                 <div class="col-lg-4 col-md-4 col-12 jjh">
                    <h4 class="l">Important Links</h4>
                     <a href="https://neblbd.com/">Nur-E-Elahi Businss Limited</a><br>
                     <a href="https://kitesfashion.com/">Kites Fashion</a><br>
                     <a href="https://bglc.net/">Bangladesh Global Learning Center</a>
                </div>		  		  
                 <div class="col-lg-4 col-md-4 col-12">
                <h4>Follow Us</h4>
             
              <a href="#"  title="Facebook"><img src="https://cdn1.iconfinder.com/data/icons/social-media-2112/29/Asset_2-512.png" style="height:40px;padding:3px;"></a>
              <a href="#"  title="linkedin"><img src="https://nepa.com/wp-content/uploads/2017/09/linkedin-logo.png" style="height:40px;padding:3px;"></a>
                <a href="#"  title="Instagram"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" style="height:40px;padding:3px;"></a>
                       
                </div>
               </div>
               <br>
             </div>
         </div>
       <div class="footer ">
        <div class="container">
            <div class="row ">
                <div class="col-lg-6 col-md-6 col-12 hht"><p>© Copyright 2020. E HealthCare Bangladesh.</p></div>
                <div class="col-lg-6 col-md-6 col-12 jjh hht">Develop BY <a href="">NEBL IT</a> </div>
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
        contact: [],
        errors: [],
         k:config.My_url,
        
      }
    },
  
    created() {
      
       axios.get(`${config.BASE_URL}/api/company`)
      .then(response => {
      console.log(response.data)
        this.contact = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    }
    }
    </script>

<style scoped>
.kj{
  color:white
}
.hi{
    color:#bb2124;
    height:30px;
}
.g{
    height:60px;
    width:70px;
}
.jkh{
    text-align:left;
    color: ghostwhite;
}
.footer{
color:white;
background-color: #4BB543

}

.jjh a{
    color:ghostwhite;
}
.jjh a:hover{
    text-decoration: none;
    color:#030504;
}
.l{
       color:#ffffff;
       font-weight:bold;
}
.kjk{
    background-color: slategrey;
}
footer {
  background: #16222A;
  background: -webkit-linear-gradient(59deg, #3A6073, #16222A);
  background: linear-gradient(59deg, #3A6073, #16222A);
  color: white;
  margin-top:100px;
}

footer a {
  color: #fff;
  font-size: 14px;
  transition-duration: 0.2s;
}

footer a:hover {
  color: #FA944B;
  text-decoration: none;
}

.copy {
  font-size: 12px;
  padding: 10px;
  border-top: 1px solid #FFFFFF;
}

.footer-middle {
  padding-top: 2em;
  color: white;
}
  .navsa{
  box-shadow:
 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

}
 .hht{
   margin-top:10px;
 } 
.nav-link:hover{
  color:rgb(218, 35, 59)!important;
}
</style>