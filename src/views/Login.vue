<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Log In</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <form @submit="handleLoginSubmit">
        <ion-item lines="full">
          <ion-label position="floating">Username</ion-label>
          <ion-input type="text" required v-model="form.user"></ion-input>
        </ion-item>

        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" required v-model="form.password"></ion-input>
        </ion-item>

        <ion-row>
          <ion-col>
            <ion-button type="submit" color="danger" expand="block">Sign In</ion-button>
            <a class="small-text">Forgot Password?</a>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {defineComponent} from 'vue';
import routes from "@/service/routes";
import {mapActions} from "vuex";

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
    IonItem,
    IonInput,
    IonButton,
    IonBackButton,
    IonButtons,
    IonLabel
  },
  data() {
    return {
      form: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions("login", {
      setUserData: "setUserData",
    }),
    handleLoginSubmit(e: Event) {
      e.preventDefault();

      fetch(routes['login'](), {
        method: 'POST',
        body: JSON.stringify(this.form)
      }).then(async (response: Response) => {
        const headers = response.headers;

        this.setUserData(
            {
              token: headers.get('X-Keestash-Token')
              , userHash: headers.get('X-Keestash-User')
            }
        )
            .then(() => {
              this.$router.push('/PasswordManager');
            })
        ;

      })

    }
  }
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