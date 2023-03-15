import {toast} from 'react-toastify';

// constants
import {HTTP_STATUS} from 'Src/constants/httpStatus';

export const handleApiCallerError = (response) => {
  const {data, status} = response;
  if (status === HTTP_STATUS.http_404) {
    toast.error('[404 ERROR] Không tìm thấy tài nguyên!');

    return;
  }

  if (data?.data && typeof data?.data?.isArray) {
    toast.error(data?.data.pop());

    return;
  }

  toast.error('[ERROR] Unknown exception');
};
