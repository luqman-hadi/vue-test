<template>
    <div class="bg-yellow-200 m-0 h-screen">
        <img class="pt-8 ml-10 h-auto object-none object-top" src="https://supplycart.my/wp-content/uploads/2019/09/sc_logo_tm.png"/>
        <div class="flex flex-wrap w-full justify-center items-center pt-56">
            <div class="flex flex-wrap max-w-xl">
                
                <div class="p-2 text-2xl text-gray-800 font-semibold"><h1>Login to your account</h1></div>

                <div class="p-2 w-full">
                    <label for="email">Your e-mail</label>
                    <input class="w-full bg-green-100 rounded border border-green-400 focus:outline-none
                    focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email"
                    v-model="form.email">
                </div>

                <div class="p-2 w-full">
                    <label for="password">Password</label>
                    <input class="w-full bg-green-100 rounded border border-green-400 focus:outline-none
                    focus:border-indigo-500 text-base px-4 py-2" placeholder="Password" type="password"
                    v-model="form.password" name="password">
                </div>

                <div class="p-2 w-full mt-4">
                    <button @click.prevent="loginUser" type="submit" class="flex text-white bg-blue
                    border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                email: '',
                password: ''
            },
            errors: []
            
        }
    },
    methods:{
        loginUser(){
            axios.post('/api/login', this.form).then(() =>{
                this.$router.push({ name: "Dashboard"});
            }).catch((error)=>{
            this.errors = error.response.data.errors;
            })
        }
    }
}
</script>