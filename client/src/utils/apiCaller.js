import axios from 'axios';
import {onAuthStateChanged} from 'firebase/auth';

// config
import * as Config from 'Src/constants/Config';

// auth
import {auth} from 'Src/auth';

export const callApi = async (endpoint, method = 'GET', body) => {
  return axios({
    method: method,
    url: Config.API_URL + "/" + endpoint,
    data: body,
    headers: {
      Authorization: `${await getUserToken() ? `Bearer ${await getUserToken()}` : ''}`,
    },
  });
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
