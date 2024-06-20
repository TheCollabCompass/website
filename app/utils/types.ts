export interface ILiveTripData {
  id?: string;
  title?: string;
  collaborator?: string;
  date?: string;
  price?: string;
  timeEndsIn?: number;
  image?: string;
}
export interface IComingSoonTripData {
  id?: string;
  title?: string;
  collaborator?: string;
  date?: string;
  image?: string;
}

export interface ICompletedTripData {
  id?: string;
  title?: string;
  collaborator?: string;
  date?: string;
  image?: string;
}

export interface ITripInfo {
  tripCard: {
    title: string;
    date: string;
    price: string;
    timeEndsIn: number;
    image: string;
  };
  collaboratorCard: {
    image: string;
    name: string;
    description: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    threads: string;
  };
  package: string[];
  plan: {
    day: number;
    events: string[];
  }[];
  attractions: string[];
}
