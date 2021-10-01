<template>
<div class="container w-50 mb-5 mt-5">
    <div class="row justify-content-center bg-info p-3">
        <h1 v-if="checkIpunt()" class="card-title text-white">Connexion</h1>
        <h1 v-else class="card-title text-white">Inscription</h1>
        <p class="card-subtitle text-white"> Tu n'as pas de compte ?</p>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="col mb-3">
                <input v-if="checkIpunt() === false" v-model="form.username" type="text" class="form-control p-2 rounded-0" 
                id="exampleInputUsername" required placeholder="Entrer votre nom" aria-describedby="usernameHelp">
            </div>

            <div class="mb-3">
                <input v-model="form.email" type="email" class="form-control p-2 rounded-0" 
                id="exampleInputEmail1" required placeholder="Email" aria-describedby="emailHelp">
            </div>
            <div class=" align-items-center mb-3">
                <input v-model="form.password" type="password" class="form-control p-2 rounded-0 " 
                id="exampleInputPassword1" required placeholder="Mot de passe">
            </div>
        </div>
        <div class="text-danger"> {{ warning }}</div>
        
        <div>
            <button type="submit" v-if="checkIpunt()" v-on:click="submit" class="btn btn-primary"> Se connecter </button>
            <button type="submit" v-else v-on:click="submit" class="btn btn-primary"> Créer un compte </button>
        </div>
        

        
    </div>
</div>

</template>

<script>
export default {
    name: 'FormUser',
    emits:  ["sending-message"],
    props: {
        method: { type:Function },
    },
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
            },
            warning: "",

        }
    }, 
    methods: {
        checkIpunt (){
            if (window.location.pathname == "/login") {
                return true;
            }else{
                return false;
            }
        },
        submit() {
            if(this.form.username === "" && this.form.email=== "" && this.form.password === ""){
                this.warning = "Entrer l'adresse mail & et le mot de passe";
            }else{
                this.$emit("sending-message", this.form);
            }
            
        }
    }
}
</script>

<style scoped>

</style>
