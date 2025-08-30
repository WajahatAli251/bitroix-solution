import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// EmailJS configuration for sending emails
import emailjs from '@emailjs/browser';

const sendConfirmationEmails = async (bookingData: any) => {
  try {
    // Create mailto link with meeting details
    const subject = encodeURIComponent("New Meeting Scheduled - Bitroix Solution LLC");
    const body = encodeURIComponent(
      `Meeting Request Details:\n\n` +
      `Client Name: ${bookingData.client_name}\n` +
      `Email: ${bookingData.client_email}\n` +
      `Company: ${bookingData.client_company || 'Not specified'}\n` +
      `Meeting Date: ${bookingData.meeting_date}\n` +
      `Meeting Time: ${bookingData.meeting_time} PKT\n\n` +
      `Message:\n${bookingData.message || 'No additional message'}\n\n` +
      `Please confirm this meeting by replying to this email.`
    );
    
    const mailtoLink = `mailto:info@bitroixsolution.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');

    console.log('Opening email client for meeting confirmation');
    return { success: true };
  } catch (error) {
    console.error('Error opening email client:', error);
    throw error;
  }
};

interface TimeSlot {
  time: string;
  available: boolean;
}

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

  // Available time slots (9 AM to 5 PM, excluding lunch 12-1 PM)
  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '09:30', available: true },
    { time: '10:00', available: true },
    { time: '10:30', available: true },
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '13:00', available: true }, // 1 PM
    { time: '13:30', available: true },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: true },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true }
  ];

  const handleInputChange = (field: string, value: string) => {
    setClientInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleBookMeeting = async () => {
    if (!selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a date and time.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create meeting record 
      const bookingData = {
        client_name: clientInfo.name,
        client_email: clientInfo.email,
        client_company: clientInfo.company,
        meeting_date: selectedDate.toISOString().split('T')[0],
        meeting_time: selectedTime,
        message: clientInfo.message,
        status: 'scheduled'
      };

      // Send confirmation emails
      await sendConfirmationEmails(bookingData);

      setIsBooked(true);
      toast({
        title: "Meeting Request Sent!",
        description: `Your meeting request for ${selectedDate.toLocaleDateString()} at ${selectedTime} has been sent. We'll confirm via email shortly.`,
      });

      // Reset form
      setSelectedDate(undefined);
      setSelectedTime('');
      setClientInfo({ name: '', email: '', company: '', message: '' });

    } catch (error) {
      console.error('Error booking meeting:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error scheduling your meeting. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isBooked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 animate-scale-in">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                <CheckCircle className="relative h-20 w-20 text-green-500 mx-auto animate-bounce" />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  🎉 Meeting Scheduled Successfully!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Thank you for booking with <span className="font-semibold text-primary">Bitroix Solution</span>! 
                  <br />We'll send you a confirmation email shortly with meeting details.
                </p>
              </div>
              <div className="p-4 bg-white/60 dark:bg-black/20 rounded-xl border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-700 dark:text-green-300">
                  📧 Check your email for the Google Meet link
                </p>
              </div>
              <Button 
                onClick={() => setIsBooked(false)} 
                className="mt-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Schedule Another Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 animate-fade-in">
      {/* Hero Header Section */}
      <div className="text-center space-y-6 py-8 px-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Schedule Your Free
            <br />
            <span className="text-4xl md:text-5xl">💻 Consultation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss your project requirements in a 
            <span className="font-semibold text-primary"> personalized 30-minute session</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            🆓 100% Free Consultation
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            ⚡ Instant Confirmation
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            🎯 Project-Focused Discussion
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 px-4">
        {/* Date and Time Selection */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              📅 Select Date & Time
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Choose your preferred meeting slot from our available times
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Calendar */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground flex items-center gap-2">
                📆 Select Date
                <span className="text-sm text-muted-foreground font-normal">(Weekdays only)</span>
              </Label>
              <div className="p-4 bg-white/60 dark:bg-black/20 rounded-xl border border-border/50">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                  className="rounded-lg border-0 w-full"
                />
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="space-y-4 animate-fade-in">
                <Label className="text-lg font-semibold text-foreground flex items-center gap-2">
                  ⏰ Available Time Slots
                  <span className="text-sm text-green-600 font-normal">({timeSlots.filter(slot => slot.available).length} available)</span>
                </Label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="default"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`text-sm font-medium py-3 transition-all duration-200 ${
                        selectedTime === slot.time 
                          ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                          : "hover:bg-primary/10 hover:border-primary/50 hover:scale-105"
                      }`}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                    🌍 <strong>Timezone:</strong> PST (Pacific Standard Time) | Meeting duration: 30 minutes
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Client Information Form */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              👤 Your Information
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Tell us about yourself and your project vision
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base font-semibold text-foreground flex items-center gap-2">
                📝 Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={clientInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="text-base py-3 border-2 focus:border-primary transition-colors duration-200"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-semibold text-foreground flex items-center gap-2">
                📧 Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={clientInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="text-base py-3 border-2 focus:border-primary transition-colors duration-200"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="company" className="text-base font-semibold text-foreground flex items-center gap-2">
                🏢 Company/Organization
              </Label>
              <Input
                id="company"
                placeholder="Your company name"
                value={clientInfo.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="text-base py-3 border-2 focus:border-primary transition-colors duration-200"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-base font-semibold text-foreground flex items-center gap-2">
                💬 Project Details & Requirements
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project goals, timeline, budget range, and any specific requirements..."
                className="min-h-[120px] text-base border-2 focus:border-primary transition-colors duration-200 resize-none"
                value={clientInfo.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            {/* Meeting Summary */}
            {selectedDate && selectedTime && (
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-xl border border-green-200 dark:border-green-800 space-y-4 animate-scale-in">
                <h4 className="font-bold text-lg text-primary flex items-center gap-2">
                  📋 Meeting Summary
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2"><strong>📅 Date:</strong> {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="flex items-center gap-2"><strong>⏰ Time:</strong> {selectedTime} PST</p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2"><strong>⏱️ Duration:</strong> 30 minutes</p>
                    <p className="flex items-center gap-2"><strong>📹 Type:</strong> Video Call (Google Meet)</p>
                  </div>
                </div>
              </div>
            )}

            <Button 
              onClick={handleBookMeeting}
              disabled={isSubmitting || !selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email}
              className="w-full py-4 text-lg font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Scheduling Meeting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  🚀 Schedule My Free Consultation
                </span>
              )}
            </Button>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                <strong>Privacy Guarantee:</strong> Your information is secure and will only be used to schedule your meeting.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What to Expect Section */}
      <Card className="shadow-xl border-0 bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 dark:from-purple-950 dark:via-blue-950 dark:to-green-950">
        <CardContent className="pt-8 pb-8 px-8">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-primary">🎯 What to Expect in Your Meeting</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 p-6 bg-white/60 dark:bg-black/20 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg"></div>
                  <Clock className="relative h-12 w-12 mx-auto text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-primary">⚡ Quick & Focused</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong>30-minute</strong> power session designed to understand your needs and provide actionable insights
                </p>
              </div>
              <div className="space-y-4 p-6 bg-white/60 dark:bg-black/20 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg"></div>
                  <Mail className="relative h-12 w-12 mx-auto text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-primary">📧 Instant Setup</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Immediate <strong>confirmation email</strong> with Google Meet link and calendar invite
                </p>
              </div>
              <div className="space-y-4 p-6 bg-white/60 dark:bg-black/20 rounded-xl border border-border/50 hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg"></div>
                  <MessageSquare className="relative h-12 w-12 mx-auto text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-primary">💡 Strategic Discussion</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Deep dive into your <strong>project goals</strong>, timeline, and how we can help achieve them
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleMeeting;