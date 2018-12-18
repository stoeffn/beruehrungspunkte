import Vue from "vue"
import BootstrapVue from "bootstrap-vue"

import AppComponent from "./app.vue";

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);

let app = new Vue({
    el: "#app",
    template: `<app-component />`,
    components: { AppComponent }
});
