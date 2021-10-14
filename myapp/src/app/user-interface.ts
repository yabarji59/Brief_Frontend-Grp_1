// Interface pour les données de l'utilisateur
export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DobOrRegistered;
    registered: DobOrRegistered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
  }
  
  // Interface pour le nom de l'utilisateur
  interface Name {
    title: string;
    first: string;
    last: string;
  }

  // Interface pour l'adresse de l'utilisateur
  interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
  }

  // Interface pour la rue de l'utilisateur
  interface Street {
    number: number;
    name: string;
  }

  // Interface pour les coordonnées de l'utilisateur
  interface Coordinates {
    latitude: string;
    longitude: string;
  }

  // Interface pour la "timezone" de l'utilisateur
  interface Timezone {
    offset: string;
    description: string;
  }

  // Interface pour les identidiants de connexion de l'utilisateur
  interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }

  // Interface pour les dates liées à l'utilisateur
  interface DobOrRegistered {
    date: string;
    age: number;
  }

// Interface pour les identidiants de l'utilisateur
  interface Id {
    name: string;
    value: string;
  }

  // Interface pour les images de l'utilisateur
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }