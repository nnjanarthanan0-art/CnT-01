"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const auspiciousDates = [14, 21, 28]; // Example auspicious dates

export default function CalendarSection() {
  const [currentDate] = useState(new Date(2026, 0, 14)); // January 2026
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);

  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2" />);
    }

    // Render days
    for (let day = 1; day <= daysInMonth; day++) {
      const isAuspicious = auspiciousDates.includes(day);
      const isToday = day === 14;

      days.push(
        <div
          key={day}
          className={`p-2 text-center text-sm cursor-pointer transition-colors rounded ${
            isToday
              ? "bg-[var(--gold)] text-[var(--navy)] font-semibold"
              : isAuspicious
              ? "text-[var(--gold)] font-medium"
              : "text-gray-300 hover:text-white"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <section id="calendar" className="bg-[var(--navy)] py-20 lg:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">POOJA CALENDAR</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Auspicious dates,
              <br />
              <span className="italic text-[var(--gold)]">marked in gold</span>.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Pournami, Ekadashi, Sankranti and the great festivals of the Tamil calendar —
              pre-book a priest 7 days in advance for guaranteed availability.
            </p>
            <div className="bg-[var(--navy-light)] border border-[var(--border)] p-4 inline-block">
              <p className="text-gray-400 text-sm">
                Pick a date marked with a gold dot to view its significance.
              </p>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-[var(--navy-light)] border border-[var(--border)] p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button className="text-gray-400 hover:text-white transition-colors p-1">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="text-white font-medium">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button className="text-gray-400 hover:text-white transition-colors p-1">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="p-2 text-center text-xs text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">{renderDays()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
