import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Sparkles, Globe, TrendingUp, Camera, Zap, Check, Gift, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackagePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PackagePopup: React.FC<PackagePopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 border-0 text-white overflow-hidden p-0">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative z-10 p-6 md:p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-bounce">
              <Gift className="w-4 h-4" />
              LIMITED TIME OFFER
              <Sparkles className="w-4 h-4" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
                50% FLAT OFF
              </span>
            </h2>
            <p className="text-gray-300 text-lg">On All Our Premium Services!</p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Web Development Package */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Website Development</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Custom Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>SEO Optimized Structure</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Mobile First Approach</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>1 Month Free Support</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">$2,999</span>
                <span className="text-2xl font-bold text-green-400">$1,499</span>
              </div>
            </div>

            {/* SEO Package */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 relative overflow-hidden">
              <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 text-xs">
                MOST POPULAR
              </Badge>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO Dominance</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Complete SEO Audit</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Keyword Research & Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>On-Page Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Monthly Reporting</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">$999/mo</span>
                <span className="text-2xl font-bold text-green-400">$499/mo</span>
              </div>
            </div>

            {/* Social Media Package */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-pink-400/50">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-400 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Social Media Growth</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>15 Posts per Month</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>4 Reels per Month</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Content Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Engagement Management</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">$799/mo</span>
                <span className="text-2xl font-bold text-green-400">$399/mo</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <Link to="/schedule-meeting">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={onClose}
              >
                <Zap className="w-5 h-5 mr-2" />
                Claim Your 50% Discount Now!
              </Button>
            </Link>
            <p className="text-gray-400 text-sm">
              Limited slots available. Offer ends soon! 🔥
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackagePopup;
