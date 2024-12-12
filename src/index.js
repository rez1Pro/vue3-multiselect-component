import './../dist/style.css';
import MultiSelect from "./components/MultiSelect.vue";

export default {
    install(app) {
        app.component('MultiSelect', MultiSelect);
    }
}
