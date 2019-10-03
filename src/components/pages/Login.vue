<template>
<v-app id='app'>
  <v-app-bar app :flat="true" color="light-blue" dark>
        <!--<v-spacer></v-spacer>-->
      <v-toolbar-title>Smart-Inn</v-toolbar-title>
  </v-app-bar>
  <v-content>
    <v-container grid-list-md>
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm6 lg6 md5>
          <v-card class="login-card">
            <v-card-title>
              <span class="headline">ログイン</span>
            </v-card-title>
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
                    v-model="credentials.email"
                    :counter="70"
                    label="Eメールアドレス"
                    maxlength="70"
                    required
                  />

                  <v-text-field
                    type="password"
                    v-model="credentials.password"
                    :counter="20"
                    label="パスワード"
                    maxlength="20"
                    required
                  />
                </v-container>
                <v-btn class="light-blue white--text" depressed :disabled="!valid" @click="submit">ログイン</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md12 text-center>
          <a href='/'>Homeにもどる</a>
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
import {mapActions} from 'vuex'  // 追加

export default {
  name: 'Login',
  data: () => ({
    credentials: {},
    valid: true,
    loading: false,
    email: [
      v => !!v || 'ユーザー名は必須です'
    ],
    password: [
      v => !!v || 'パスワードは必須です'
      // v => (v && v.length > 4) || "ユーザー名は5文字以上でなければなりません"
    ]
  }),

  mounted () {
    localStorage.clear()
  },

  methods: {
    ...mapActions(['login']),
    ...mapActions(['myInfoGet']),

    submit () {
      this.nonFieldErrors = []
      this.login([this.credentials.email, this.credentials.password]).then(res => {
        // ゲストとホストの分岐
        this.myInfoGet().then(res => {
          // console.log(res['is_host'])
          if (res['is_host']) {
            this.$router.push('host/home')
          } else {
            this.$router.push('guest/home')
          }
        })
      }, err => {
        this.nonFieldErrors = err.response.data.nonFieldErrors
      })

      // vuex版
      // this.nonFieldErrors = []
      // this.login([this.credentials.email, this.credentials.password]).then(res => {
      //   this.$router.push('guest/home')
      // }, err => {
      //   this.nonFieldErrors = err.response.data.nonFieldErrors
      // })

      // 通常版
      // this.$request.auth.login(this.credentials.email, this.credentials.password).then(res => {
      //   console.log(res.data)
      //   this.$request.defaults.headers.common['Authorization'] = `JWT ${res.data.token}`
      //   this.$router.push('guest/home/')
      //   console.log(this.$request.defaults.headers.common['Authorization'])
      // }, err => {
      //   this.nonFieldErrors = err.response.data.nonFieldErrors
      //   console.log(err)
      // })
    }
  }
}
</script>