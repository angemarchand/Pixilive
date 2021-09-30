<template>
    <div>
        <form-user @sending-message="submit" />
    </div>
</template>


<script>
import FormUser from "../components/FormUser.vue";

export default{
    name: "Login",
    components: {
        FormUser
    },
    methods: {
        submit (value) {

            let userData = Object.assign({}, value)
            console.log("this is login", userData)

        }
    }
}

</script>
