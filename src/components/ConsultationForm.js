import React, { useState } from 'react';
import './ConsultationForm.css';
import { teacherData } from '../data/teacherData';

function ConsultationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    contactPhone: '',
    teacherType: '',
    subject: '',
    teacher: '',
    consultationDate: '',
    consultationTime: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [showSubjectSelect, setShowSubjectSelect] = useState(false);
  const [availableTeachers, setAvailableTeachers] = useState([]);

  const timeSlots = [
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleTeacherTypeChange = (e) => {
    const selectedType = e.target.value;
    setFormData(prev => ({
      ...prev,
      teacherType: selectedType,
      subject: '',
      teacher: ''
    }));

    if (selectedType === 'subject') {
      setShowSubjectSelect(true);
      setAvailableTeachers([]);
    } else if (selectedType) {
      setShowSubjectSelect(false);
      setAvailableTeachers(teacherData[selectedType] || []);
    } else {
      setShowSubjectSelect(false);
      setAvailableTeachers([]);
    }
  };

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    setFormData(prev => ({
      ...prev,
      subject: selectedSubject,
      teacher: ''
    }));

    if (selectedSubject && teacherData.subject[selectedSubject]) {
      setAvailableTeachers(teacherData.subject[selectedSubject]);
    } else {
      setAvailableTeachers([]);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) newErrors.studentName = '학생 이름을 입력해주세요.';
    if (!formData.parentName.trim()) newErrors.parentName = '학부모 이름을 입력해주세요.';
    if (!formData.contactPhone.trim()) newErrors.contactPhone = '연락처를 입력해주세요.';
    if (!formData.teacherType) newErrors.teacherType = '상담 대상을 선택해주세요.';
    if (formData.teacherType === 'subject' && !formData.subject) {
      newErrors.subject = '상담 과목을 선택해주세요.';
    }
    if (!formData.teacher) newErrors.teacher = '담당 교사를 선택해주세요.';
    if (!formData.consultationDate) newErrors.consultationDate = '상담 날짜를 선택해주세요.';
    if (!formData.consultationTime) newErrors.consultationTime = '상담 시간을 선택해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        studentName: '',
        parentName: '',
        contactPhone: '',
        teacherType: '',
        subject: '',
        teacher: '',
        consultationDate: '',
        consultationTime: '',
        notes: '',
      });
      setShowSubjectSelect(false);
      setAvailableTeachers([]);
    }
  };

  return (
    <div className="form-container">
      <form className="consultation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">학생 이름 *</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="예: 홍길동"
            className={errors.studentName ? 'error' : ''}
          />
          {errors.studentName && <span className="error-message">{errors.studentName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="parentName">학부모 이름 *</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="예: 홍길순"
            className={errors.parentName ? 'error' : ''}
          />
          {errors.parentName && <span className="error-message">{errors.parentName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contactPhone">연락처 (휴대폰) *</label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            placeholder="예: 010-1234-5678"
            className={errors.contactPhone ? 'error' : ''}
          />
          {errors.contactPhone && <span className="error-message">{errors.contactPhone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="teacherType">상담 대상 구분 *</label>
          <select
            id="teacherType"
            name="teacherType"
            value={formData.teacherType}
            onChange={handleTeacherTypeChange}
            className={errors.teacherType ? 'error' : ''}
          >
            <option value="">-- 구분을 선택하세요 --</option>
            <option value="homeroom">담임교사</option>
            <option value="subject">교과교사</option>
            <option value="counselor">전문상담교사(Wee클래스)</option>
          </select>
          {errors.teacherType && <span className="error-message">{errors.teacherType}</span>}
        </div>

        {showSubjectSelect && (
          <div className="form-group">
            <label htmlFor="subject">상담 과목 *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleSubjectChange}
              className={errors.subject ? 'error' : ''}
            >
              <option value="">-- 과목을 선택하세요 --</option>
              {Object.keys(teacherData.subject).map(subj => (
                <option key={subj} value={subj}>{subj}</option>
              ))}
            </select>
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="teacher">담당 교사 *</label>
          <select
            id="teacher"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            disabled={availableTeachers.length === 0}
            className={errors.teacher ? 'error' : ''}
          >
            <option value="">-- 교사를 선택하세요 --</option>
            {availableTeachers.map((teacher, idx) => (
              <option key={idx} value={teacher}>{teacher}</option>
            ))}
          </select>
          {errors.teacher && <span className="error-message">{errors.teacher}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="consultationDate">상담 날짜 *</label>
          <input
            type="date"
            id="consultationDate"
            name="consultationDate"
            value={formData.consultationDate}
            onChange={handleChange}
            className={errors.consultationDate ? 'error' : ''}
          />
          {errors.consultationDate && <span className="error-message">{errors.consultationDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="consultationTime">상담 시간 *</label>
          <select
            id="consultationTime"
            name="consultationTime"
            value={formData.consultationTime}
            onChange={handleChange}
            className={errors.consultationTime ? 'error' : ''}
          >
            <option value="">-- 시간을 선택하세요 --</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.consultationTime && <span className="error-message">{errors.consultationTime}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="notes">상담 시 특이사항</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="상담 내용이나 요청사항을 입력해주세요."
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">예약 신청하기</button>
      </form>
    </div>
  );
}

export default ConsultationForm;
