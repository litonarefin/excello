<template>
        <!-- Left Sidebar  -->
        <div class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">

                        <template v-for="(item, index) in navItems">
                            <template v-if="item.title">
                                <SidebarNavTitle :name="item.name" :classes="item.class" :wrapper="item.wrapper"/>
                            </template>
                            <template v-else-if="item.divider">
                                <li class="nav-devider"></li>
                            </template>

                            <template v-else>
                                <template v-if="item.children">
                                    <!-- First Level Dropdown -->
                                    <SidebarNavDropdown
                                        :name="item.name"
                                        :url="item.url"
                                        :icon="item.icon"
                                        :badge="item.badge"
                                        :variant="item.variant"
                                    >
                                        <template v-for="( childL1, index ) in item.children">
                                            <template v-if="childL1.children">
                                                <!-- Second Level Dropdown menu -->
                                                <SidebarNavDropdown :name="childL1.name" :url="childL1.url" :icon="childL1.icon">
                                                    <li v-for="(childL2, index) in childL1.children">
                                                        <SidebarNavLink
                                                            :name="childL2.name"
                                                            :url="childL2.url"
                                                            :icon="childL2.icon"
                                                            :badge="childL2.badge"
                                                            :variant="item.variant"
                                                            />
                                                    </li>
                                                </SidebarNavDropdown>
                                            </template>
                                            <template v-else>
                                                <SidebarNavItem :classes="item.class">
                                                    <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                                                </SidebarNavItem>
                                            </template>
                                        </template>
                                    </SidebarNavDropdown>
                                </template>
                                <template v-else>
                                    <SidebarNavItem :classes="item.class" >
                                        <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
                                    </SidebarNavItem>
                                </template>
                            </template>
                        </template>

                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </div>
</template>

<script>
import SidebarHeader from './sidebar/SidebarHeader.vue';
import SidebarNavDropdown from './sidebar/SidebarNavDropdown.vue';
import SidebarNavTitle from './sidebar/SidebarNavTitle.vue';
import SidebarNavLink from './sidebar/SidebarNavLink.vue';
import SidebarNavItem from './sidebar/SidebarNavItem.vue';
import SidebarFooter from './sidebar/SidebarFooter.vue';
export default{
    name: 'sidebar',
    props: {
        navItems: {
          type: Array,
          required: true,
          default: () => []
      }
    },
    components: {
        SidebarHeader,
        SidebarNavDropdown,
        SidebarNavLink,
        SidebarNavTitle,
        SidebarNavItem,
        SidebarFooter
    },
    methods: {
        handleClick (e) {
          e.preventDefault()
          e.target.parentElement.classList.toggle('open')
      }
    }
}


</script>

<style>

</style>