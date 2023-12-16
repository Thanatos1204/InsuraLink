'use client'
// components/BrokerDashboard.js
import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
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

  const conversionRateData = [50, 60, 75, 80, 70, 85, 90];

  const linechartData = {
    
    labels: conversionRateData.map((entry, index) => `Week ${index + 1}`),
    datasets: [
      {
        label: 'Conversion Rate',
        data: conversionRateData,
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  const barChartData = {
    labels: ['LIC', 'ICICI', 'HDFC ERGO', 'New India Assurance', 'SBI'],
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
    <div className='flex w-screen justify-around items-center gap-10'>
        
      
      {/* Statistics */}      
      
            <div className="flex flex-col gap-5">
                <div className="backdrop-blur w-1/2 text-white bg-black/30 p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Client Conversion Rate</h2>
                <p className="text-6xl py-6 font-bold">{clientConversionRate}%</p>
                </div>

                
                <div className="backdrop-blur w-1/2 text-white bg-black/30  p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Number of Clients</h2>
                <p className="text-6xl py-6 font-bold">{numberOfClients}</p>
                </div>


                <div className="backdrop-blur w-1/2 text-white bg-black/30 p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Number of Insurance Companies</h2>
                <p className="text-6xl py-6 font-bold">{numberOfInsuranceCompanies}</p>
                </div>  
                
            </div>
    
            <div className='flex flex-col gap-5 px-5 w-1/2 h-1/2'>
            

                <div className="backdrop-blur w-3/4 text-white bg-black/30 p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Conversion Rate per Time</h2>
                    <Line data={linechartData} options={chartOptions} />
                </div>

                <div className="backdrop-blur w-3/4 text-white bg-black/30 p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Converted Clients</h2>
                <Doughnut data={doughnutChartData} />         
                </div>    

                <div className="backdrop-blur w-3/4 text-white bg-black/30 p-4 rounded-md shadow">
                <h2 className="text-lg font-semibold">Clients per Insurance Company</h2>
                <Bar data={barChartData} />
                </div>
            </div>   
    </div>
    
    </>
  );
};

export default BrokerDashboard;
