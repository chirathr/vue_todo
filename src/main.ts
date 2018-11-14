import './static/css/bootstrap.css';
import './static/css/style.css';

import Vue from 'vue';
import App from './App.vue';

let vm = new Vue({
  el: '#app',
  components: {
      App,
    },
  template: '<App />',
});
