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

// Temporary simulation - in production this would connect to your Supabase instance
const simulateBooking = async (bookingData: any) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate success (in real app, this would save to Supabase)
  console.log('Meeting booked:', bookingData);
  return { success: true };
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

      const result = await simulateBooking(bookingData);

      setIsBooked(true);
      toast({
        title: "Meeting Scheduled!",
        description: `Your meeting is confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime}. We'll send you a confirmation email shortly.`,
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
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-green-700">Meeting Scheduled!</h3>
            <p className="text-muted-foreground">
              Thank you for booking a meeting with us. You'll receive a confirmation email shortly with all the details.
            </p>
            <Button 
              onClick={() => setIsBooked(false)} 
              className="mt-4"
            >
              Schedule Another Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Schedule a Meeting</h2>
        <p className="text-muted-foreground text-lg">
          Book a free consultation to discuss your project requirements
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Date and Time Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Select Date & Time
            </CardTitle>
            <CardDescription>
              Choose your preferred meeting date and time slot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Calendar */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Select Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0 || 
                  date.getDay() === 6
                }
                className="rounded-md border"
              />
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <Label className="text-sm font-medium mb-3 block">Available Time Slots</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="sm"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className="text-xs"
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * All times are in PKT (Pakistan Standard Time)
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Client Information Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Your Information
            </CardTitle>
            <CardDescription>
              Tell us about yourself and your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={clientInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={clientInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                placeholder="Your company name"
                value={clientInfo.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project, requirements, or questions..."
                className="min-h-[100px]"
                value={clientInfo.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            {/* Meeting Summary */}
            {selectedDate && selectedTime && (
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <h4 className="font-medium">Meeting Summary</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Date:</strong> {selectedDate.toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {selectedTime} PKT</p>
                  <p><strong>Duration:</strong> 30 minutes</p>
                  <p><strong>Type:</strong> Video Call (Google Meet link will be provided)</p>
                </div>
              </div>
            )}

            <Button 
              onClick={handleBookMeeting}
              disabled={isSubmitting || !selectedDate || !selectedTime || !clientInfo.name || !clientInfo.email}
              className="w-full"
            >
              {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By scheduling this meeting, you agree to receive communication from Bitroix Solution
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Meeting Information */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Clock className="h-8 w-8 mx-auto text-primary" />
              <h4 className="font-medium">30 Minutes</h4>
              <p className="text-sm text-muted-foreground">Free consultation call</p>
            </div>
            <div className="space-y-2">
              <Mail className="h-8 w-8 mx-auto text-primary" />
              <h4 className="font-medium">Instant Confirmation</h4>
              <p className="text-sm text-muted-foreground">Email with meeting details</p>
            </div>
            <div className="space-y-2">
              <MessageSquare className="h-8 w-8 mx-auto text-primary" />
              <h4 className="font-medium">Project Discussion</h4>
              <p className="text-sm text-muted-foreground">Talk about your requirements</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleMeeting;