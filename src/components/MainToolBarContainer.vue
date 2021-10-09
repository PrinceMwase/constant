<template>
<ion-header translucent="true" fullscreen>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
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

export default defineComponent({
    name: "MainToolBarContainer",
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