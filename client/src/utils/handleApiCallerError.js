import {toast} from 'react-toastify';

export const handleApiCallerError = (response) => {
  const {data} = response;
  if (data?.data && typeof data?.data?.isArray) {
    toast.error(data?.data.pop());

    return;
  }

  toast.error('[ERROR] Unknown exception');
};
