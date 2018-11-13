import './css/bootstrap.css';
import './css/style.css';

import Vue from 'vue/dist/vue';
import Todo from './components/todo';


var vm = new Vue({
    el: '#app',
    components: {
        'todo': Todo
    },
    methods: {
        saveAllInputs: function () {

        }
    }
});