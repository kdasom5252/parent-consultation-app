import React from 'react';
import './BookingCard.css';

function BookingCard({ booking, onCancel }) {
  const getTeacherTypeLabel = (type) => {
    const labels = {
      homeroom: '담임교사',
      subject: '교과교사',
      counselor: '전문상담교사'
    };
    return labels[type] || type;
  };

  return (
    <div className="booking-card">
      <div className="booking-card-header">
        <div className="booking-info">
          <h3>{booking.studentName} 학생</h3>
          <span className="booking-date">{booking.bookingDate}</span>
        </div>
        <div className={`booking-status status-pending`}>예약됨</div>
      </div>

      <div className="booking-card-body">
        <div className="booking-detail">
          <span className="label">학부모</span>
          <span className="value">{booking.parentName}</span>
        </div>

        <div className="booking-detail">
          <span className="label">연락처</span>
          <span className="value">{booking.contactPhone}</span>
        </div>

        <div className="booking-detail">
          <span className="label">상담 대상</span>
          <span className="value">{getTeacherTypeLabel(booking.teacherType)}</span>
        </div>

        {booking.subject && booking.subject !== '해당없음' && (
          <div className="booking-detail">
            <span className="label">상담 과목</span>
            <span className="value">{booking.subject}</span>
          </div>
        )}

        <div className="booking-detail">
          <span className="label">담당 교사</span>
          <span className="value">{booking.teacher}</span>
        </div>

        <div className="booking-detail">
          <span className="label">상담 날짜</span>
          <span className="value">{booking.consultationDate}</span>
        </div>

        <div className="booking-detail">
          <span className="label">상담 시간</span>
          <span className="value">{booking.consultationTime}</span>
        </div>

        {booking.notes && (
          <div className="booking-detail">
            <span className="label">특이사항</span>
            <span className="value notes-value">{booking.notes}</span>
          </div>
        )}
      </div>

      <div className="booking-card-footer">
        <button className="cancel-button" onClick={onCancel}>
          예약 취소
        </button>
      </div>
    </div>
  );
}

export default BookingCard;
