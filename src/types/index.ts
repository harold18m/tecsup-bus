
export type UserRole = 'admin' | 'driver' | 'passenger';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  photoURL?: string;
}

export interface Bus {
  id: string;
  plateNumber: string;
  capacity: number;
  model: string;
  status: 'active' | 'maintenance' | 'inactive';
  driverId?: string;
}

export interface Driver {
  id: string;
  userId: string;
  licenseNumber: string;
  experience: number; // years
  phoneNumber: string;
  status: 'available' | 'on_route' | 'off_duty';
}

export interface Route {
  id: string;
  name: string;
  startPoint: string;
  endPoint: string;
  stops: RouteStop[];
  distance: number; // in km
  estimatedDuration: number; // in minutes
  status: 'active' | 'inactive';
}

export interface RouteStop {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  order: number;
  estimatedArrivalTime?: string; // HH:MM format
}

export interface Trip {
  id: string;
  routeId: string;
  busId: string;
  driverId: string;
  departureTime: Date;
  arrivalTime?: Date;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  availableSeats: number;
  passengerCount: number;
}

export interface Reservation {
  id: string;
  tripId: string;
  userId: string;
  seatNumber?: number;
  status: 'confirmed' | 'cancelled' | 'completed';
  qrCode: string;
  timestamp: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  timestamp: Date;
  type: 'info' | 'warning' | 'error' | 'success';
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
}
