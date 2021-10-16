<template>
  <swiper :slides-per-view="1" :loop="true"  :pagination="{ clickable: true }" :effect='fade' >
    <swiper-slide v-for="store in stores" :key="store.name">
       <div >
      
        <figure class="md:flex bg-transparent rounded-xl p-8 md:p-0 ">
          <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" :src="`http://localhost/storage/`+store.photo" alt="" width="384" height="512">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg  font-semibold">
              {{store.description}}
              </p>
            </blockquote>
            <figcaption class="font-medium uppercase">
              <div class="text-white text-sm font-medium">
              {{store.name}}
              </div>
              <div class="text-gray-500 bg-teal-400">
                {{store.owner}}
              </div>
            </figcaption>
          </div>
        </figure>
      <!-- </ion-card> -->
       </div>
 
    </swiper-slide>
    
  </swiper>
  
</template>
<script>
  import { defineComponent } from 'vue';
  import SwiperCore, { EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonicSwiper } from '@ionic/vue';
  import 'swiper/swiper-bundle.min.css';
  import axios from 'axios';

  SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination, IonicSwiper]);

  export default defineComponent({
    components : {
      Swiper, SwiperSlide 
    },

    data(){
      return {
        stores : []
      }
    },

    methods: {
       async getStores(){
        
        await axios.get('/api/store').then( (response) => {
          this.stores = response.data;
          
        } )

      }
    },
   
   beforeMount() {
     this.getStores();
   },

     setup() {

    
   

    const items = [{
      'text': 'Item 1',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 2',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 3',
      'src': '/path/to/external/file.png'
    }];
    return { items }
  }
  });

 

  //  import '@ionic/vue/css/ionic-swiper.css';

</script>

 
<style>

.swiper-container{
 
  position: relative;
  /* height : 19%; */
  
}

</style>