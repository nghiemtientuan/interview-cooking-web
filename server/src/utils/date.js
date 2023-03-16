import moment from 'moment';
import 'moment-timezone';

export const timezone ={
    hcm: 'Asia/Ho_Chi_Minh'
};

export const format = {
    datetimeFull: 'YYYY-MM-DD HH:mm:ss'
};

export const nowDatetime = () => moment().tz(timezone.hcm).format(format.datetimeFull);
