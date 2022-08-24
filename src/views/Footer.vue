<template>
  <ion-tabs @ionTabsWillChange="beforeTabChanges" @ionTabsDidChange="afterTabChanges">
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/PasswordManager">
        <ion-icon icon="calendar"></ion-icon>
        <ion-label>Keestash</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="Settings">
        <ion-icon icon="personCircle"></ion-icon>
        <ion-label>Settings</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import {IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from "@ionic/vue";

export default {
  name: "Footer",
  components: {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonRouterOutlet,
    IonLabel
  },
  methods: {
    beforeTabChanges() {
      console.log('before change')
    },
    afterTabChanges() {
      console.log('after change')
    }
  }
}
</script>

<style scoped>

</style>