<template>
  <v-ons-page>
    <v-ons-card>
      <div class="title">
        <span class='marker'>ホーム画面</span>
      </div>
      <div class="content">
        ここにあなたのお気に入りの場所や<br>
        宿泊先の情報が表示されます。
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
/* eslint-disable */
import Qr from '../pages/Qr'
export default {
  name: "Home",
  key: "HomeMaster",
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