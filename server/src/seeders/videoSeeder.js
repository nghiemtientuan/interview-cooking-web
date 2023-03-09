import {dataConnection} from '../config/database';

// entities
import {Video} from '../entities/Video';

const videos = [
  {
    title: 'Tình yêu bát cơm rang',
    link: 'https://www.youtube.com/watch?v=lZYOp1B_OZs',
  },
  {
    title: 'Cách làm cơm chiên',
    link: 'https://www.youtube.com/watch?v=jwNjWv68BfI',
  },
  {
    title: 'Bún mắm miền Tây',
    link: 'https://www.youtube.com/watch?v=HuVUateRWOI',
  },
  {
    title: 'Top 5 món canh đơn giản',
    link: 'https://www.youtube.com/watch?v=tS3PvFlsCWw',
  },
];

export const videoSeeder = async () => {
  const videoRepo = dataConnection.getRepository(Video);

  for (let item of videos) {
    const video = new Video();
    video.title = item.title;
    video.link = item.link;
    await videoRepo.save(video);
  }
};
