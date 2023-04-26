import {onUnmounted, ref} from "vue";

export const useToast = () => {
    const toastMessage = ref('');
    const toastAlertType = ref('');
    const showToast = ref(false);
    const timeOut = ref('');
    const triggerToast = (message, type = 'success') =>{
        toastMessage.value = message;
        toastAlertType.value = type;
        showToast.value = true;
        timeOut.value = setTimeout(() => {
            toastMessage.value = '';
            toastAlertType.value = ''; // setTime 할때 리셋
            showToast.value = false;
        }, 3000);
    }
    onUnmounted(() => {
        console.log('unmounted');
    });
    return {
        triggerToast,
        toastMessage,
        toastAlertType,
        showToast
    }
}