<template>
  <v-ons-page>
    <v-ons-card>
      <div class="title">
        <span class='marker'>チェックイン</span>
      </div>
      <div class="content">
        カメラアイコンをタップして<br>
        チェックインをしましょう
      </div>
    </v-ons-card>
    <v-ons-fab
      position="bottom center"
      :visible="true"
      :ripple="true"
      @click = "pushPage"
    >
      <v-ons-icon icon="camera"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
/* eslint-disable */
import Qr from '../pages/Qr'
export default {
  name: "CheckIn",
  key: "CheckInMaster",
  data () {
    return {
    }
  },
  methods: {
    pushPage(e) {
      this.$emit('push-page', {page: Qr});
      // console.log('hello')
    },
  },
}
</script>
<style>
.marker {
  border-bottom: solid 3px #03A9F4;
}
</style>