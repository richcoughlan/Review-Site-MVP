import React from 'react';
import { QrCode, BarChart2, LineChart, PieChart } from 'lucide-react';

interface Props {
  variant?: 'qr' | 'charts' | 'mixed';
  className?: string;
}

export const DecorativeBackground: React.FC<Props> = ({ variant = 'mixed', className = '' }) => {
  const renderQRCodes = () => (
    <>
      <div className="absolute right-0 top-1/4 transform translate-x-1/2 opacity-5">
        <QrCode className="w-48 h-48" />
      </div>
      <div className="absolute left-0 top-2/3 transform -translate-x-1/2 opacity-5">
        <QrCode className="w-32 h-32" />
      </div>
      <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 opacity-5">
        <QrCode className="w-40 h-40" />
      </div>
    </>
  );

  const renderCharts = () => (
    <>
      <div className="absolute left-0 top-1/4 transform -translate-x-1/2 opacity-5">
        <BarChart2 className="w-48 h-48" />
      </div>
      <div className="absolute right-1/3 top-1/2 transform translate-x-1/2 opacity-5">
        <LineChart className="w-40 h-40" />
      </div>
      <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 opacity-5">
        <PieChart className="w-32 h-32" />
      </div>
    </>
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {(variant === 'qr' || variant === 'mixed') && renderQRCodes()}
      {(variant === 'charts' || variant === 'mixed') && renderCharts()}
    </div>
  );
};