<template>
<v-app id='app'>
  <v-app-bar app :flat="true" color="light-blue" dark>
        <!--<v-spacer></v-spacer>-->
      <v-toolbar-title>Smart-Inn</v-toolbar-title>
  </v-app-bar>
  <v-content>
    <v-container fluid class="pt-0">
      <v-layout justify-center align-center wrap row class="keyvisual pa-0">
        <v-flex xs12 class="keyvisual-title">
          宿泊施設情報を登録<br><br>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md>
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm6 lg6 md5>
          <v-card class="info-host-card">
            <v-card-text>
              <v-layout
                row
                fill-height
                justify-center
                align-center
                v-if="loading"
              >
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                />
              </v-layout> 
              <v-form v-else ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-text-field
                    v-model="credentials.name"
                    :counter="70"
                    label="宿泊施設名"
                    maxlength="70"
                    required
                  />

                  <v-text-field
                    v-model="credentials.phone"
                    :counter="20"
                    label="電話番号"
                    maxlength="20"
                    required
                  />

                  <v-text-field
                    v-model="credentials.address"
                    :counter="100"
                    label="住所"
                    maxlength="100"
                    required
                  />
                </v-container>
                <v-btn class="light-blue white--text" depressed :disabled="!valid" @click="submit">登録</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md12 text-center>
          <a href='/host/home'>Homeにもどる</a>
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
// import {mapActions} from 'vuex'  // 追加

export default {
  name: 'InofHost',
  data: () => ({
    credentials: {},
    valid: true,
    loading: false
  }),
  methods: {
    // ...mapActions(['login']),
    // ...mapActions(['myInfoGet']),

    submit () {
      this.$request.auth.host_info_post(localStorage.getItem('id'), this.credentials.name, this.credentials.phone, this.credentials.address).then(res => {
        console.log(res)
      }, err => {
        this.nonFieldErrors = err.response.data.nonFieldErrors
        console.log(err)
      })
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