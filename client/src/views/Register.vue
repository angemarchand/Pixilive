<template>
    <div>
        hello
        <form-user @sending-message="submit" />
    </div>
</template>

<script>
// eslint-disable-next-line 
/* eslint-disable */

import FormUser from "../components/FormUser.vue"
import axios from "axios";

export default {
    name: 'Register',
    components: {
        FormUser
    },

    methods: {
        submit(value){
            let userData = Object.assign({}, value); 
            axios.post("http://localhost:5500/user/register", userData)
            .then(response => {
                if(response.status === 200){
                    this.$router.push({ name: "Login"})
                }
            })
        }
    }
}
</script>

