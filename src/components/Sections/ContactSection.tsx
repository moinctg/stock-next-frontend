'use client'
import { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load Google Maps
    const loadScript = (src: string) => {
      return new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true; // Load script asynchronously
        script.onload = () => {
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 23.8103, lng: 90.4125 }, // Coordinates for Dhaka, Bangladesh
        zoom: 12,
      });

      new window.google.maps.Marker({
        position: { lat: 23.8103, lng: 90.4125 },
        map,
        title: "Our Location",
      });
    };

    loadScript(`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`)
      .then(() => {
        window.initMap = initMap; // Define initMap in the window context
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="border border-gray-300 p-2 w-full rounded" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="border border-gray-300 p-2 w-full rounded" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="border border-gray-300 p-2 w-full rounded" rows={4} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <div id="map" className="h-64 rounded-t-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
