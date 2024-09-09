import { IComingSoonTripData, ICompletedTripData, ILiveTripData, ITripInfo } from '../utils/types';

export const liveTripCardData: Array<ILiveTripData> = [
  {
    id: 's1t1',
    title: '1 Day Trip to Mushkpuri Top',
    collaborator: 'Bushra Tiwana',
    date: '3rd Dec, 2024',
    price: '7000',
    timeEndsIn: '1730574038',
    days: '3',
    image: 'https://taskpay-testing.s3.us-east-005.backblazeb2.com/Trip-to-Mushkpuri-Top.jpg',
  },
];

export const comingSoonTripCardData: Array<IComingSoonTripData> = [
  {
    id: 's1t1',
    title: 'Neelum Valley Tour',
    collaborator: 'Iqra Kanwal',
    date: '27th Sep, 2024',
    days: '3',
    image: 'https://clickpakistan.org/wp-content/uploads/2021/06/neelum-river1-min.jpg',
  },
];

export const completedTripCardData: Array<ICompletedTripData> = [
  // {
  //   id: 's1t1',
  //   title: '1 Day Trip to Mushkpuri Top',
  //   collaborator: 'Rana Ahsan Ansar',
  //   date: '3rd May, 2024',
  //   image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
  // },
];

export const tripInfoPageData: Record<string, ITripInfo> = {
  s1t1: {
    tripCard: {
      title: '1 Day Trip to Mushkpuri Top',
      date: '3rd May, 2024',
      price: '7000',
      timeEndsIn: '1730574038',
      image: 'https://taskpay-testing.s3.us-east-005.backblazeb2.com/Trip-to-Mushkpuri-Top.jpg',
    },
    collaboratorCard: {
      image: 'https://taskpay-testing.s3.us-east-005.backblazeb2.com/bushrahTiwana.jpeg',
      name: 'Bushra Tiwana',
      description:
        'Embark on a breathtaking journey to Mushkpuri with Bushra Tiwana! Hike, explore, and capture magical moments together!',
      instagram: 'https://www.instagram.com/',
      tiktok: 'https://www.tiktok.com/',
      facebook: 'https://www.facebook.com/',
      threads: 'https://www.twitter.com/',
    },
    package: [
      'Luxury Transport',
      'Break fast',
      'Photo Shoot',
      'Dinner',
      'Snacks',
      'Chance to come in Vlog with Bushra Tiwana',
      'Exciting Games',
    ],
    plan: [
      {
        day: 0,
        events: ['Departure from Thokar or Kalma Chowk terminal at 9:00PM', 'Arrived in Islamabad at 12:00PM'],
      },
      {
        day: 1,
        events: [
          'Break fast in islamabad',
          'Reach to Mushkpuri top',
          'Hike to Mushkpuri top',
          'Photo Shoot and rest',
          'Play some games',
          'Return back to islamabad',
          'Dinner in islamabad',
          'Arrived in Thokar',
        ],
      },
    ],
    attractions: [
      'https://f005.backblazeb2.com/file/taskpay-testing/mushkpuri1.jpeg',
      'https://f005.backblazeb2.com/file/taskpay-testing/mushkpuri2.jpg',
      ,
      'https://f005.backblazeb2.com/file/taskpay-testing/mushkpuri3.png',
    ],
    highlightsImages: [
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
};
