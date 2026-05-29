import { createApp } from 'vue'

import App from './App.vue'

import router from "@/router/router";
import store from "@/store/store";

import components from "@/components/UI";
import directives from "@/directives/";

// Create application
const app = createApp(App);

// Register components
components.forEach(component => {
    app.component(component.name, component);
});

// Register directives
directives.forEach(directive => {
    app.directive(directive.name, directive);
});

// Setup application
app.use(router);
app.use(store);

app.mount('#app');
