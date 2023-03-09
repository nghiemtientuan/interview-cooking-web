// config
import {dataConnection} from '../config/database';

// entities
import {Video} from '../entities/Video';

export const VideoRepository = dataConnection.getRepository(Video).extend({
    getLimitVideos() {
        return this.find({
            limit: 4,
        });
    },
});
