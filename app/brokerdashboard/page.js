'use client'
// components/BrokerDashboard.js
import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import Navbar from '../components/Navbar';

const BrokerDashboard = () => {
  // Hardcoded statistics
  const numberOfClients = 150;
  const clientConversionRate = 75;
  const numberOfInsuranceCompanies = 10;

  // Hardcoded data for charts
  const doughnutChartData = {
    labels: ['Converted Clients', 'Non-Converted Clients'],
    datasets: [
      {
        data: [clientConversionRate, 100 - clientConversionRate],
        backgroundColor: ['#4CAF50', '#e0e0e0'],
      },
    ],
  };

  const barChartData = {
    labels: ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'],
    datasets: [
      {
        label: 'Number of Clients',
        data: [20, 30, 15, 25, 10],
        backgroundColor: '#4CAF50',
      },
    ],
  };

  return (<>
    <Navbar></Navbar>
    <div className='flex justify-center'>
        
      
      {/* Statistics */}
      <div className="grid grid-cols-1 w-1/2 md:grid-cols-3 py-5 gap-4">
        <div className="backdrop-blur bg-white/50 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Number of Clients</h2>
          <p className="text-3xl font-bold">{numberOfClients}</p>
        </div>

        <div className="backdrop-blur bg-white/50 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Client Conversion Rate</h2>
          <p className="text-3xl font-bold">{clientConversionRate}%</p>
        </div>

        <div className="backdrop-blur bg-white/50 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Number of Insurance Companies</h2>
          <p className="text-3xl font-bold">{numberOfInsuranceCompanies}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="backdrop-blur bg-white/50 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Conversion Rate</h2>
          <Doughnut data={doughnutChartData} />
        </div>

        <div className="backdrop-blur bg-white/50 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Clients per Insurance Company</h2>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
    </>
  );
};

export default BrokerDashboard;
