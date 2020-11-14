<template>
<div>
    <div class="home">
        <div> <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/logo_wnij6b.png" id="logo">

            <div class="banner">Excil Marketing</div>
            <div class="tagline">Our Progress Interwined
            </div>
            <div id="d-c">
                <router-link to="/Products" style="text-decoration:none;">
                    <div class="btn-cta">
                        Get Started
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div>
        <Middle />
    </div>
    <div>
        <Torso />
    </div>
    <div>
        <Midsection />
    </div>
    <div>
        <Lastsection />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Middle from "../components/Middle";
import Lastsection from "../components/Lastsection";
import Midsection from "../components/Midsection";
import Torso from "../components/Torso";
export default {
    name: "Home",
    components: {
        Middle,
        Torso,
        Midsection,
        Lastsection

    }
};
</script>
