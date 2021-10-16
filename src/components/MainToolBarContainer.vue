<template>
<ion-header translucent="true" fullscreen>
  <ion-toolbar>

    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>

    <!-- search bar -->
    <ion-searchbar  :hidden="searchBar.display"  @ionBlur="hideSearch()"   animated="true" inputmode="text"></ion-searchbar>

    <ion-buttons slot="secondary" >

      <template v-if="authenticated">
        <ion-button>
              <ion-thumbnail>
                <ion-img class="rounded fit" :src='"http://localhost/storage/"+user.avatar'></ion-img>
              </ion-thumbnail>
        </ion-button>
      </template>
      <template v-else>
        <ion-button>
              <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
        </ion-button>
      </template>

     
      <ion-button @click="revealSearch()">
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button color="secondary">
        <ion-icon
          slot="icon-only"
          :ios="ellipsisHorizontal"
          :md="ellipsisVertical"
        ></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonButton, IonButtons, IonIcon, IonToolbar, IonMenuButton, IonSearchbar } from "@ionic/vue";
import {
    ellipsisHorizontal,
    ellipsisVertical,
    helpCircle,
    personCircle,
    search,
    star,
} from "ionicons/icons";
import { defineComponent } from "vue";
import { mapGetters } from 'vuex';

export default defineComponent({
    name: "MainToolBarContainer",
    data (){
      return {
        searchBar: {
          display : true
        }
      }
    },
    computed: {
      ...mapGetters({
        authenticated : 'auth/authenticated',
        user: 'auth/user',
      })
    },

    methods : {
        revealSearch(){
        
        if( this.searchBar.display != false){
          
          this.searchBar.display = false
          
        }
        else{

          this.searchBar.display = true
        }
        
      },
      hideSearch(){
        this.searchBar.display = true;
      }
    },

    components: {
        IonButton,
        IonButtons,
        IonIcon,
        IonMenuButton,
        IonToolbar,
        IonSearchbar
    },
    setup() {
        return {
            ellipsisHorizontal,
            ellipsisVertical,
            helpCircle,
            personCircle,
            search,
            star,
        };
    },
});
</script>