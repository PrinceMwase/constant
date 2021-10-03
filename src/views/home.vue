<template>
i
  <ion-page>
    <ion-header>
      <ion-toolbar>

      <ion-buttons slot="end">
        <ion-menu-button />  
      </ion-buttons>
      <ion-title>Home</ion-title>

      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Home" />
      <ion-button  >load sanctum</ion-button>
      
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import axios from 'axios';
axios.defaults.withCredentials = true;


axios.get( 'http://127.0.0.1:8000/sanctum/csrf-cookie', ).then(response => {
        console.log(response);
        
});
    


export default  {
  name: 'home',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonMenuButton, IonButtons, IonButton },
  methods:{
    sanctum : ()=>{
      axios.get( 'http://127.0.0.1:8000/sanctum/csrf-cookie', ).then(response => {
        console.log(response);
        
      });
    }
  }
}
</script>