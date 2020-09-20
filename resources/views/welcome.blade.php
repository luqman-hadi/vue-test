@extends('layouts.app')
@section('content')
    <div class="flex bg-yellow-700 border-b border-gray-300 py-4">
        <div class="container mx-auto flex">
            <router-link class="mr-4 text-white" to='/login' exact>Home</router-link>
        </div>
        <div class="flex mx-auto">
            <!--<router-link class="mr-4" to='/login' exact>Login</router-link>-->
            <router-link class="text-white" to='/register'>Register</router-link>
        </div>
    </div>
    <div class="container mx-auto py-2">
        <router-view></router-view>
    </div>
    
@endsection