<template>

        <a v-if="ExternalLink" :href="url" :classes="classList">
            <i :class="icon"></i>
            <span class="hide-menu">{{ name }}
                <span :class="'label label-rouded pull-right label-' + badge.variant" v-if="badge && badge.text">{{ badge.text }}</span>
            </span>
        </a>

        <router-link v-else :to="url" :class="classList" exact>
            <i :class="icon"></i>
            <span class="hide-menu">{{ name }}
                <span :class="'label label-rouded pull-right label-' + badge.variant" v-if="badge && badge.text">{{ badge.text }}</span>
            </span>
        </router-link>

</template>

<script>
    import isExternal from 'is-url-external'

    export default{
        name: 'sidebar-nav-link',
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
        computed: {
            classList(){
                return [
                    '',
                    this.linkVariant
                ]
            },
            linkVariant(){
                return this.variant ? `nav-link-${this.variant}` : ''
            },
            ExternalLink(){
                return isExternal(this.url)
            }

        }
    }
</script>