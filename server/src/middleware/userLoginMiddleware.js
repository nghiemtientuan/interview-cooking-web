const firebase = require('../auth');

// repositories
import {UserRepository} from '../repositories/UserRepository';

export const userLoginMiddleware = async (request, response, next) => {
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
      next();
    } catch (error) {
      console.error('[Middleware] Error: ' + error)
      next();
    }
  }

  next();
};
