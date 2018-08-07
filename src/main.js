import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import firebase from 'firebase';

Vue.config.productionTip = false

let app = null;

firebase.auth().onAuthStateChanged(() => {


// init app if not already

  if (!app){
    app = new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
    
  }


})


