import Vue from 'vue'

// Components
import Header from './global/Header.vue';
import Sidebar from './global/Sidebar.vue';
import Breadcrumb from './global/Breadcrumb.vue';
import CardTemplate from './global/CardTemplate.vue'
import Charts from './Charts.vue'


//Maps
import GoogleMapsPage from './maps/google-maps/GoogleMapsPage.vue'
import LeafletMapsPage from './maps/leaflet-maps/LeafletMapsPage.vue'
import BubbleMapsPage from './maps/bubble-maps/BubbleMapsPage.vue'
import LineMapsPage from './maps/line-maps/LineMapsPage.vue'


// Registered Components
Vue.component('card', CardTemplate)

export {
    Charts,
    CardTemplate,
    GoogleMapsPage,
    LeafletMapsPage,
    BubbleMapsPage,
    LineMapsPage,
}