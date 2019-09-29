<template>
  <v-ons-page>
    <v-ons-card>
      <div class="title">
        <span class='marker'>宿泊台帳</span>
      </div>
      <div class="content">
        ここにあなたの<br>宿泊台帳情報が表示されます。<br><br>
        まだ登録が完了していません。
      </div>
    </v-ons-card>
    <div class='container_button'>
      <v-ons-button @click = "pushPage" class='register_button'>宿泊台帳を登録</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
/* eslint-disable */
import InfoGuest from '../pages/InfoGuest'

export default {
  name: "Setting",
  key: "Setting",
  data () {
    return {
    }
  },
  methods: {
    pushPage(e) {
      this.$emit('push-page', {page: InfoGuest});
      // console.log('hello')
    },
  },
}
</script>
<style>
.marker {
  border-bottom: solid 3px #03A9F4;
}

.container_button{
  padding-top: 30px;
  text-align: center;
  margin: 10px;
}
</style>