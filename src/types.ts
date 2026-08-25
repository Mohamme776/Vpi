export type Language = 'ar' | 'en';

export interface VehiclePart {
  id: string;
  nameAr: string;
  nameEn: string;
  partNumber: string;
  oemNumber: string;
  category: string;
  categoryEn: string;
  make: string;
  makeEn: string;
  models: string[];
  years: number[];
  priceEstSAR: number;
  inStock: boolean;
  warrantyMonths: number;
  image: string;
  badge?: string;
  badgeEn?: string;
  descriptionAr: string;
  descriptionEn: string;
  specifications: {
    materialAr: string;
    materialEn: string;
    weightKg: number;
    originAr: string;
    originEn: string;
    testingCert: string;
  };
  compatibleVehicles: {
    make: string;
    model: string;
    years: string;
    engine: string;
  }[];
}

export interface BranchLocation {
  id: string;
  cityAr: string;
  cityEn: string;
  nameAr: string;
  nameEn: string;
  type: 'factory' | 'hub' | 'distributor';
  addressAr: string;
  addressEn: string;
  phone: string;
  whatsapp: string;
  email: string;
  hoursAr: string;
  hoursEn: string;
  isHeadquarters?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface NewsItem {
  id: string;
  titleAr: string;
  titleEn: string;
  date: string;
  categoryAr: string;
  categoryEn: string;
  summaryAr: string;
  summaryEn: string;
  image: string;
  readTimeAr: string;
  readTimeEn: string;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: 'dealers' | 'quality' | 'ordering' | 'warranty';
}

export interface StrategicClient {
  id: string;
  nameAr: string;
  nameEn: string;
  brandName: string;
  categoryAr: string;
  categoryEn: string;
  locationAr: string;
  locationEn: string;
  badgeAr: string;
  badgeEn: string;
  accentColor: string;
  taglineAr: string;
  taglineEn: string;
  logoKey: string;
}

export interface SearchFilterState {
  make: string;
  model: string;
  year: string;
  category: string;
  keyword: string;
}

export interface SmartQuoteItem {
  partId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface SmartOrderTrackResult {
  orderId: string;
  clientName: string;
  city: string;
  status: 'received' | 'manufacturing' | 'quality_check' | 'shipped' | 'delivered';
  statusAr: string;
  statusEn: string;
  orderDate: string;
  estimatedDelivery: string;
  carrier: string;
  trackingNumber: string;
  itemsCount: number;
  totalSAR: number;
  timeline: {
    titleAr: string;
    titleEn: string;
    date: string;
    done: boolean;
  }[];
}

export interface AssistantMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  actionPayload?: {
    type: 'part' | 'quote' | 'dealer' | 'location' | 'contact';
    data?: any;
  };
}

