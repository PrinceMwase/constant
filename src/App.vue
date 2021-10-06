<template>
  <ion-app>
      <MainToolBarContainer />
      <menucontainer  />
      <transition>
        <ion-router-outlet></ion-router-outlet>
      </transition>
      
  </ion-app>  
</template>

<style scoped>
  .slide-fade-enter-active{
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5 , 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }

</style>

<script lang="ts">
import { IonApp, IonRouterOutlet} from '@ionic/vue';
import { defineComponent } from 'vue';
import menucontainer from '@/components/menucontainer.vue';
import MainToolBarContainer from '@/components/MainToolBarContainer.vue';



export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    menucontainer,
    MainToolBarContainer
    
    
    
    
  }
});
</script>