import './bootstrap';
import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MDBInput,MDBIcon,MDBBtn } from 'mdb-vue-ui-kit';


import router from './router';
import App from './layouts/App.vue'

library.add(fas);

createApp(App)
      .use(router)
      .component('fa',FontAwesomeIcon)
      .mount("#app")