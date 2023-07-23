import toast, {
    Toaster
} from 'react-hot-toast';

const toastFunction = (type, message) => {
    toast.type(message, {
        position: "bottom-center"
    })
}

export default toastFunction