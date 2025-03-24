
import React, { useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { getAllRoutes } from '@/data/routesData';
import { TimeOfDay } from '@/types';

interface RouteMapProps {
  timeOfDay: TimeOfDay;
  routeId: string | null;
}

const RouteMap: React.FC<RouteMapProps> = ({ timeOfDay, routeId }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!routeId) {
      // If no route is selected, just show a message
      ctx.fillStyle = '#4b5563';
      ctx.font = '16px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Select a route to view on the map', canvas.width / 2, canvas.height / 2);
      return;
    }
    
    // Get routes for the selected time of day
    const routes = getAllRoutes()[timeOfDay];
    
    // Find the selected route
    const selectedRoute = routes.find(route => route.id === routeId);
    
    if (!selectedRoute) return;
    
    // Draw route line
    ctx.strokeStyle = '#00b9eb';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    
    const stops = selectedRoute.stops.sort((a, b) => a.order - b.order);
    
    // For this prototype, we'll create arbitrary positions for stops
    const padding = 40;
    const availableWidth = canvas.width - padding * 2;
    const availableHeight = canvas.height - padding * 2;
    
    stops.forEach((stop, index) => {
      // Generate x and y positions along a curve
      const x = padding + (availableWidth * index) / (stops.length - 1);
      // Create a slight curve by using a sine wave
      const curve = Math.sin((index / (stops.length - 1)) * Math.PI) * 50;
      const y = canvas.height / 2 - curve;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw stops
    stops.forEach((stop, index) => {
      const x = padding + (availableWidth * index) / (stops.length - 1);
      const curve = Math.sin((index / (stops.length - 1)) * Math.PI) * 50;
      const y = canvas.height / 2 - curve;
      
      // Stop circle
      ctx.fillStyle = index === 0 || index === stops.length - 1 ? '#00b9eb' : '#ffffff';
      ctx.strokeStyle = '#00b9eb';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Stop label
      ctx.fillStyle = '#4b5563';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      
      // Alternate label positions above and below the line
      const textY = index % 2 === 0 ? y - 20 : y + 30;
      ctx.fillText(stop.name, x, textY);
    });
    
    // Draw route name
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(selectedRoute.name, canvas.width / 2, 30);
    
  }, [timeOfDay, routeId]);
  
  return (
    <div className="w-full h-[500px] relative">
      {!routeId ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
          <MapPin className="h-12 w-12 mb-4 text-gray-300" />
          <p>Select a route to view the map</p>
        </div>
      ) : (
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default RouteMap;
