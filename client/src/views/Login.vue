<template>
    <div>
        <form-user @sending-message="submit" />
    </div>
</template>


<script>
import FormUser from "../components/FormUser.vue";
import axios from "axios";

export default{
    name: "Login",
    components: {
        FormUser
    },
    methods: {
        submit (value) {

            let userData = Object.assign({}, value)
            // console.log("this is login", userData)

            axios.post("http://localhost:5500/user/login", userData)
            .then(response => {
                // console.log(response.data.result[0]['id']);
                localStorage.setItem('id', response.data.result[0]['id'])
                if(response.status === 200){
                    this.$router.push({name: "Home"})
                }
            })
            .catch(error => {
                console.log(error);
            })

        }
    }
}

</script>
