<template>
<ion-header translucent="true" fullscreen>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-buttons slot="secondary">

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

     
      <ion-button>
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
import { IonButton, IonButtons, IonIcon, IonToolbar, IonMenuButton } from "@ionic/vue";
import {
    ellipsisHorizontal,
    ellipsisVertical,
    helpCircle,
    personCircle,
    search,
    star,
} from "ionicons/icons";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name: "MainToolBarContainer",
    computed: {
      ...mapGetters({
        authenticated : 'auth/authenticated',
        user: 'auth/user',
      })
    },
    components: {
        IonButton,
        IonButtons,
        IonIcon,
        IonMenuButton,
        IonToolbar,
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