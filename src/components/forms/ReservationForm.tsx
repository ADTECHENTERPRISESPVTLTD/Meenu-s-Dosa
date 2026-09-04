'use client';

import React, { useState } from 'react';
import { locationsConfig } from '@/config/locations';
import { Button } from '@/ui/Button';
import { Calendar, Clock, Users, MapPin, CheckCircle, AlertCircle, Phone, Info } from 'lucide-react';

interface ReservationFormProps {
  defaultOutletId?: string;
}

export function ReservationForm({ defaultOutletId }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    outlet: defaultOutletId || locationsConfig[0].id,
    date: '',
    time: '19:30',
    guests: '2',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedLocation = locationsConfig.find((loc) => loc.id === formData.outlet) || locationsConfig[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!formData.date) {
      setErrorMessage('Please select a reservation date.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Clean service abstraction: simulates API request or endpoint integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong submitting your request. Please call the branch directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-orange/30 shadow-warm-lg text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-green">
            Request Received
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
            Thank you, {formData.name}!
          </h3>
          <p className="text-sm text-brand-brown-muted max-w-md mx-auto leading-relaxed">
            Your table reservation request for <strong>{formData.guests} guests</strong> on <strong>{formData.date} at {formData.time}</strong> at our <strong>{selectedLocation.name}</strong> has been received.
          </p>
        </div>

        <div className="bg-brand-cream p-4 rounded-2xl border border-brand-brown/10 text-xs text-brand-brown-muted text-left space-y-1.5 max-w-md mx-auto">
          <div className="flex items-center gap-1.5 font-semibold text-brand-brown">
            <Info className="w-4 h-4 text-brand-orange" />
            <span>Important Note:</span>
          </div>
          <p>
            Our manager will call or WhatsApp your number ({formData.phone}) to confirm table availability. Reservations are held for 15 minutes past the booking time.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={`tel:${selectedLocation.phoneRaw}`}
            variant="secondary"
            size="sm"
            leftIcon={<Phone className="w-4 h-4 text-brand-orange" />}
          >
            Call {selectedLocation.name.replace(' Outlet', '')}
          </Button>
          <Button
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                phone: '',
                email: '',
                outlet: defaultOutletId || locationsConfig[0].id,
                date: '',
                time: '19:30',
                guests: '2',
                specialRequests: '',
              });
            }}
            variant="outline"
            size="sm"
          >
            Book Another Table
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-brown/10 shadow-warm-lg space-y-6"
    >
      <div className="border-b border-brand-brown/10 pb-4">
        <h3 className="font-serif text-2xl font-bold text-brand-brown">
          Reserve Your Table
        </h3>
        <p className="text-xs sm:text-sm text-brand-brown-muted mt-1">
          Enjoy fresh crispy dosas with family and friends at our Bhopal dining rooms.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-base focus:bg-white focus:border-brand-orange transition-colors"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-base focus:bg-white focus:border-brand-orange transition-colors"
          />
        </div>

        {/* Email Address (Optional) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Email Address <span className="text-xs text-brand-brown-muted font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            placeholder="e.g. rajesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-base focus:bg-white focus:border-brand-orange transition-colors"
          />
        </div>

        {/* Outlet Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Select Outlet <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.outlet}
              onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm appearance-none focus:bg-white focus:border-brand-orange transition-colors pr-10"
            >
              {locationsConfig.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name} ({loc.area})
                </option>
              ))}
            </select>
            <MapPin className="w-4 h-4 text-brand-brown/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Reservation Date */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Date <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-base focus:bg-white focus:border-brand-orange transition-colors"
            />
          </div>
        </div>

        {/* Reservation Time */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Time Slot <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm appearance-none focus:bg-white focus:border-brand-orange transition-colors pr-10"
            >
              <option value="08:30">08:30 AM (Breakfast)</option>
              <option value="09:30">09:30 AM (Breakfast)</option>
              <option value="10:30">10:30 AM (Morning)</option>
              <option value="12:30">12:30 PM (Lunch)</option>
              <option value="13:30">01:30 PM (Lunch)</option>
              <option value="14:30">02:30 PM (Afternoon)</option>
              <option value="17:00">05:00 PM (Evening Snacks)</option>
              <option value="18:30">06:30 PM (Dinner)</option>
              <option value="19:30">07:30 PM (Dinner)</option>
              <option value="20:30">08:30 PM (Dinner)</option>
              <option value="21:30">09:30 PM (Late Dinner)</option>
            </select>
            <Clock className="w-4 h-4 text-brand-brown/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Number of Guests */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Number of Guests <span className="text-brand-orange">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm appearance-none focus:bg-white focus:border-brand-orange transition-colors pr-10"
            >
              <option value="1">1 Person</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests (Standard Table)</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests (Family Table)</option>
              <option value="8">8 Guests (Large Group)</option>
              <option value="10+">10+ Guests (Celebration)</option>
            </select>
            <Users className="w-4 h-4 text-brand-brown/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Special Requests / Dietary Needs <span className="text-xs text-brand-brown-muted font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="High chair needed, corner booth preferred, birthday dinner, etc."
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm focus:bg-white focus:border-brand-orange transition-colors"
          />
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full font-bold shadow-warm-md"
        >
          Request a Table
        </Button>
        <p className="text-center text-xs text-brand-brown-muted mt-3">
          Our team will reach out promptly to confirm your booking. No pre-payment required.
        </p>
      </div>
    </form>
  );
}
