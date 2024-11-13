import { IComingSoonTripData, ICompletedTripData, ILiveTripData, ITripInfo } from '../utils/types';

export const liveTripCardData: Array<ILiveTripData> = [
  {
    id: 's1t1',
    title: 'Trip to Neelum Valley',
    collaborator: 'Singer Sonia Khan',
    date: '27th Dec, 2024',
    price: '15000',
    timeEndsIn: '1735067306',
    days: '3',
    image: 'https://taskpay-testing.s3.us-east-005.backblazeb2.com/Trip-to-Mushkpuri-Top.jpg',
  },
];

export const comingSoonTripCardData: Array<IComingSoonTripData> = [
  {
    id: 's1t1',
    title: 'Trip to Naran Valley',
    collaborator: 'Iqra Kanwal',
    date: 'comming soon',
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
      title: 'Trip to Neelum Valley',
      date: '27th Dec, 2024',
      price: '15000',
      timeEndsIn: '1735067306',
      image: 'https://taskpay-testing.s3.us-east-005.backblazeb2.com/Trip-to-Mushkpuri-Top.jpg',
    },
    collaboratorCard: {
      image: 'https://f005.backblazeb2.com/file/taskpay-testing/Singer_Sonia_khan.jpeg',
      name: 'Singer Sonia Khan',
      description:
        'Embark on a breathtaking journey to Mushkpuri with Sonia Khan! Hike, explore, and capture magical moments together!',
      instagram: 'https://www.instagram.com/singer_soniakhan_official/profilecard/?igsh=c2JqZ3I5b2k5NWJy',
      tiktok: 'https://www.tiktok.com/@singersoniakhanofficial?_t=8rM4nAVY6fi&_r=1',
      facebook: 'https://www.facebook.com/',
      threads: 'https://www.twitter.com/',
    },
    package: [
      'Luxury Transport',
      'Break fast',
      'Photo Shoot',
      'Dinner',
      'Jeeps for visiting points',
      'Chance to come in Vlog with Sonia Khan',
      'Exciting Games',
    ],
    plan: [
      {
        day: 0,
        events: ['Departure from Thokar or Kalma Chowk terminal', 'Arrived in Islamabad'],
      },
      {
        day: 1,
        events: [
          'Break fast',
          'Hotel Stay',
          'Go to explore Jheel Saif-ul-mlook point of Neelum Valley',
          'Dinner',
          'Some Fun activities singing, antashri etc',
          'Chance to come in Vlog with Sonia Khan',
        ],
      },
      {
        day: 2,
        events: [
          'Break fast',
          'Go to explore Jheel Shogran-risi-pay point of Neelum Valley',
          'Dinner',
          'Some Fun activities singing, antashri etc',
          'Chance to come in Vlog with Sonia Khan',
        ],
      },
      {
        day: 3,
        events: ['Break fast', 'Exlore Naran Sides', 'Back to Lahore'],
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
