import {ref} from 'vue'

export function usePostFactory(parameters = {id: 0, title: '', body: ''}) {
    const id = ref(parameters.id);
    const title = ref(parameters.title);
    const body = ref(parameters.body);

    const reset = () => {
        id.value = 0;
        title.value = '';
        body. value = '';
    }

    return {
        id,
        title,
        body,
        reset
    }
}