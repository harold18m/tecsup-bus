
import { RoutesByTimeOfDay } from '@/types';

// This function provides all routes data organized by time of day
export const getAllRoutes = (): RoutesByTimeOfDay => {
  return {
    morning: [
      {
        id: 'morning-1',
        name: 'Campus Express Morning Route',
        startPoint: 'Downtown Terminal',
        endPoint: 'Tecsup Campus',
        stops: [
          { id: 'm1-1', name: 'Downtown Terminal', latitude: -12.060000, longitude: -77.030000, order: 0 },
          { id: 'm1-2', name: 'Central Park', latitude: -12.055000, longitude: -77.035000, order: 1 },
          { id: 'm1-3', name: 'Main Avenue', latitude: -12.050000, longitude: -77.038000, order: 2 },
          { id: 'm1-4', name: 'University Square', latitude: -12.048000, longitude: -77.040000, order: 3 },
          { id: 'm1-5', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 4 },
        ],
        distance: 6.3,
        estimatedDuration: 30,
        status: 'active',
      },
      {
        id: 'morning-2',
        name: 'North Side Morning Route',
        startPoint: 'North Terminal',
        endPoint: 'Tecsup Campus',
        stops: [
          { id: 'm2-1', name: 'North Terminal', latitude: -12.030000, longitude: -77.050000, order: 0 },
          { id: 'm2-2', name: 'Science Park', latitude: -12.035000, longitude: -77.048000, order: 1 },
          { id: 'm2-3', name: 'Hospital District', latitude: -12.040000, longitude: -77.045000, order: 2 },
          { id: 'm2-4', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 3 },
        ],
        distance: 5.5,
        estimatedDuration: 25,
        status: 'active',
      }
    ],

    afternoon: [
      {
        id: 'afternoon-1',
        name: 'Downtown Afternoon Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'Downtown Terminal',
        stops: [
          { id: 'a1-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'a1-2', name: 'University Square', latitude: -12.048000, longitude: -77.040000, order: 1 },
          { id: 'a1-3', name: 'Main Avenue', latitude: -12.050000, longitude: -77.038000, order: 2 },
          { id: 'a1-4', name: 'Central Park', latitude: -12.055000, longitude: -77.035000, order: 3 },
          { id: 'a1-5', name: 'Downtown Terminal', latitude: -12.060000, longitude: -77.030000, order: 4 },
        ],
        distance: 6.3,
        estimatedDuration: 35,
        status: 'active',
      },
      {
        id: 'afternoon-2',
        name: 'North Side Afternoon Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'North Terminal',
        stops: [
          { id: 'a2-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'a2-2', name: 'Hospital District', latitude: -12.040000, longitude: -77.045000, order: 1 },
          { id: 'a2-3', name: 'Science Park', latitude: -12.035000, longitude: -77.048000, order: 2 },
          { id: 'a2-4', name: 'North Terminal', latitude: -12.030000, longitude: -77.050000, order: 3 },
        ],
        distance: 5.5,
        estimatedDuration: 25,
        status: 'active',
      },
      {
        id: 'afternoon-3',
        name: 'East Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'East Station',
        stops: [
          { id: 'a3-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'a3-2', name: 'Tech District', latitude: -12.047000, longitude: -77.030000, order: 1 },
          { id: 'a3-3', name: 'Commerce Center', latitude: -12.049000, longitude: -77.020000, order: 2 },
          { id: 'a3-4', name: 'East Station', latitude: -12.050000, longitude: -77.015000, order: 3 },
        ],
        distance: 7.8,
        estimatedDuration: 40,
        status: 'active',
      },
      {
        id: 'afternoon-4',
        name: 'South Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'South Terminal',
        stops: [
          { id: 'a4-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'a4-2', name: 'Sports Complex', latitude: -12.060000, longitude: -77.040000, order: 1 },
          { id: 'a4-3', name: 'Residential Zone', latitude: -12.070000, longitude: -77.038000, order: 2 },
          { id: 'a4-4', name: 'South Terminal', latitude: -12.080000, longitude: -77.035000, order: 3 },
        ],
        distance: 8.2,
        estimatedDuration: 45,
        status: 'active',
      },
      {
        id: 'afternoon-5',
        name: 'West Express',
        startPoint: 'Tecsup Campus',
        endPoint: 'West Station',
        stops: [
          { id: 'a5-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'a5-2', name: 'Innovation Park', latitude: -12.045000, longitude: -77.055000, order: 1 },
          { id: 'a5-3', name: 'Business District', latitude: -12.044000, longitude: -77.065000, order: 2 },
          { id: 'a5-4', name: 'West Station', latitude: -12.043000, longitude: -77.075000, order: 3 },
        ],
        distance: 6.5,
        estimatedDuration: 30,
        status: 'active',
      }
    ],

    night: [
      {
        id: 'night-1',
        name: 'Night Downtown Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'Downtown Terminal',
        stops: [
          { id: 'n1-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'n1-2', name: 'University Square', latitude: -12.048000, longitude: -77.040000, order: 1 },
          { id: 'n1-3', name: 'Main Avenue', latitude: -12.050000, longitude: -77.038000, order: 2 },
          { id: 'n1-4', name: 'Central Park', latitude: -12.055000, longitude: -77.035000, order: 3 },
          { id: 'n1-5', name: 'Downtown Terminal', latitude: -12.060000, longitude: -77.030000, order: 4 },
        ],
        distance: 6.3,
        estimatedDuration: 25,
        status: 'active',
      },
      {
        id: 'night-2',
        name: 'Night North Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'North Terminal',
        stops: [
          { id: 'n2-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'n2-2', name: 'Hospital District', latitude: -12.040000, longitude: -77.045000, order: 1 },
          { id: 'n2-3', name: 'Science Park', latitude: -12.035000, longitude: -77.048000, order: 2 },
          { id: 'n2-4', name: 'North Terminal', latitude: -12.030000, longitude: -77.050000, order: 3 },
        ],
        distance: 5.5,
        estimatedDuration: 20,
        status: 'active',
      },
      {
        id: 'night-3',
        name: 'Night South Route',
        startPoint: 'Tecsup Campus',
        endPoint: 'South Terminal',
        stops: [
          { id: 'n3-1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
          { id: 'n3-2', name: 'Sports Complex', latitude: -12.060000, longitude: -77.040000, order: 1 },
          { id: 'n3-3', name: 'Residential Zone', latitude: -12.070000, longitude: -77.038000, order: 2 },
          { id: 'n3-4', name: 'South Terminal', latitude: -12.080000, longitude: -77.035000, order: 3 },
        ],
        distance: 8.2,
        estimatedDuration: 35,
        status: 'active',
      }
    ]
  };
};
