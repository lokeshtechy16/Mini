import React from 'react';

function StatsSection() {
  return (
    <div className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700">
              14 Lakh+
            </div>
            <div className="text-gray-600">
              Seller community
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700">
              24×7
            </div>
            <div className="text-gray-600">
              Online Business
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700">
              7
            </div>
            <div className="text-gray-600">
              days* payment
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700">
              19000+
            </div>
            <div className="text-gray-600">
              Pincodes served
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
