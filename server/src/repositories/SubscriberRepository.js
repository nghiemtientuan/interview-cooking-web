// config
import {dataConnection} from '../config/database';

// entities
import {Subscriber} from '../entities/Subscriber';

export const SubscriberRepository = dataConnection.getRepository(Subscriber).extend({
    async saveSubscribe(email) {
        const subscriber = await this.findOne({
            where: {
                email: email,
            },
        });

        if (!subscriber) {
            const newSubscriber = new Subscriber();
            newSubscriber.email = email;
            await this.save(newSubscriber);
        }
    }
});
