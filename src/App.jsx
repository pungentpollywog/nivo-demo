import { useState } from 'react';
import BarChart from './components/BarChart';
import { SPECIALTIES } from './constants/specialties';
import './App.scss';

const tempData = [
  {
    _id: 'Obstetrics and Gynecology (OB-GYN)',
    total: 68,
  },
  {
    _id: 'Psychiatry',
    total: 59,
  },
  {
    _id: 'Radiology',
    total: 75,
  },
  {
    _id: 'Emergency Medicine',
    total: 54,
  },
  {
    _id: 'Internal Medicine',
    total: 61,
  },
  {
    _id: 'Family Medicine',
    total: 65,
  },
  {
    _id: 'Plastic Surgery',
    total: 54,
  },
  {
    _id: 'Dermatology',
    total: 56,
  },
  {
    _id: 'Urology',
    total: 67,
  },
  {
    _id: 'Pathology',
    total: 51,
  },
  {
    _id: 'Cardiology',
    total: 67,
  },
  {
    _id: 'Pediatrics',
    total: 62,
  },
  {
    _id: 'Anesthesiology',
    total: 45,
  },
  {
    _id: 'Otolaryngology (ENT)',
    total: 47,
  },
  {
    _id: 'Orthopedic Surgery',
    total: 51,
  },
  {
    _id: 'Neurology',
    total: 58,
  },
  {
    _id: 'Ophthalmology',
    total: 60,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Doctors by Specialty</h2>
      <div className="charts">
        <BarChart data={tempData} keys={SPECIALTIES} />
      </div>
    </>
  );
}

export default App;
