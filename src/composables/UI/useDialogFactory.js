import {ref} from 'vue'

export function useDialogFactory(settings = {open: false}) {
    const open = ref(settings.open);

    const toggle = () => {
        open.value = !open.value;
    }

    return {
        open,
        toggle
    }
}