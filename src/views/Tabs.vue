<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

      <ion-buttons slot="end">
        <ion-menu-button />  
      </ion-buttons>
      <ion-title>Home</ion-title>

      </ion-toolbar>
    </ion-header>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="triangle" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/login">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonMenuButton, IonButtons, IonTitle, IonToolbar, IonHeader } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonMenuButton, IonButtons, IonTitle, IonToolbar, IonHeader },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>