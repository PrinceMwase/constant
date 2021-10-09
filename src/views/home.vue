<template>
  <ion-page>
    <ion-content>
        <HomeMainSliderContainer /> 
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import HomeMainSliderContainer from '@/components/home/HomeMainSliderContainer.vue';


export default defineComponent({
  name: 'HomePage',
  components: { IonContent, IonPage, HomeMainSliderContainer }
});
</script>


<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>