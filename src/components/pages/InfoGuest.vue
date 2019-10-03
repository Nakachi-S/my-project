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
      <br>
      <v-ons-list>
        <v-ons-list-header>性別</v-ons-list-header>
         <v-ons-list-item>
            <v-ons-select style="width: 40%"
            v-model="gender"
            >
              <option v-for="item in items" :value="item.value">
                {{ item.text }}
              </option>
          </v-ons-select>
        </v-ons-list-item>
      </v-ons-list>
      <div class='container_button'>
        <v-ons-button @click = "submit" class='register_button'>登録</v-ons-button>
      </div>
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
      date: '',
      // なぜか最初が表示されないので？？を
      items: [ { text: '??', value: 2 }, { text: '男性', value: 0 }, { text: '女性', value: 1 } ],
      gender: ''
    }
  },
  mounted () {
  },
  methods: {
    submit () {
      console.log(this.first_name)
      console.log(this.second_name)
      console.log(this.address)
      console.log(this.date)
      console.log(this.gender)
    }
  }
}
</script>