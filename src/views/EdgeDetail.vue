<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ this.getEdge.node.name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-item>
        <ion-label position="stacked">Username</ion-label>
        <ion-input v-model="this.getEdge.node.username.plain"></ion-input>
      </ion-item>

      <ion-item @click="copyPassword">
        <ion-label position="stacked">Password</ion-label>
        <ion-input
            :type="passwordField.visible ? 'text' : 'password'"
            :readonly="!passwordField.visible"
            :value="this.passwordField.value"
            autocomplete="off"
        ></ion-input>
        <ion-button clear slot="end" expand="block" size="medium" @click="showPassword">Show</ion-button>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">URL</ion-label>
        <ion-input v-model="this.getEdge.node.url.plain" type="url"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Share</ion-label>
        <ion-textarea
            disabled
            readonly
            :value="this.getShareInfo()">
        </ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Attachments</ion-label>
        <ion-textarea
            disabled
            readonly
            :value="this.getAttachmentsInfo()">
        </ion-textarea>
      </ion-item>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import {mapGetters} from "vuex";
import {Router} from "@/service/router";
import routes from "@/service/routes";

export default {
  name: "EdgeDetail",
  components: {
    IonPage,
    IonContent,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonTextarea,
    IonButton
  },
  data() {
    return {
      passwordField: {
        value: '',
        visible: false
      }
    }
  },
  created() {
    this.passwordField.value = this.getEdge.node.password.placeholder;
  },
  methods: {
    copyPassword() {
      this.retrievePassword()
          .then(async (data) => {
            await navigator.clipboard.writeText(data.decrypted);
            document.focus();
            document.execCommand("copy");
          });

    },
    getShareInfo() {
      if (null !== this.getEdge.node.organization) {
        return 'This password belongs to ' + this.getEdge.node.organization.name + '. Everyone in the organization has access.';
      }

      let text = '';
      const shareCount = this.getEdge.node.shared_to.length;
      if (shareCount > 0) {
        text = 'This password is shared to ' + shareCount + ' users';
      }

      if (null !== this.getEdge.node.public_share) {

        const publicShareText = 'This password is {further} shared publicly. Everyone with a valid URL can access the username and password';
        const toReplace = '' !== text ? 'further' : '';
        publicShareText.replace('{further}', toReplace);
        text = text + publicShareText;
      }

      if ('' === text) {
        return 'The password is not shared to anyone.';
      }

      return text;
    },
    getAttachmentsInfo() {
      if (null === this.getEdge.node.attachments) {
        return 'There are no documents attached to this password';
      }

      return 'There are ' + this.getEdge.node.attachments.length + ' attachments atteched to this password';
    },
    updatePassword(password, visible) {
      this.passwordField.value = password;
      this.passwordField.visible = visible;
    },
    retrievePassword() {
      const router = new Router();
      return router.get(routes['node/get/password'](this.getEdge.node.id.toString()))
    },
    showPassword() {
      if (true === this.passwordField.visible) {
        this.passwordField.value = this.getEdge.node.password.placeholder;
        this.passwordField.visible = false;
        return;
      }
      this.retrievePassword()
          .then(response => response.json())
          .then((data) => {
            this.updatePassword(
                data.decrypted
                , true
            );
          });

    }
  },
  computed: {
    ...mapGetters(
        'passwordManager'
        , {
          getEdge: 'getSelectedEdge'
        }
    )
  }
}
</script>

<style scoped>

</style>