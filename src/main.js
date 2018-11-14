import './css/bootstrap.css';
import './css/style.css';

import Vue from 'vue/dist/vue';
import App from './App.vue';


new Vue({
    el: '#app',
    components: {
        'App': App
    },
    template: '<App />'
});