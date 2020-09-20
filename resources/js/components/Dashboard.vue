<template>
    <div class="bg-yellow-200 h-screen">
        <div class="flex" style="height: 88vh;">

                 <!--sidenav--->
            <div class="w-56 bg-white h-full flex-none">
                <button class="pt-8" @click="navigateTo('products')">
                    <img class="h-auto pr-4 w-auto hover:bg-green" src="https://supplycart.my/wp-content/uploads/2019/09/sc_logo_tm.png"/>
                </button>
                <div class="mx-2 pt-8">
                    <button @click="navigateTo('cart')" class="bg-transparent rounded-full hover:bg-green text-blue font-bold py-10 px-4">
                        {{cart.length}}
                        <img class="w-20 h-20" src="https://www.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png">
                        Cart
                        </button>
                </div>  
            </div>

             <!--main content--->
            <div v-if="page == 'products'"> 
                <div class="w-full h-full relative overflow-y-scroll">   
                    
                    <!--list of product-->
                    <div class="px-6 py-3">

                        <div class="flex item-center justify-between">
                            <h1 class="pl-20 mb-3 pt-20 text-2xl font-semibold text-blue tracking-wider hover:underline flex items-center">Products</h1>
                        </div>    

                        <div class="w-full flex flex-wrap">
                            <div v-for="(list, index) in lists" :key="index" class="p-2 w-48">
                                <div class="bg-teal-200 w-full h-auto p-5 rounded-lg shadow-md">
                                    <img :src="list.src" class="h-auto w-full shadow mb-2"/>
                                    <h1 class="text-sm font-semibold text-black tracking-wide">{{list.title}}</h1>
                                    <h2 class="text-xs text-black tracking-wide">{{list.price}}</h2>
                                    <button @click="addItemToCart(list)" class="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded-full">Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div v-if="page == 'cart'">
                <div class="w-full h-full relative overflow-y-scroll">   
                    
                    <!--list of product-->
                    <div class="px-6 py-3">

                        <div class="flex item-center justify-between">
                            <h1 class="pl-20 mb-3 pt-20 text-2xl font-semibold text-blue tracking-wider hover:underline flex items-center">Your Cart</h1>
                        </div> 

                        <div class="w-full flex flex-wrap">
                            <div v-for="(list, index) in cart" :key="index" class="p-2 w-48">
                                <div class="bg-green w-full h-auto p-5 rounded-lg shadow-md">
                                    <img :src="list.src" class="h-auto w-full shadow mb-2"/>
                                    <h1 class="text-sm font-semibold text-black tracking-wide">{{list.title}}</h1>
                                    <h2 class="text-xs text-black tracking-wide">{{list.price}}</h2>
                                    <button @click="removeItemFromCart(list)" class="bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded-full">Remove From Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data: function() {
        return {
            page: "products",

            cart: [],

            lists: [
                {src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-yellow-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1568141245782', title: 'Apple iPhone 11', price: 'MYR 3,399.00'},
                {src: "https://cms-cdn.thesolesupplier.co.uk/2018/10/adidas-Ultra-Boost-4.0-Triple-Black-F36641.png", title: "Adidas Ultra Boost", price: "MYR 730.00"},
                {src: 'https://de9luwq5d40h2.cloudfront.net/catalog/product/zoom_image/58_414349.jpg', title: 'Supima Cotton T-Shirt', price: 'MYR 39.00'},
                {src: 'https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/08_418703.jpg', title: "Dry Stretch Sweat Pants", price: 'MYR 129.90'},
                {src: 'https://imgcdn.zigwheels.my/large/gallery/exterior/67/1312/modenas-pulsar-ns200-marketing-image-590148.jpg', title: 'Modenas Pulsar NS200', price: 'MYR 8,701.00'},
                {src: 'https://cdn.shopify.com/s/files/1/2506/0846/products/911ctG9W1uL._UL1500_1600x.jpg?v=1550129681', title: "G-Shock Master of G MUDMASTER GG1000", price: 'MYR 995.00'},
                {src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_MY?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1573242759842', title: '16‑inch MacBook Pro', price: 'MYR 10,499.00'},
                {src: 'https://imgcdn.zigwheels.ph/medium/gallery/color/17/299/kia-picanto-color-862513.jpg', title: 'Kia Picanto', price: 'MYR 47,950.36'},
                {src: 'https://herschel.com/content/dam/herschel/products/10011/10011-00001-OS_01.jpg', title: 'Herschel Pop Quiz Backpack', price: 'MYR 399.00'},
                {src: 'https://sg2-cdn.pgimgs.com/developer-listing/4044180/OUPHO.98222745.V800/Elmina-Green-1-Shah-Alam-Malaysia.jpg', title: 'Elmina Green 1 Terraced House', price: 'MYR 670,600.00'},  
            ]
        };
    },
    methods: {
        addItemToCart(list){
            this.cart.push(list);
        },
        removeItemFromCart(list){
            this.cart.splice(this.cart.indexOf(list));
        },
        navigateTo(page){
            this.page = page;
        }
    },
    components: {}
    
};
</script>

<style>
</style>
