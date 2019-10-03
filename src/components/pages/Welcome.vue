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
            チェックインを<br>
            スムーズに、スマートに。
          </v-flex>
          <v-flex xs8 sm8 md4 text-center mt-10 mb-10 class="keyvisual-btn">
            <v-btn large outlined  color="white" href="/guest/signup">はじめる</v-btn>
            <v-btn large depressed color="white" style="color: #03A9F4;" href="/login">ログイン</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container fluid mt-1>
        <v-layout justify-center align-center wrap row>
          <v-flex xs12 sm6 md4>
            <v-card outlined>
              <v-card-title>宿泊施設提供者へ</v-card-title>
              <v-card-text>あなたの宿泊施設をスマートに</v-card-text>
              <v-card-actions>
                <v-btn color="light-blue" href="/host/signup" depressed><span style="color:white">はじめる</span></v-btn>
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
// import router from '../../router'
export default {
  name: 'Welcome',
  methods: {
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