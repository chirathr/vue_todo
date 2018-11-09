import './css/style.css'

import Vue from 'vue/dist/vue';
import Hello from './components/hello';


var vm = new Vue({
    el: '#app',
    data: {
        message: "Hello World!"
    },
    components: {
        'hello': Hello
    }
});
