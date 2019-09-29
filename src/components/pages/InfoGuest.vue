<template>
    <v-ons-page>
      <v-ons-list>
        <v-ons-list-header>氏名</v-ons-list-header>
         <v-ons-list-item>
            <v-ons-input placeholder="名字" float
              v-model="first_name"
            >
            </v-ons-input>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-input placeholder="名前" float
              v-model="second_name"
            >
            </v-ons-input>
        </v-ons-list-item>
      </v-ons-list>
      <br>
      <v-ons-list>
        <v-ons-list-header>住所</v-ons-list-header>
         <v-ons-list-item>
            <v-ons-input placeholder="住所" float
              v-model="address"
            >
            </v-ons-input>
        </v-ons-list-item>
      </v-ons-list>
      <br>
      <v-ons-list>
        <v-ons-list-header>生年月日</v-ons-list-header>
         <v-ons-list-item>
            <v-ons-input type="date" placeholder="生年月日" float
              v-model="date"
            >
            </v-ons-input>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-page>
</template>

<script>
// import router from '../../router'
export default {
  name: 'InfoGuest',
  data () {
    return {
      first_name: '',
      second_name: '',
      address: '',
      date: ''
    }
  },
  mounted () {
    // this.checkLoggedIn()
  },
  methods: {
    // checkLoggedIn () {
    //   if (!this.$request.defaults.headers.common['Authorization']) {
    //     router.push('/login')
    //   }
    // }
  }
}
</script>