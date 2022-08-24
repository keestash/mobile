<template>
  <ion-page>
    <Header></Header>
    <ion-content>
      Going to change user settings here
    </ion-content>
    <Footer></Footer>
  </ion-page>
</template>

<script>
import {IonContent, IonPage} from "@ionic/vue";
import Footer from "@/views/Footer";
import Header from "@/views/Header";

export default {
  name: "Settings",
  components: {
    Header,
    Footer,
    IonPage,
    IonContent
  },
}
</script>

<style scoped>

</style>