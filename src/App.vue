<template>
  <ion-app>
      <MainToolBarContainer />
      <menucontainer  />
      <ion-router-outlet></ion-router-outlet>
  </ion-app>  
</template>

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