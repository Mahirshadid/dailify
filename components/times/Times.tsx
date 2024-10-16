"use client";

import React, { useState, useEffect } from 'react';
import './times.css';

interface TimeData {
  [key: string]: string;
}

const Times = () => {
  const [loading, setLoading] = useState(true);
  const [cityData, setCityData] = useState<{ [city: string]: TimeData }>({});
  const [currentDate, setCurrentDate] = useState('');
  const [hijriDate, setHijriDate] = useState('');
  const [hijriMonth, sethijriMonth] = useState('');

  const cities = [
    'Dhaka',
    'Chittagong',
    'Rajshahi',
    'Barishal',
    'Khulna',
    'Sylhet',
    'Rangpur',
    'Mymensingh',
  ];

  const specificPrayerTimes = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Imsak', 'Lastthird'];

  useEffect(() => {
    async function fetchData(city: string) {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Bangladesh&method=8`
        );
        const data = await res.json();
        setCityData((prevData) => ({
          ...prevData,
          [city]: data.data.timings,
        }));
        setCurrentDate(data.data.date.gregorian.date);
        setHijriDate(data.data.date.hijri.date);
        sethijriMonth(data.data.date.hijri.month.en);
      } catch (error) {
        console.error('Error fetching time data:', error);
      }
    }

    Promise.all(cities.map((city) => fetchData(city))).then(() => setLoading(false));
  }, []);

  const keyMapping: { [key: string]: string } = {
    Fajr: 'Fajr',
    Sunrise: 'Sunrise',
    Dhuhr: 'Dhuhr',
    Asr: 'Asr',
    Maghrib: 'Maghrib',
    Isha: 'Isha',
    Imsak: 'Imsak',
    Lastthird: 'Tahajjud',
  };

  const formatTimeTo12Hour = (time24Hour: string) => {
    const [hours, minutes] = time24Hour.split(':');
    const date = new Date(0, 0, 0, Number(hours), Number(minutes));
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startItem = currentPage * itemsPerPage;
  const endItem = startItem + itemsPerPage;

  const citiesToShow = cities.slice(startItem, endItem);

  return (
    <div className="times section__padding" id="times">
      <div className="times_contents">
        <div className='times_contents-dates'>
          <h3>{hijriMonth}</h3>
          <h3>Arabic {hijriDate}</h3>
          <h3>Gregorian {currentDate}</h3>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='times_contents-times'>
            {citiesToShow.map((city) => (
              <div key={city} className='cities color-change-2x'>
                <h3>{city}</h3>
                <ul>
                  {specificPrayerTimes.map((prayerTime) => (
                    <li key={prayerTime}>
                      <span>{keyMapping[prayerTime]}</span>  <span>{formatTimeTo12Hour(cityData[city][prayerTime])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="navigation-buttons">
              <button onClick={prevPage} disabled={currentPage === 0}>
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage >= Math.ceil(cities.length / itemsPerPage) - 1}
              >
                More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Times;
