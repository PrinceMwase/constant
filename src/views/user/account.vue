<template>
  <ion-page>
    <ion-content>
        <div id="container">
          <p>Welcome </p>
          <strong > User Account  {{ user }} </strong>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import axios from 'axios';


export default {
    name : 'account',
    data(){
      return {
        user: String
      }
    },
    methods : {
      async getUser () {
          
           await axios.get('http://localhost/api/user').then ( (response) =>{  this.user = response.data.name  })

      },
    

    },
    components: { IonContent, IonPage },
    
    created(){
      this.getUser();
      console.log( this.user );
    }

   

};
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