<template>
<div>

    <div id="header" v-if="this.$route.fullPath != '/Dashboard' && this.$route.fullPath != '/Projectsadd' && this.$route.fullPath != '/Productsadd'">
        <div id="menu-container" @click="menu">
            <div><img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/menu_zddke2.png" id="menu">
            </div>

        </div>
        <div id="left">
            <div id="container-social">
                <router-link to="/about"><img id="social" src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/fb_m7syq3.png"></router-link>
                <router-link to="/about"><img id="social" src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/insta_rp9hyz.png"></router-link>
                <router-link to="/about"><img id="social" src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/linkedin_h099z1.png"></router-link>
                <router-link to="/about"><img id="social" src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/wa_fgpmru.png"></router-link>
            </div>
        </div>
    </div>

    <transition name="bounce">
        <router-view />
    </transition>
    <Footerdiv />

    <transition name="bounce">
        <Menu v-show="ishidden" :clicked="menu" />
    </transition>

</div>
</template>

<script>
import Footerdiv from "./components/Footerdiv";
import Menu from "./components/Menu";
export default {
    name: "home",
    components: {
        Footerdiv,
        Menu
    },
    data() {
        return {
            ishidden: false
        }
    },
    methods: {
        menu() {
            this.ishidden = !this.ishidden;
        }
    },
}
</script>

<style>
@import url("./assets/css/style.scss");
@import url("./assets/css/style.css");
</style>
