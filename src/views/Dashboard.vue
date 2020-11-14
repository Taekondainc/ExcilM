<template>
<div>
    <div class="dheader">
        <div id="menu-container2" @click="onToggle">
            Menu
        </div>
        <router-link to="/">
            <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/logo_wnij6b.png" id="logoimg">
        </router-link>
        <div class="btndanger" style="-webkit-text-stroke: 0px solid white;letter-spacing: 2px; " @click="logout">
            <a href="#">Logout</a>
        </div>
    </div>
    <div v-show="hide" id="dashboard">
        <div id="menushow" @click="onToggle" class="exitc">
            <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632364/excil/exit_b7d8r3.png" alt="" id="exit">
        </div>
        <div id="ahref" @click="onToggle" v-if="this.$route.fullPath != '/Dashboard'">
            <router-link to="/Dashboard">
                <div id="footerlink"> Home</div>
            </router-link>
        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/Projectsadd">
                <div id="footerlink"> Projectadd</div>
            </router-link>
        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/Productsadd">
                <div id="footerlink">Productedit </div>
            </router-link>
        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/Dashboard">
                <div id="footerlink">Home</div>
            </router-link>
        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/">
                <div id="footerlink">Excil Marketing</div>
            </router-link>
        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/About">
                <div id="footerlink"> About Us
                </div>
            </router-link>
        </div>

        <div id="ahref" @click="onToggle">
            <router-link to="/Contact">
                <div id="footerlink">Contact</div>
            </router-link>
        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/Services">
                <div id="footerlink">Services</div>
            </router-link>
        </div>

        <div id="ahref" @click="onToggle">
            <router-link to="/Products">
                <div id="footerlink">Products</div>
            </router-link>

        </div>
        <div id="ahref" @click="onToggle">
            <router-link to="/Projects">
                <div id="footerlink">Projects</div>
            </router-link>
        </div>

    </div>
    <div>
        <h1 id="center">Welcome {{results}}</h1>
    </div>
    <router-view ref="rv" :showed="isExactActive"> </router-view>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    components: {

    },
    data() {
        return {
            email: "",
            password: "",
            isExactActive: true,
            results: "",
            hide: false,
            toggle: true,
            toggled: false,
            scrollPosition: null,
            drawer: null
        };
    },
    mounted() {
        window.addEventListener("scroll", this.scrolltop);
        this.isExactActive = typeof this.$refs.rv == "undefined";
        // if ($route.fullPath !== "/Dashboard") {
        //    this.isExactActive = !this.isExactActive;
        // } else {
        //    this.isExactActive = !this.isExactActive;
        // }
    }, //,
    //  updated() {
    //      this.isExactActive = typeof this.$refs.rv === "undefined";
    //  },

    methods: {
        out() {
            this.toggle = false;
        },
        scrolltop() {
            this.scrollPosition = window.scrollY;
        },
        onToggle() {

            this.toggle = !this.toggle;
            this.toggled = !this.toggled;
            this.hide = !this.hide;
            this.toggle;
        },
        logout() {
            const token = localStorage.getItem("168.1.16:");
            const token2 = (axios.defaults.headers.common["Authorization"] = token);
            // console.log(token2);
            axios
                .post("http://localhost:8000/api/auth/logout", token2)
                .then(
                    this.$router.push("/Login"),
                    localStorage.removeItem("168.1.16:")
                )
                .catch(err => (this.results = err.data.message));
        }
    },
    created() {
        const token = localStorage.getItem("168.1.16:");
        // console.log(token);
        //send Authorization token with each request
        if (token != null) {
            const token2 = (axios.defaults.headers.common["Authorization"] = token);
            // console.log(token2);
            axios
                .post("http://localhost:8000/api/auth/user", token2)
                .then(resp => (this.results = resp.data.name))
                .catch(err => (this.results = err.data.message));
        } else {
            this.$router.push("/Login");
        }
    }
};
</script>
