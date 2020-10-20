<template>
  <div >
    <Slider></Slider>
    <br>
   <About></About>
   <br> <br>
   <Testcategory></Testcategory>
   <Helpline></Helpline>
   <Quota></Quota>
   <br>
   <br>
   <Blog></Blog>
  </div>
</template>

<script>
import Slider from '@/components/Home/Slider'
import About from '@/components/Home/About'
import Testcategory from '@/components/Home/Testcategory'
import Helpline from '@/components/Home/Helpline'
import Quota from '@/components/Home/Quota'
import Blog from '@/components/Home/Blog'

export default {
  name: 'Index',
   components: {
     Slider,
     About,
     Testcategory,
     Helpline,
     Quota,
     Blog
   
  }
}
</script>

<style scoped>

</style>
