<template>
    <div class="bg-yellow-200">
        <img class="pt-8 ml-10 h-auto object-none object-top" src="https://supplycart.my/wp-content/uploads/2019/09/sc_logo_tm.png"/>
        <div class="flex flex-wrap w-full justify-center intems-center pt-56">
            
            <div class="flex flex-wrap max-w-xl">
                <div class="p-2 text-2xl text-gray-800 font-semibold"><h1>Register an account</h1></div>

                <div class="p-2 w-full">
                    <label class="w-full" for="name">Name</label>
                    <span class="w-full text-red-500" v-if="errors.name">{{errors.name[0]}}></span>
                    <input class="w-full bg-green-100 rounded border border-green-400 focus:outline-none 
                    focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text"
                    v-model="form.name">
                </div>
                
                <div class="p-2 w-full">
                    <label class="w-full" for="email">Your e-mail</label>
                    <input class="w-full bg-green-100 rounded border border-green-400 focus:outline-none 
                    focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email"
                    v-model="form.email">               
                </div>

                <div class="p-2 w-full">
                    <label class="w-full" for="password">Password</label>
                    <input class="w-full bg-green-100 rounded border border-green-400 focus:outline-none 
                    focus:border-indigo-500 text-base px-4 py-2" placeholder="Password" type="password"
                    v-model="form.password" name="password">               
                </div>

                <div class="p-2 w-full">
                    <label class="w-full" for="confirm_password">Confirm Password</label>
                    <input class="w-full bg-green-100 rounded border border-green-400 focus:outline-none 
                    focus:border-indigo-500 text-base px-4 py-2" placeholder="Confirm Password" type="password"
                    v-model="form.password_confirmation" name="password_confirmation">               
                </div>

                <div class="p-2 w-full mt-4">
                    <button @click.prevent="saveForm" type="submit" class="flex text-white bg-blue
                    border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Register</button>
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
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            axios.post('/api/register', this.form).then(()=>{
                console.log('saved');
            }).catch((error)=>{
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>