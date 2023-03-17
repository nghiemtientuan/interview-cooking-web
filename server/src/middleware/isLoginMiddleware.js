const firebase = require('../auth');

// repositories
import {UserRepository} from '../repositories/UserRepository';

// responses
import {response403} from '../utils/response403';

export const isLoginMiddleware = async (request, response, next) => {
  const authorization = request?.headers?.authorization;
  const token = authorization && authorization.includes('Bearer ') > -1
    ? authorization.replace('Bearer ', '')
    : null;
  if (token && token !== 'null') {
    try {
      const userFirebase = await firebase.auth().verifyIdToken(token);
      const {uid, email} = userFirebase;
      const userDB = await UserRepository.getUserByFirebaseUID(uid);
      if (!userDB) {
        await UserRepository.createNewUser(uid, email);
      }

      request.userFirebase = userFirebase;
      request.userAuth = userDB;
      next();

      return;
    } catch (error) {
      // Case: verify token is not right
    }
  }

  return response403(response, 'User need login!');
};
