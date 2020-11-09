<template>
  <div>
            
 <div class="container-fluid">   
            <div class="row">             
                <div class="col-lg-12 col-md-12 col-12 bn">
               <a  href="#"><img :src="kl+banner.image3" alt="" class="bnnerw"> </a> 
                </div>
            </div>
         </div>
            <br>
         
    <div class="container">  
       <h2 class="gren">Contact Us</h2>  
       <br>
            <div class="row"> 
                              
                  <div class="col-lg-5 col-md-5 col-12  boxes">
                     <h3 class="addrss">Address</h3>   <hr>
                     <p class="textadd"><i class="fa fa-map-marker" aria-hidden="true"></i>
                     {{address.address}}
                     </p>
                  <p class="textadd"><i class="fa fa-phone-square" aria-hidden="true"></i> {{address.mobile1}}<br>
                     <i class="fa fa-phone-square" aria-hidden="true"></i>  {{address.mobile2}}
                  </p>
                  <p class="textadd"><i class="fa fa-envelope" aria-hidden="true"></i>  {{address.email}}</p>  
                  </div>
                   <div class="col-lg-7 col-md-7 col-12 boxes">
                     <h3 class="addrss">Send Your Feedback</h3> <hr>
                     <form @submit.prevent="addContact">
                        <div class="form-row">
                            <div class="col">
                            <input type="text" class="form-control" required placeholder="Your Name"  v-model="contact.name">
                            </div>
                            <div class="col">
                            <!-- <input type="Number" min="1" class="form-control" required placeholder="Your Phone"> -->
                            <input class="form-control" required placeholder="Your Phone"
                                 
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                type = "number"
                                maxlength = "11"
                                min="1"
                                v-model="contact.phone"
                             />
                                               
                               <br>
                            </div>
                            <div class="col-12">
                            <input type="email" class="form-control" v-model="contact.email" required placeholder="Your Email">
                             <br>
                            </div>
                            <div class="col-12">
                            <input type="text" class="form-control"  v-model="contact.subject" placeholder="Subject">
                            <br>
                            </div>
                            <div class="col-12">
                            <textarea type="text" class="form-control" v-model="contact.message" required placeholder="Your Message"></textarea>
                            <br>
                            </div>
                            <div class="col-9"></div>
                            <div class="col-3"><button class="btn btn-info  btn-block">Send</button></div>
                            <br><br>
                        </div>
                    </form>

                  </div>
              
            </div>
    </div>
     <br>
    <div class="container-fluid">  
            <div class="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1289.8908714741237!2d90.39086819369238!3d23.876767208622717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c53a93035273%3A0x773da61e77cd56d5!2sKites%20NEBC!5e0!3m2!1sen!2sbd!4v1602492561026!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
    </div>
 </div>
</template>

<script>
   import axios from 'axios';
   import config from '@/config'
    
export default {
data () {
 
    return {
      formInline1: {
        mobno: '',
      },
      rules1: {
        mobno: [{
          required: true,
          message: 'Please enter Mobile Number',
          trigger: 'blur'
        }, {
          min: 10,
          max: 10,
          message: 'Length must be 10',
          trigger: 'blur'
        }, {
          pattern: /^\d*$/,
          message: 'Must be all numbers',
          trigger: 'blur'
        }, {
          pattern: /^[789]/,
          message: 'Must start 7, 8 or 9',
          trigger: 'blur'
        }]
      },
       address: [],
        errors: [],
        contact:{},
       isLoading: false,
      fullPage: false,
      loader: 'bars',
      kl:config.My_url,
      banner:[]
    }
   
  },
created() {
      
       axios.get(`${config.BASE_URL}/api/company`)
      .then(response => {
      console.log(response.data)
        this.address = response.data
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
       methods: {
        addContact() {
             axios.post(`${config.BASE_URL}/api/contact`, this.contact)
                .then( res => {
                  //  event.target.reset();
                     console.log(res.data)             
                        this.flashMessage.success({
                            title: 'Thanks For Contact',
                            message: 'We Are Happy to you',
                            time: 5000,
                            flashMessageStyle: {
                                backgroundColor: 'linear-gradient(#e66465, #9198e5)'
                            }
                        });
                   this.contact=''
                })
              
        }
    },
}
</script>

<style>
.addrss{
    color:lightsalmon
}
.textadd{
    text-align: left;
}
.boxes {
box-shadow: inset 0 0 1px #000000;
padding: 10px;;

}

</style>