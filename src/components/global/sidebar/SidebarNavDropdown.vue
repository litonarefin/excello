<template>
  <li
    :class="{'active': isCollapse, '': !isCollapse }"
    @click="collapseOpen"
  >
    <a class="has-arrow" href="#" :to="url">
      <i :class="icon"></i>
      <span class="hide-menu">{{name}}
        <span :class="'label label-rouded pull-right label-' + badge.variant" v-if="badge && badge.text">{{ badge.text }}</span>
      </span>
    </a>
    <ul aria-expanded="false"
      class="collapse"
      :class="{'in': isCollapse, '': !isCollapse }"
      @click="collapseOpen"
      >
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'sidebar-nav-dropdown',
  data(){
    return{
      isCollapse: false
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    badge: {
        type: Object,
        default: ()=>{}
    },
    variant: {
        type: String,
        default: ''
    }
  },
  methods: {
    collapseOpen (e) {
      this.isCollapse = !this.isCollapse;
    }

  }
}
</script>
