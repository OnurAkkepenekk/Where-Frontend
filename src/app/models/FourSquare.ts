
export interface FourSquare {
    meta: Meta;
    response: Response;
  }
  export interface Meta {
    code: number;
    requestId: string;
  }
  export interface Response {
    suggestedFilters: SuggestedFilters;
    suggestedRadius: number;
    headerLocation: string;
    headerFullLocation: string;
    headerLocationGranularity: string;
    totalResults: number;
    suggestedBounds: SuggestedBounds;
    groups?: (GroupsEntity)[] | null;
  }
  export interface SuggestedFilters {
    header: string;
    filters?: (FiltersEntity)[] | null;
  }
  export interface FiltersEntity {
    name: string;
    key: string;
  }
  export interface SuggestedBounds {
    ne: NeOrSw;
    sw: NeOrSw;
  }
  export interface NeOrSw {
    lat: number;
    lng: number;
  }
  export interface GroupsEntity {
    type: string;
    name: string;
    items?: (ItemsEntity)[] | null;
  }
  export interface ItemsEntity {
    reasons: Reasons;
    venue: Venue;
    referralId: string;
  }
  export interface Reasons {
    count: number;
    items?: (ItemsEntity1)[] | null;
  }
  export interface ItemsEntity1 {
    summary: string;
    type: string;
    reasonName: string;
  }
  export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories?: (CategoriesEntity)[] | null;
    photos: Photos;
    venuePage?: VenuePage | null;
  }
  export interface Location {
    lat: number;
    lng: number;
    labeledLatLngs?: (LabeledLatLngsEntity)[] | null;
    distance: number;
    cc: string;
    country: string;
    formattedAddress?: (string)[] | null;
    address?: string | null;
    crossStreet?: string | null;
    postalCode?: string | null;
    neighborhood?: string | null;
    city?: string | null;
    state?: string | null;
  }
  export interface LabeledLatLngsEntity {
    label: string;
    lat: number;
    lng: number;
  }
  export interface CategoriesEntity {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
  }
  export interface Icon {
    prefix: string;
    suffix: string;
  }
  export interface Photos {
    count: number;
    groups?: (null)[] | null;
  }
  export interface VenuePage {
    id: string;
  }
  
