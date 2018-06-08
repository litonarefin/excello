<template>
  <div id="app">
    <div id="main-wrapper">
      <vue-min-header></vue-min-header>
      <Sidebar :navItems="nav"/>
      <div class="page-wrapper">
        <vue-min-breadcrumb></vue-min-breadcrumb>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>

      <vue-footer></vue-footer>

    </div>
  </div>
</template>

<script>
import nav from './nav'
import Preloader from './components/global/Preloader.vue';
import Header from './components/global/Header.vue';
import Breadcrumb from './components/global/Breadcrumb.vue';
import Sidebar from './components/global/Sidebar.vue';
import Footer from './components/global/Footer.vue';


export default {
    data (){
      return{
        nav: nav.items
      }
    },
    components: {
      VueMinPreloader: Preloader,
      VueMinHeader: Header,
      VueMinBreadcrumb: Breadcrumb,
      Sidebar,
      VueFooter: Footer
    },
    computed: {
      name(){
        return this.$route.name
      },
      list() {
        return this.$route.matched
      },
      isAuth () {
        return this.$route.path.match('auth')
      }
    }
}
</script>

<style lang="scss">
[v-cloak] {
    display: none;
}

@import "./assets/css/lib/bootstrap/bootstrap.min.css";
@import "~pure-semantic-ui-css/semantic.css";
@import "./assets/css/lib/calendar2/pignose.calendar.min.css";
@import "~owl-carousel-2/assets/owl.carousel.min.css";
@import "~owl-carousel-2/assets/owl.theme.default.min.css";

@import "./assets/icons/font-awesome/css/font-awesome.min.css";
@import "./assets/icons/simple-line-icons/css/simple-line-icons.css";
@import "./assets/icons/weather-icons/css/weather-icons.min.css";
@import "./assets/icons/themify-icons/themify-icons.css";
@import "./assets/icons/material-design-iconic-font/css/materialdesignicons.min.css";

@import "./assets/css/helper.css";
@import "./assets/css/style.css";

  .card-header{
    margin: -20px -20px 20px -20px;
  }
  .card-footer{
    margin: 20px -20px -20px -20px;
  }
  .card-text{
    padding: 10px;
  }
</style>
