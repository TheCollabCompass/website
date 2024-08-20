export interface ILiveTripData {
  id?: string;
  title?: string;
  collaborator?: string;
  date?: string;
  price?: string;
  days?: string;
  timeEndsIn?: string | undefined;
  image?: string;
}
export interface IComingSoonTripData {
  id?: string;
  title?: string;
  collaborator?: string;
  date?: string;
  days?: string;
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
    timeEndsIn: string;
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
    events: (string | undefined)[];
  }[];
  attractions: (string | undefined)[];
  highlightsImages: (string | undefined)[];
}

export type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};
