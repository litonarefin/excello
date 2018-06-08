export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-dashboard'
    },
    {
      divider: true
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'fa fa-puzzle-piece',
      badge: {
        variant:'primary',
        text: 'New'
      },
      children: [
        {
          name: 'Calendar',
          url: '/components/calendar',
          icon: 'fa fa-calendar'
        },
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'fa fa-puzzle-piece'
        },
        {
          name: 'Typography',
          url: '/components/typography',
          icon: 'fa fa-id-badge'
        },
        {
          name: 'Dropdowns',
          url: '/components/dropdown',
          icon: 'fa fa-bars',
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'fa fa-id-card-o'
        },
        {
          name: 'Alerts',
          url: '/components/alerts',
          icon: 'fa fa-exclamation-triangle'
        },
        {
          name: 'Progress Bars',
          url: '/components/progressbars',
          icon: 'fa fa-spinner'
        },
        {
          name: 'Grids',
          url: '/components/grids',
          icon: 'fa fa-th'
        }

      ]
    },
    {
      name: 'Table',
      icon: 'fa fa-table',
      url: '/components/table'
    },
    {
      name: 'Form',
      icon: 'fa fa-check-square',
      url: '/components/form',
      variant: 'danger'
    },
    {
      name: 'Charts',
      url: '/components/charts',
      icon: 'fa fa-pie-chart',
      badge: {
        variant: 'success',
        text: 'NEW'
      },
      children: [
                  {
                    name: 'Line Chart',
                    url: '/components/charts/linechart',
                    icon: 'fa fa-line-chart'
                  },
                  {
                    name: 'Bar Chart',
                    url: '/components/charts/barchart',
                    icon: 'fa fa-bar-chart'
                  },
                  {
                    name: 'Doughnut Chart',
                    url: '/components/charts/doughnut',
                    icon: 'fa fa-pie-chart'
                  },
                  {
                    name: 'Radar Chart',
                    url: '/components/charts/radar',
                    icon: 'fa fa-pie-chart'
                  },
                  {
                    name: 'Pie Chart',
                    url: '/components/charts/piechart',
                    icon: 'fa fa-pie-chart'
                  },
                  {
                    name: 'Polar Area Chart',
                    url: '/components/charts/polar',
                    icon: 'fa fa-area-chart'
                  },
        ]
    },
    {
      title: true,
      name: 'Extras'
    },

    {
      divider: true
    },
    {
      name: 'Maps',
      url: '/components/maps/',
      icon: 'fa fa-map-marker',
      badge: {
        variant: 'warning',
        text: 'NEW'
      },
      children: [
                  {
                    name: 'Google Maps',
                    url: '/components/maps/google-maps',
                    icon: 'fa fa-map-o'
                  },
                  {
                    name: 'Bubble Maps',
                    url: '/components/maps/bubble-maps',
                    icon: 'fa fa-globe'
                  },
                  {
                    name: 'Leaflet Maps',
                    url: '/components/maps/leaflet-maps',
                    icon: 'fa fa-street-view'
                  },
                  {
                    name: 'Line Maps',
                    url: '/components/maps/line-maps',
                    icon: 'fa fa-map-signs'
                  },
      ]
    },
    {
      divider: true
    },
    {
      name: 'Documentation',
      url: 'https://docs.vuejsadmin.com/docs/excello-vue-js-admin/',
      icon: 'fa fa-file-text-o'
    },
    {
      name: 'Purchase',
      url: 'https://vuejsadmin.com',
      icon: 'fa fa-shopping-cart',
      class: 'mt-auto',
      variant: 'success'
    }

  ]
}
