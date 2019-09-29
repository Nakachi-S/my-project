<template>
  <v-ons-page>
    <p class="error">{{ error }}</p>
    <p class="decode-result">Last result: <b>{{ content }}</b></p>
    <div class="qrReader">
      <qrcode-stream :paused="paused" @init="onInit" @decode="onDecode"></qrcode-stream>
    </div>
    <v-ons-modal :visible="modalVisible" @click="modalVisible = false">
      <p style="text-align: center">
        しばらくお待ちください <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br>
        チェックイン情報を取得しています
      </p>
    </v-ons-modal>
  </v-ons-page>
</template>

<script>
/* eslint-disable */
import { QrcodeStream } from 'vue-qrcode-reader'
export default {
  components: { QrcodeStream },
  name: "Qr",
  key: "Qr",
  data () {
    return {
      //qr関連
      paused: false,
      content: '',
      error: '',
      //modal関連
      modalVisible: false,
      timeoutID: 0
    }
  },
  methods: {
    async onInit (promise) {
      // show loading indicator
      try {
        await promise
        // successfully initialized
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          // user denied camera access permisson
        } else if (error.name === 'NotFoundError') {
          // no suitable camera device installed
        } else if (error.name === 'NotSupportedError') {
          // page is not served over HTTPS (or localhost)
        } else if (error.name === 'NotReadableError') {
          // maybe camera is already in use
        } else if (error.name === 'OverconstrainedError') {
          // passed constraints don't match any camera. Did you requested the front camera although there is none?
        } else {
          // browser is probably lacking features (WebRTC, Canvas)
        }
      } finally {
        // hide loading indicator
      }
    },
    onDecode(content){
      this.paused = true
      this.modalVisible = true
      clearTimeout(this.timeoutID)
      this.timeoutID = setTimeout(() => this.modalVisible = false, 2000)
      // 以下にAPIの追加
    }
  },
}
</script>
<style>
.qrReader { 
  height: 100%;
}
</style>