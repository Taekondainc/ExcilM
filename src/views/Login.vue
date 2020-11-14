<template>
<div>
    <div class="login-cont">
        <form @submit.prevent="Login" class="formcontent">
            <h1>login</h1>

            <div id="form-control"> <label for="exampleInputEmail1">Email Address</label> </div>
            <input type="email" v-model="email" id="input" aria-describedby="emailHelp">

            <div id="form-control"><label for="exampleInputPassword1">Password</label> </div>
            <input type="password" v-model="password" id="input">

            <input type="submit" id="inputbtn" value="Submit" />

        </form>
    </div>
    <div id="logocont">

        <router-link to="/">
            <img src="https://res.cloudinary.com/excil-marketing/image/upload/v1604813570/excil/gg2Asset_1_wqinfq.png">
        </router-link>

    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            results: ""
        };
    },
    methods: {
        Login(e) {
            e.preventDefault();
            axios
                .post("http://localhost:8000/api/auth/login", {
                    email: this.email,
                    password: this.password
                })
                .then(
                    response => (
                        localStorage.setItem(
                            "168.1.16:",
                            "Bearer" + " " + response.data.access_token
                        ),
                        //  console.log("Bearer "+response.data.access_token)
                        this.$router.push("/Dashboard")
                    )
                );

            //,       this.$router.push("/Dashboard");
        }
    },
    created() {
        const token = localStorage.getItem("168.1.16:");
        if (token != null) {
            this.$router.push("/Dashboard");
        } else {
            console.log("official");
        }
    }

    //

    //send Authorization token with each request
    // const token2 = (axios.defaults.headers.common["Authorization"] =
    //   "Bearer" + token);
    // axios
    //   .post("http://localhost:8000//api/auth/user", token2)
    //  .then(resp => console.log(resp.data))
    //  .catch(err => console.log(err));
    //}
};
</script>
