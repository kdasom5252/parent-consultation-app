import React, { useState } from 'react';
import './App.css';
import ConsultationForm from './components/ConsultationForm';
import BookingList from './components/BookingList';

function App() {
  const [bookings, setBookings] = useState([]);
  const [currentTab, setCurrentTab] = useState('booking');

  const handleBookingSubmit = (formData) => {
    const newBooking = {
      id: Date.now(),
      ...formData,
      bookingDate: new Date().toLocaleDateString('ko-KR'),
    };
    setBookings([...bookings, newBooking]);
    alert('예약이 정상 접수되었습니다!');
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('예약을 취소하시겠습니까?')) {
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      alert('예약이 취소되었습니다.');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>학부모 상담 예약 시스템</h1>
      </header>

      <nav className="tabs">
        <button
          className={`tab-button ${currentTab === 'booking' ? 'active' : ''}`}
          onClick={() => setCurrentTab('booking')}
        >
          상담 신청
        </button>
        <button
          className={`tab-button ${currentTab === 'list' ? 'active' : ''}`}
          onClick={() => setCurrentTab('list')}
        >
          예약 현황 ({bookings.length})
        </button>
      </nav>

      <main className="container">
        {currentTab === 'booking' ? (
          <ConsultationForm onSubmit={handleBookingSubmit} />
        ) : (
          <BookingList bookings={bookings} onCancel={handleCancelBooking} />
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2024 학부모 상담 예약 시스템. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
