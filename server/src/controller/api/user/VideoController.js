// utils
import {responseFormat} from '../../../utils/responseFormat';

import {VideoRepository} from '../../../repositories/VideoRepository';

export const index = async (req, res, next) => {
    const videos = await VideoRepository.getLimitVideos();

    return res.json(responseFormat(videos));
};
