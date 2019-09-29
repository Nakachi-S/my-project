<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="header-left left" v-show="last" :style="styleToolbar()" @click="popPage">
        <v-ons-button modifier="quiet" v-if="ios">
          <v-ons-icon size="25px" icon="ion-chevron-left"></v-ons-icon> Back
        </v-ons-button>
        <v-ons-button modifier="quiet" v-else>
          <v-ons-icon size="25px" icon="md-arrow-left"></v-ons-icon>
        </v-ons-button>
      </div>
      <div class="center header-title">Smart-Inn</div>
      <div class="right toolbar__right" :style="styleToolbar()"></div>
    </v-ons-toolbar>

    <v-ons-tabbar position="bottom"
      :tabs="tabs"
      :visible="true" 
      :index.sync="activeIndex"
      ref="Nav"
      @postchange="changeTab"
      @backButton="backButton"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>


<script>
/* eslint-disable */
import Nav from './Nav'
import Home from '../parts/Home'
import Map from '../parts/Map'
import CheckIn from '../parts/CheckIn'
import Setting from '../parts/Setting'

export default {
  name: 'HomeGuest',
  data() {
    return {
      activeIndex: 0,
      last: null,
      ios: this.$ons.platform.isIOS(),
      tabs: [
        {
          icon: 'home',
          label: 'Home',
          page: Nav,
          key: 'Home',
          props: {
            list: {
              extends: Home,
              data() {
              return {};
              }
            }
          }
        },
        {
          icon: 'map',
          label: 'Map',
          page: Nav,
          key: 'Map',
          props: {
            list: {
              extends: Map,
              data() {
              return {};
              }
            }
          }
        },
        {
          icon: 'camera',
          label: 'Check In',
          page: Nav,
          key: 'CheckIn',
          props: {
            list: {
              extends: CheckIn,
              data() {
              return {};
              }
            }
          }
        },
        {
          icon: 'cog',
          label: 'Setting',
          page: Nav,
          key: 'Setting',
          props: {
            list: {
              extends: Setting,
              data() {
              return {};
              }
            }
          }
        },
      ]
    };
  },
  components: {Home, Map, Nav, CheckIn, Setting},
  mounted () {
    this.checkLoggedIn()
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
    backButton(pageStack) {
      this.last = pageStack[pageStack.length - 2];
    },
    styleToolbar() {
      return `display: ${this.last ? 'inline' : 'none'}`;
    },
    changeTab() {
      this.backButton(this.$refs.Nav.$children[this.activeIndex].$data.pageStack);
    },
    popPage(e) {
      this.$refs.Nav.$children[this.activeIndex].$data.pageStack.pop();
      this.backButton(this.$refs.Nav.$children[this.activeIndex].$data.pageStack);
    },
    checkLoggedIn () {
      if (!this.$request.defaults.headers.common['Authorization']) {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
};
</script>
<style>

</style>