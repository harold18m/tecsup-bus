
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ value, size = 200, className = '' }) => {
  // In a real app, we would use a QR code library
  // For this prototype, we'll simulate a QR code with a placeholder
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-4 flex flex-col items-center">
        <div 
          style={{ width: size, height: size }}
          className="bg-white border border-gray-200 rounded-md flex items-center justify-center"
        >
          <div className="w-3/4 h-3/4 bg-gray-200 relative flex items-center justify-center">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-3">
              {Array.from({ length: 16 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'} 
                  ${[0, 3, 12, 15].includes(i) ? 'bg-black' : ''}`}
                />
              ))}
            </div>
            <div className="w-1/2 h-1/2 bg-white flex items-center justify-center z-10 text-xs text-gray-400 text-center">
              {value.substring(0, 8)}...
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-center">Scan this QR code to board</p>
      </CardContent>
    </Card>
  );
};

export default QRCode;
