<template>


  <ion-menu side="start"  content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item button  router-link="/" router-direction="back" >
          <ion-icon :icon="homeOutline" slot="start"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button  router-link="/login" router-direction="forward" >
          <ion-icon :icon="logInOutline" slot="start"></ion-icon>
          <ion-label>Sign In</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>

</template>
<style>
.my-custom-menu {
  --width: 500px;
}
</style>

<script>
const ioncomponents = [ 
  'IonContent', 
  'IonHeader', 
  'IonItem', 
  'IonList', 
  'IonMenu', 
  'IonRouterOutlet',
  'IonTitle', 
  'IonToolbar',
  'menuController',
  'IonIcon',
  
  'IonLabel',
  ]
  console.log( `${ioncomponents}` );
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,
  menuController,
  IonIcon,
  
  IonLabel
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { logInOutline, homeOutline } from 'ionicons/icons';

export default defineComponent({
    name:'menucontainer',
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet,
    IonTitle, 
    IonToolbar,
    IonIcon,
   
    IonLabel,
    
  },
   setup() {
      
    return {
      logInOutline,
      homeOutline,
    }
  },
  methods: {
   
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});


</script>