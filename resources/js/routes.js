import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Cart from './components/Cart';
/*import About from './components/About';*/

export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '*',
            component: NotFound 
        },
        {
            path: '/',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'Dashboard'
        },
        {
            path: '/products',
            component: Products,
            name: 'Products'
        },
        /*{
            path: '/about',
            component: About,
            name: 'About'
        },*/
        {
            path: '/cart',
            component: Cart,
            name: 'Cart'
        }
    ]
}