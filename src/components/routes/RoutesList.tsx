
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllRoutes } from '@/data/routesData';
import { TimeOfDay } from '@/types';

interface RoutesListProps {
  timeOfDay: TimeOfDay;
  onRouteSelect: (routeId: string) => void;
  selectedRouteId: string | null;
}

const RoutesList: React.FC<RoutesListProps> = ({ 
  timeOfDay, 
  onRouteSelect,
  selectedRouteId
}) => {
  const routes = getAllRoutes()[timeOfDay];
  
  return (
    <div className="space-y-4">
      {routes.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No routes available for this time
        </div>
      ) : (
        routes.map((route) => (
          <div 
            key={route.id} 
            className={`p-4 border rounded-md transition-colors ${
              selectedRouteId === route.id 
                ? 'border-tecsup bg-tecsup/5' 
                : 'hover:border-tecsup-light/50'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{route.name}</h4>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <p>{route.startPoint} → {route.endPoint}</p>
                </div>
              </div>
              <Button 
                size="sm" 
                variant={selectedRouteId === route.id ? "default" : "outline"}
                className={selectedRouteId === route.id ? "bg-tecsup hover:bg-tecsup-dark text-white" : "border-tecsup text-tecsup hover:bg-tecsup/5"}
                onClick={() => onRouteSelect(route.id)}
              >
                {selectedRouteId === route.id ? "Selected" : "View"}
              </Button>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> Duration
                </p>
                <p>~{route.estimatedDuration} mins</p>
              </div>
              <div>
                <p className="text-gray-500">Stops</p>
                <p>{route.stops.length} stops</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RoutesList;
