// types/global.d.ts

interface Google {
    maps: {
      Map: any; // You can specify the exact type if you want to be more specific
      Marker: any;
      // Add other properties you might use from google.maps
    };
  }
  
  declare global {
    interface Window {
      google: Google;
    }
  }
  