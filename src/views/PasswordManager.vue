<template>
  <ion-page>
    <Header></Header>
    <ion-content>
      <ion-list>
        <ion-list-header>
          All Passwords
        </ion-list-header>

        <ion-item v-for="e in getEdges" v-bind:key="e.node.id" @click="onClick(e)">
          <ion-avatar slot="start">
            <img src="./../asset/password.svg">
          </ion-avatar>
          <ion-label>
            <h2>{{ e.node.name }}</h2>
            <h3>
              <i class="fas fa-share-alt" :title="this.showOwnerName(e)"
                 v-if="e.type === 'organization'"></i>
              <i class="fas fa-share-alt" :title="this.showOwnerName(e)" v-if="e.type === 'share'"></i>
              <p v-else>Owned by you</p>
            </h3>
            <p>Listen, I've had a pretty messed up day...</p>
          </ion-label>
        </ion-item>

      </ion-list>

    </ion-content>
    <Footer></Footer>
  </ion-page>
</template>

<script>
import {IonAvatar, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonPage} from "@ionic/vue";
import routes from "@/service/routes";
import {Router} from "@/service/router";
import {mapActions, mapGetters} from "vuex";
import Footer from "@/views/Footer";
import Header from "@/views/Header";

export default {
  name: "PasswordManager",
  components: {
    Header,
    Footer,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonListHeader,
    IonAvatar,
  },
  created() {
    const router = new Router();
    router.get(routes['node/get']('root'))
        .then(response => response.json())
        .then((data) => {
          this.setEdges(
              data.node.edges.content
          );
        });
  },
  methods: {
    ...mapActions("passwordManager", {
      setEdges: "setEdges",
      setSelectedEdge: 'setSelectedEdge'
    }),
    showOwnerName: function (edge) {
      if (edge.type === 'organization') {
        return 'Shared by ' + edge.node.user.name + ' with ' + edge.node.organization.name;
      }
      if (edge.type === 'share') {
        return 'Shared by ' + edge.node.user.name + ' with you';
      }
    },
    onClick: function (e) {

      this.setSelectedEdge(e)
          .then(() => {
            this.$router.push('/EdgeDetail');
          })
    }
  },
  computed: {
    ...mapGetters('passwordManager'
        , {
          getEdges: 'getEdges'
        }
    )
  },
}
</script>

<style scoped>
</style>