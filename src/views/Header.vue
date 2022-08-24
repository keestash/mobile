<template>
  <ion-header>
    <ion-toolbar>
      <ion-avatar slot="start" style="padding: 5px">
        <img class="item-avatar" src="./../asset/keestash.png">
      </ion-avatar>
      <ion-title>Keestash</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonHeader, IonTitle, IonToolbar} from "@ionic/vue";

export default {
  name: "Header",
  components:{
    IonTitle,
    IonHeader,
    IonToolbar,
  }
}
</script>

<style scoped>

</style>