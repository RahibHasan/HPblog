/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import {routes} from './router' ;
import axios from 'axios'
import VueLoading from 'vuejs-loading-plugin'
import myVueComponent from './components/loader';
Vue.use(axios)
Vue.use(VueRouter)
Vue.use(VueLoading)
Vue.component('pagination', require('laravel-vue-pagination'));
// overwrite defaults
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Ladataan', // default 'Loading'
  loading: true, // default false
  customLoader: myVueComponent, // replaces the spinner and text with your own
  background: 'rgb(255,255,255)', // set custom background
  classes: ['myclass'] // array, object or string
});


// All Global
Vue.mixin({
    
     methods:{
         LoadingStatus:function(){
             this.$loading(true)
             setTimeout(() => this.$loading(false), 1000)
         }
     }
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.component("breadcrumb",require('./components/BreadCumbComponent').default);
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
