<template>
    <div class="container login">
        <form @submit.prevent="login" class="card-panel">
            <h2 class="center deep-purple-text">
                Login 
            </h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <button class="btn deep-purple">Login</button>
            </div>
            <p v-if="feedback" class="red-text center">
                {{feedback}}
            </p>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: 'Login',
    data(){
        return {
            email: null,
            password: null,
            feedback: null
        }

    },
    methods:{
        login(){

            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() =>{

            })

        }
    }

}
</script>

<style>
.login{
    max-width: 400px;
    margin-bottom: 60px
}
.login h2{
    font-size: 2.4em;
}
.login .field{
    margin-bottom: 16px;

}

</style>
