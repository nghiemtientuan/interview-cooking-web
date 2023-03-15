const firebase = require('../auth');

// repositories
import {UserRepository} from '../repositories/UserRepository';

export const userLoginMiddleware = async (request, response, next) => {
  const headerToken = request?.headers?.authorization;
  if (headerToken && headerToken.split(' ')[0] === 'Bearer') {
    const token = headerToken.split(' ')[1];
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
      console.log(error)
      next();
    }
  }

  next();
};
