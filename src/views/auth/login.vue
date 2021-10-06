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
          <ion-title size="large">Tssssssssssssssssssssssssssssssssssssssab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <LoginContainer />
      
    </ion-content>
  </ion-page>
  
</template>

<script lang="ts">


import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import LoginContainer from '@/components/auth/LoginContainer.vue';
import axios from 'axios';


                                
export default  {
  name: 'login',
  components: { LoginContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }

}
</script>