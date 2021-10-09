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
        <template v-if="!authenticated">
          <ion-item button  router-link="/login" router-direction="forward" >
            <ion-icon :icon="logInOutline" slot="start"></ion-icon>
            <ion-label>Sign In</ion-label>
          </ion-item>
        </template>
        <template v-else>
          <ion-item button @click="signOut"  router-direction="back" >
            <ion-icon :icon="logOutOutline" slot="start"></ion-icon>
            <ion-label>Sign Out </ion-label>
          </ion-item>
        </template>
     
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
import { logInOutline, homeOutline, logOutOutline } from 'ionicons/icons';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name:'menucontainer',
    computed: {
      ...mapGetters({
        authenticated : 'auth/authenticated',
        user: 'auth/user',
      })
    },
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
      logOutOutline
    }
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),

    async signOut(){
      await this.signOutAction()

      this.$router.replace( {name:'home'} )
    },
   
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});


</script>