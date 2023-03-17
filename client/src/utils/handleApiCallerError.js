import {toast} from 'react-toastify';

// constants
import {HTTP_STATUS} from 'Src/constants/httpStatus';

export const handleApiCallerError = (response) => {
  const {data, status} = response;
  if (status === HTTP_STATUS.http_404) {
    toast.error('[404 ERROR] Không tìm thấy tài nguyên!');

    return;
  }

  if (status === HTTP_STATUS.http_422) {
    if (data?.data && typeof data?.data?.isArray) {
      toast.error(data?.data.pop());

      return;
    }

    toast.error('[422 ERROR] Lỗi kiểm tra dữ liệu');

    return;
  }

  if (data?.data) {
    if (Array.isArray(data?.data)) {
      toast.error(data?.data.pop());
    } else {
      toast.error(data?.data);
    }

    return;
  }

  toast.error('[ERROR] Unknown exception');
};
