<template>
<v-app id='app'>
  <v-app-bar app :flat="true" color="light-blue" dark>
        <!--<v-spacer></v-spacer>-->
      <v-toolbar-title>Smart-Inn</v-toolbar-title>
  </v-app-bar>
  <v-content>
    <v-container>
      <v-layout justify-center>
        <br>
        <v-btn color="light-blue" depressed @click="submit"><span style="color:white">表示する</span></v-btn>
      </v-layout>
      <v-layout justify-center>
        <qriously :value="qr_code" :size="400" v-if="isActive" />
      </v-layout>
    </v-container>
  </v-content>
  <v-footer app color="light-blue">
    <v-spacer></v-spacer>
    <span class="white--text">&copy; 2019</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'QrHost',
  data () {
    return {
      qr_code: '',
      isActive: false
    }
  },
  mounted () {
    this.checkLoggedIn()
  },
  methods: {
    submit () {
      this.$request.auth.host_info_get(localStorage.getItem('id')).then(res => {
        this.qr_code = res.data['qr_code']
        this.isActive = true
        console.log(this.qr_code)
      }, err => {
        this.nonFieldErrors = err.response.data.nonFieldErrors
        console.log(err)
      })
    },

    checkLoggedIn () {
      if (!this.$request.defaults.headers.common['Authorization']) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style>

</style>