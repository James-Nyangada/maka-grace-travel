export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: 'super-admin' | 'admin';
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  token: string | null;
  user: AdminUser | null;
}

export interface Package {
  _id: string;
  name: string;
  slug: string;
  destination: string;
  category: string;
  duration: string;
  groupSize: string;
  priceFrom: number;
  priceFromKSH?: number;
  currency: string;
  badge: 'popular' | 'limited' | 'new' | 'null' | null | '';
  overview: string;
  highlights?: string[];
  packageActivities?: string[];
  itinerary: {
    dayNumber: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  meals: string;
  transport: string;
  accommodation: string;
  imageUrl: string;
  galleryUrls: string[];
  isActive: boolean;
  isFeatured: boolean;
  rating: number;
  reviewCount: number;
  views: number;
  pricing?: {
    title: string;
    price: number;
    priceKSH?: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  country: string;
  packageId: string;
  packageName: string;
  travelDateFrom: string;
  travelDateTo: string;
  adults: number;
  children: number;
  childrenAges?: string;
  accommodationPref: 'budget' | 'midrange' | 'luxury' | null | '';
  specialRequests?: string;
  howHeard?: string;
  additionalNotes?: string;
  agreedToTerms: boolean;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking extends BookingFormData {
  _id: string;
  status: BookingStatus;
  depositPaid: boolean;
  depositAmount?: number;
  paymentMethod?: string;
  paymentReference?: string;
  adminNotes?: string;
  confirmationEmailSent: boolean;
  adminNotificationSent: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone?: string;
  destination?: string;
  message: string;
}

export interface Enquiry extends EnquiryFormData {
  _id: string;
  isRead: boolean;
  isReplied: boolean;
  repliedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  location?: string;
  packageBooked?: string;
  travelDate?: string;
  rating: number;
  review: string;
  photoUrl?: string;
  isFeatured: boolean;
  isApproved: boolean;
  platform: 'website' | 'google' | 'tripadvisor' | 'facebook';
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: string;
  thumbnailUrl?: string;
  author: string;
  tags: string[];
  isPublished: boolean;
  publishedAt?: string;
  readTime?: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  data: T[]; // Some endpoints might use 'packages' or 'bookings' etc. Let's make it flexible or handle it in the client
  page: number;
  totalPages: number;
  total: number;
}

export interface DashboardStats {
  bookings: {
    total: number;
    pending: number;
    confirmed: number;
    cancelled: number;
    thisMonth: number;
    lastMonth: number;
  };
  packages: {
    total: number;
    active: number;
    top: { name: string; views: number; reviewCount: number; rating: number }[];
  };
  enquiries: {
    total: number;
    unread: number;
  };
  testimonials: {
    total: number;
    approved: number;
  };
  blog: {
    published: number;
  };
}

export interface DashboardRecent {
  bookings: Booking[];
  enquiries: Enquiry[];
}
