

<template>

<form action="#" v-on:submit.prevent>

  <ion-grid :fixed='true'>
    <ion-row >
      <ion-col class="ion-align-self-center" size-lg="4" size-md="6" size-sm="8"   >
        <ion-item>
          <ion-input type="email"  required  v-model="form.email" placeholder="Email" ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="ion-align-self-center" size-lg="4" size-md="6" size-sm="8">
          <ion-item>
    <ion-input type="password" required v-model="form.password" placeholder="Password"></ion-input>
  </ion-item>
      </ion-col>
    </ion-row><ion-row>
      <ion-col class="ion-align-self-center" size-lg="4" size-md="6" size-sm="8">
        <ion-button type="submit" @click="submit()" > Sign IN </ion-button>
      </ion-col>
    </ion-row><ion-row>
      <ion-col>
        
      </ion-col>
    </ion-row>
  </ion-grid>
</form>
 
</template>

<script lang="ts">
import { IonButton, IonInput, IonItem, IonGrid, IonRow, IonCol }  from '@ionic/vue';
import axios from 'axios';

import { mapActions } from 'vuex';


export default {
  name: 'LoginContainer',
  data(){
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods : {

    ...mapActions({
      signIn: 'auth/signIn'
    }),

    async submit(){
      await this.signIn(this.form)

      this.$router.replace({name: 'home'})
    }


  },

  setup(){
   
     
    return {
      
     
    }
   
  },
  components:{
      IonButton, IonInput, IonItem, IonGrid, IonRow, IonCol 
  }
}
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