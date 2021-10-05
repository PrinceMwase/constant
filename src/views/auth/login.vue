<template>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <LoginContainer />
      <ion-router-outlet id="main"></ion-router-outlet>
    </ion-content>
  </ion-page>
  
</template>

<script lang="ts">


import { IonPage, IonHeader, IonToolbar, IonRouterOutlet, IonTitle, IonContent } from '@ionic/vue';
import LoginContainer from '@/components/auth/LoginContainer.vue';
import axios from 'axios';

axios.get( 'http://localhost/sanctum/csrf-cookie', );
                                
export default  {
  name: 'login',
  components: { LoginContainer, IonHeader, IonToolbar, IonRouterOutlet, IonTitle, IonContent, IonPage }

}
</script>