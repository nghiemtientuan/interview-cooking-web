// config
import {dataConnection} from '../config/database';

// entities
import {User} from '../entities/User';

export const UserRepository = dataConnection.getRepository(User).extend({
    async getUserLogin() {

    }
});
