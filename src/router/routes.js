// Dynamic Loading Modules

// Views
const Dashboard = resolve => { require.ensure(['../layouts/Dashboard.vue'], ()=>{ resolve(require('../layouts/Dashboard.vue')); }); };
const Alerts = resolve => { require.ensure(['../components/ui-alerts.vue'], ()=>{ resolve(require('../components/ui-alerts.vue')); }); };
const Calendar = resolve => { require.ensure(['../components/Calendar.vue'], ()=>{ resolve(require('../components/Calendar.vue')); }); };
const Buttons = resolve => { require.ensure(['../components/ui-buttons.vue'], ()=>{ resolve(require('../components/ui-buttons.vue')); }); };
const Dropdowns = resolve => { require.ensure(['../components/ui-dropdowns.vue'], ()=>{ resolve(require('../components/ui-dropdowns.vue')); }); };
const Badges = resolve => { require.ensure(['../components/ui-badges.vue'], ()=>{ resolve(require('../components/ui-badges.vue')); }); };
const Typography = resolve => { require.ensure(['../components/ui-typography.vue'], ()=>{ resolve(require('../components/ui-typography.vue')); }); };
const Progressbar = resolve => { require.ensure(['../components/ui-progressbars.vue'], ()=>{ resolve(require('../components/ui-progressbars.vue')); }); };
const Cards = resolve => { require.ensure(['../components/ui-cards.vue'], ()=>{ resolve(require('../components/ui-cards.vue')); }); };
const Grids = resolve => { require.ensure(['../components/ui-grids.vue'], ()=>{ resolve(require('../components/ui-grids.vue')); }); };
const Table = resolve => { require.ensure(['../components/Table.vue'], ()=>{ resolve(require('../components/Table.vue')); }); };
const Forms = resolve => { require.ensure(['../components/Forms.vue'], ()=>{ resolve(require('../components/Forms.vue')); }); };



//Charts
const BarChart = resolve => { require.ensure(['../components/charts/chartlists/BarChart.vue'], ()=>{ resolve(require('../components/charts/chartlists/BarChart.vue')); }); };
const LineChart = resolve => { require.ensure(['../components/charts/chartlists/LineChart.vue'], ()=>{ resolve(require('../components/charts/chartlists/LineChart.vue')); }); };
const Doughnut = resolve => { require.ensure(['../components/charts/chartlists/Doughnut.vue'], ()=>{ resolve(require('../components/charts/chartlists/Doughnut.vue')); }); };
const Radar = resolve => { require.ensure(['../components/charts/chartlists/Radar.vue'], ()=>{ resolve(require('../components/charts/chartlists/Radar.vue')); }); };
const Pie = resolve => { require.ensure(['../components/charts/chartlists/Pie.vue'], ()=>{ resolve(require('../components/charts/chartlists/Pie.vue')); }); };
const PolarArea = resolve => { require.ensure(['../components/charts/chartlists/PolarArea.vue'], ()=>{ resolve(require('../components/charts/chartlists/PolarArea.vue')); }); };


//Maps
const GoogleMapsPage = resolve => { require.ensure(['../components/maps/google-maps/GoogleMapsPage.vue'], ()=>{ resolve(require('../components/maps/google-maps/GoogleMapsPage.vue')); }); };
const LeafletMapsPage = resolve => { require.ensure(['../components/maps/leaflet-maps/LeafletMapsPage.vue'], ()=>{ resolve(require('../components/maps/leaflet-maps/LeafletMapsPage.vue')); }); };
const BubbleMapsPage = resolve => { require.ensure(['../components/maps/bubble-maps/BubbleMapsPage.vue'], ()=>{ resolve(require('../components/maps/bubble-maps/BubbleMapsPage.vue')); }); };
const LineMapsPage = resolve => { require.ensure(['../components/maps/line-maps/LineMapsPage.vue'], ()=>{ resolve(require('../components/maps/line-maps/LineMapsPage.vue')); }); };


export const routes = [
    {
        path : '',
        name: 'home',
        components:{
            default: Dashboard
        }
    },
    {
        path : '/dashboard',
        component: { render (c) { return c('router-view') }},
        children:[{
            path:"",
            component: Dashboard
        }]
    },
    { path : '/components/alerts', name: 'alerts', component: Alerts },
    { path : '/components/calendar', name: 'calendar', component: Calendar },
    { path : '/components/buttons', name: 'buttons', component: Buttons },
    { path : '/components/dropdown', name: 'dropdown', component: Dropdowns },
    { path : '/components/badges', name: 'badges', component: Badges },
    { path : '/components/typography', name: 'typography', component: Typography },
    { path : '/components/progressbars', name: 'progressbars', component: Progressbar },
    { path : '/components/cards', name: 'cards', component: Cards },
    { path : '/components/grids', name: 'grids', component: Grids },
    { path : '/components/table', name: 'table', component: Table },
    { path : '/components/form', name: 'form', component: Forms },
    {
        path : '/components/charts',
        name: 'Charts',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/charts/linechart',
                component: LineChart,
                name: 'line-chart'
            },
            {
                path: '/components/charts/barchart',
                component: BarChart,
                name: 'bar-chart'
            },
            {
                path: '/components/charts/doughnut',
                component: Doughnut,
                name: 'doughnut-chart'
            },
            {
                path: '/components/charts/radar',
                component: Radar,
                name: 'radar-chart'
            },
            {
                path: '/components/charts/piechart',
                component: Pie,
                name: 'pie-chart'
            },
            {
                path: '/components/charts/polar',
                component: PolarArea,
                name: 'polar-chart'
            }
        ]
    },


    {
        path : '/components/maps',
        name: 'Maps',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/maps/google-maps',
                component: GoogleMapsPage,
                name: 'google-maps-page'
            },
            {
                path: '/components/maps/leaflet-maps',
                component: LeafletMapsPage,
                name: 'leaflet-maps-page'
            },
            {
                path: '/components/maps/bubble-maps',
                component: BubbleMapsPage,
                name: 'bubble-maps-page'
            },
            {
                path: '/components/maps/line-maps',
                component: LineMapsPage,
                name: 'line-maps-page'
            },

        ]
    },


];