<template>
  <v-app id='app'>
    <v-app-bar app :flat="true" color="light-blue" dark>
        <!--<v-spacer></v-spacer>-->
      <v-toolbar-title>Smart-Inn</v-toolbar-title>
    </v-app-bar>
    <v-content class="content">
      <v-container fluid class="pt-0">
        <v-layout justify-center align-center wrap row class="keyvisual pa-0">
          <v-flex xs12 class="keyvisual-title">
            ようこそ。<br><br>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid mt-1>
        <v-layout justify-center align-center wrap row>
          <v-flex xs11 sm6 md4>
            <v-card outlined>
              <v-card-title>QRコードの表示</v-card-title>
              <v-card-text>チェックイン用のQRコードを表示します。</v-card-text>
              <v-card-actions>
                <v-btn color="light-blue" href="/host/qr" target="_blank" depressed><span style="color:white">開く</span></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>  
      <v-layout justify-center align-center wrap row>
          <v-flex xs11 sm6 md4>
            <v-card outlined>
              <v-card-title>宿泊施設の登録・更新</v-card-title>
              <v-card-text>宿泊施設情報の登録・更新を行います。</v-card-text>
              <v-card-actions>
                <v-btn color="light-blue" href="/host/info" depressed><span style="color:white">登録・更新</span></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
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
  name: 'HomeHost',
  mounted () {
    this.checkLoggedIn()
  },
  methods: {
    checkLoggedIn () {
      if (!this.$request.defaults.headers.common['Authorization']) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style>
.content{
  overflow: scroll;
  height: 100vh;
}
.keyvisual {
  background-color: #03A9F4;
}
.keyvisual-title {
  font-size: 1.6em;
  text-align: center;
  color: white;
  padding-top: 50px;
}
</style>