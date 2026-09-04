'use client';

import React, { useState } from 'react';
import { Button } from '@/ui/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { locationsConfig } from '@/config/locations';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    outlet: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please write your message or inquiry.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate clean submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please reach out to us via direct phone call.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 border border-brand-green/30 shadow-warm-md text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-14 h-14 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-brand-brown">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-brand-brown-muted max-w-sm mx-auto leading-relaxed">
          Thank you, {formData.name}. Our restaurant team will contact you shortly regarding your message.
        </p>
        <Button
          onClick={() => {
            setStatus('idle');
            setFormData({ name: '', phone: '', email: '', outlet: 'general', message: '' });
          }}
          variant="outline"
          size="sm"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-md space-y-5"
    >
      <div>
        <h3 className="font-serif text-2xl font-bold text-brand-brown">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-brand-brown-muted mt-1">
          Have catering questions, feedback, or special requests? Drop us a note.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Your Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm focus:bg-white focus:border-brand-orange transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
              Phone Number <span className="text-brand-orange">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm focus:bg-white focus:border-brand-orange transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
              Email Address <span className="text-xs text-brand-brown-muted font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm focus:bg-white focus:border-brand-orange transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Inquiring About Outlet
          </label>
          <select
            value={formData.outlet}
            onChange={(e) => setFormData({ ...formData, outlet: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm focus:bg-white focus:border-brand-orange transition-colors"
          >
            <option value="general">General Inquiry</option>
            {locationsConfig.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name} ({loc.area})
              </option>
            ))}
            <option value="catering">Party / Event Catering</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
            Message <span className="text-brand-orange">*</span>
          </label>
          <textarea
            required
            rows={4}
            placeholder="How can our restaurant team help you today?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-brand-brown/20 bg-brand-cream-card text-brand-brown text-sm focus:bg-white focus:border-brand-orange transition-colors"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        isLoading={isSubmitting}
        leftIcon={<Send className="w-4 h-4" />}
        className="w-full"
      >
        Send Inquiry
      </Button>
    </form>
  );
}
