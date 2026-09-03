import React from 'react';
import './BookingList.css';
import BookingCard from './BookingCard';

function BookingList({ bookings, onCancel }) {
  if (bookings.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <h2>예약 현황이 없습니다</h2>
        <p>상담 신청 탭에서 새로운 상담을 예약해주세요.</p>
      </div>
    );
  }

  return (
    <div className="booking-list-container">
      <div className="booking-list-header">
        <h2>예약 현황</h2>
        <span className="booking-count">총 {bookings.length}건</span>
      </div>
      <div className="booking-list">
        {bookings.map(booking => (
          <BookingCard
            key={booking.id}
            booking={booking}
            onCancel={() => onCancel(booking.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BookingList;
