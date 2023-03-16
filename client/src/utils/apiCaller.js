import axios from 'axios';
import {onAuthStateChanged} from 'firebase/auth';

// config
import * as Config from 'Src/constants/Config';

// auth
import {auth} from 'Src/auth';

export const callApi = async (endpoint, method = 'GET', body) => {
  const config = {
    method: method,
    url: Config.API_URL + "/" + endpoint,
    data: body,
  }
  const token = await getUserToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return axios(config);
};

const getUserToken = async () => {
  return new Promise((resolve, reject) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        resolve(token)
      } else {
        resolve(null)
      }

      unsub();
    });
  })
}
