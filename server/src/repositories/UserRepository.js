// config
import {dataConnection} from '../config/database';

// entities
import {User} from '../entities/User';

// utils
import {constant} from '../utils/const';

export const UserRepository = dataConnection.getRepository(User).extend({
    getUserByFirebaseUID(firebaseUID: string) {
        return this.findOne({
            where: {
                firebase_uid: firebaseUID,
            }
        });
    },

    createNewUser(uid: string, email: string) {
        const newUser = new User();
        newUser.firebase_uid = uid;
        newUser.email = email;
        newUser.username = email;
        newUser.fullname = email;
        newUser.birthday = constant.user.default_birthday;
        newUser.password = null;

        return this.save(newUser);
    },

    updateUser(user: User) {
        return this.save(user);
    },
});
