import { IComingSoonTripData, ICompletedTripData, ILiveTripData, ITripInfo } from '../utils/types';

export const liveTripCardData: Array<ILiveTripData> = [
  {
    id: 's1t1',
    title: '1 Day Trip to Mushkpuri Top',
    collaborator: 'Rana Ahsan Ansar',
    date: '3rd May, 2024',
    price: '7000',
    timeEndsIn: '1724334500',
    days: '3',
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      timeEndsIn: '1724334500',
      image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    collaboratorCard: {
      image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Rana Ahsan Ansar',
      description:
        'Embark on a breathtaking journey to Mushkpuri with Ibrahim! Hike, explore, and capture magical moments together!',
      instagram: 'https://www.instagram.com/',
      tiktok: 'https://www.tiktok.com/',
      facebook: 'https://www.facebook.com/',
      threads: 'https://www.twitter.com/',
    },
    package: ['Luxury Transport', 'Break fast', 'Photo Shoot', 'Dinner', 'Snacks', 'Chance to come in Vlog with Ahsan'],
    plan: [
      {
        day: 0,
        events: ['Departure from Thokar or Kalma Chowk terminal at 9:00PM', 'Arrived in Islamabad at 12:00PM'],
      },
    ],
    attractions: [
      'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=600',
      ,
      'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    highlightsImages: [
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
  },
};
