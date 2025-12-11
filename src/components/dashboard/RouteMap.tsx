'use client';

import React, { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Route, RouteStop } from '@/types';

interface RouteMapProps {
  route?: Route;
  className?: string;
}

const RouteMap: React.FC<RouteMapProps> = ({ route, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !route) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // For this prototype, we'll draw a simple representation of the route
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw route line
    ctx.strokeStyle = '#00b9eb';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();

    const stops = route.stops.sort((a, b) => a.order - b.order);

    // For this prototype, we'll just create arbitrary positions
    // In a real app, we would use the actual latitude and longitude
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

  }, [route, canvasRef]);

  return (
    <Card className={`p-4 ${className}`}>
      <div className="w-full h-64 relative">
        {route ? (
          <>
            <h3 className="font-medium text-gray-700 mb-2">{route.name}</h3>
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No route selected
          </div>
        )}
      </div>
    </Card>
  );
};

export default RouteMap;
