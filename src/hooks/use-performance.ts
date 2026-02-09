import { useEffect, useCallback } from 'react';

/**
 * Custom hook to defer non-critical operations
 * Uses requestIdleCallback for better performance
 */
export const useDeferredLoad = (callback: () => void, timeout = 2000) => {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(callback, { timeout });
      return () => (window as any).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(callback, 100);
      return () => clearTimeout(timer);
    }
  }, [callback, timeout]);
};

/**
 * Check if connection is slow
 */
export const useSlowConnection = () => {
  const connection = (navigator as any).connection;
  return connection && (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g');
};

/**
 * Preload critical resources
 */
export const usePreloadResources = (resources: { href: string; as: string; type?: string }[]) => {
  useEffect(() => {
    resources.forEach(({ href, as, type }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      document.head.appendChild(link);
    });
  }, [resources]);
};

/**
 * Report Web Vitals to analytics
 */
export const useWebVitals = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          if (lastEntry && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'LCP',
              metric_value: Math.round(lastEntry.startTime),
            });
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // FID Observer  
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'FID',
                metric_value: Math.round(entry.processingStart - entry.startTime),
              });
            }
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // CLS Observer
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (e) {
        // PerformanceObserver not supported
      }
    }
  }, []);
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
