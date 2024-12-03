import React, { useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useBusinessStore } from '../../store/businessStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TimePeriod = 'weekly' | 'monthly';

export const ReviewChart = () => {
  const { reviews } = useBusinessStore();
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('monthly');

  const chartData = useMemo(() => {
    // Sort reviews by date
    const sortedReviews = [...reviews].sort((a, b) => 
      a.createdAt.getTime() - b.createdAt.getTime()
    );

    // Get date range based on time period
    const endDate = new Date();
    const startDate = new Date();
    if (timePeriod === 'weekly') {
      startDate.setDate(endDate.getDate() - 6); // Last 7 days including today
    } else {
      startDate.setDate(endDate.getDate() - 30); // Last 31 days including today
    }
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    // Generate all dates in range
    const dates: string[] = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Initialize data for all dates
    const reviewsByDate = dates.reduce((acc, date) => {
      acc[date] = { positive: 0, negative: 0 };
      return acc;
    }, {} as Record<string, { positive: number; negative: number }>);

    // Fill in actual review counts
    reviews.forEach(review => {
      const reviewDate = new Date(review.createdAt);
      if (reviewDate >= startDate && reviewDate <= endDate) {
        const date = reviewDate.toISOString().split('T')[0];
        if (reviewsByDate[date]) {
          if (review.type === 'positive') {
            reviewsByDate[date].positive++;
          } else {
            reviewsByDate[date].negative++;
          }
        }
      }
    });

    // Prepare chart data
    const positiveData = dates.map(date => reviewsByDate[date].positive);
    const negativeData = dates.map(date => reviewsByDate[date].negative);

    return {
      labels: dates.map(date => new Date(date).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric'
      })),
      datasets: [
        {
          label: 'Positive Reviews',
          data: positiveData,
          borderColor: '#16a34a',
          backgroundColor: '#bbf7d0',
          tension: 0.4,
        },
        {
          label: 'Feedback Received',
          data: negativeData,
          borderColor: '#ea580c',
          backgroundColor: '#fed7aa',
          tension: 0.4,
        }
      ]
    };
  }, [reviews, timePeriod]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">Review Trends</h3>
        <select
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value as TimePeriod)}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="h-[300px]">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};