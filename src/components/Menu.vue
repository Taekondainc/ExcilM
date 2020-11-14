<template>
<div class="yellow">
    <div id="menushow" @click="menu2">
        <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632364/excil/exit_b7d8r3.png" alt="" id="exit">
    </div>
    <div class="menulock">
        <div id="menucontainer">
            <div id="ahref" @click="menu2">
                <router-link to="/">
                    <div id="footerlink">Home</div>
                </router-link>
            </div>
            <div id="ahref" @click="menu2">
                <router-link to="/About">
                    <div id="footerlink"> About Us
                    </div>
                </router-link>
            </div>

            <div id="ahref" @click="menu2">
                <router-link to="/Login">
                    <div id="footerlink">Login</div>
                </router-link>

            </div>
            <div id="ahref" @click="menu2">
                <router-link to="/Contact">
                    <div id="footerlink">Contact</div>
                </router-link>
            </div>
            <div id="ahref" @click="menu2">
                <router-link to="/Services">
                    <div id="footerlink">Services</div>
                </router-link>
            </div>
            <div id="ahref">
                <router-link to="/PP" @click="menu2">
                    <div id="footerlink">Privcy Policy</div>
                </router-link>

            </div>
            <div id="ahref" @click="menu2">
                <router-link to="/Products">
                    <div id="footerlink">Products</div>
                </router-link>

            </div>
            <div id="ahref" @click="menu2">
                <router-link to="/Projects">
                    <div id="footerlink">Projects</div>
                </router-link>
            </div>

        </div>
    </div>
    <div id="menudrag">
        <div id="iconmiddle" style="letter-spacing:1.5px;">
            <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/loation_hmpg2s.png" alt="" id="footericons2">
            <div>112 blue berry hill Wismar linden</div>
        </div>
        <div id="iconmiddle" style="letter-spacing:1.5px;">
            <a href="tel:+592-668-8421">
                <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/phone_yqmd5x.png" alt="" id="footericons2">
                <div>592-668-8421</div>
            </a>
        </div>
        <div id="iconmiddle" style="letter-spacing:1.5px;"><img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604632333/excil/mail_tzoibi.png" alt="" id="footericons2">
            <div>Operationexmarketing@gmail.com</div>
            <div>ceo@navalsub.com</div>
        </div>
    </div>

    <hr id="bordhr2">

    <div id="divgetdown">

        <div class="banner4">
            <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604813570/excil/gg2Asset_1_wqinfq.png" id="footerimg">
            EM&#169;

        </div>
        <div class="banner5"> made by TaekondaInc &#169;
        </div>
    </div>

</div>
</template>

<script>
export default {
    props: ["clicked"],
    methods: {
        menu2() {
            this.clicked();
        }
    },
}
</script>
