'use client'
import React, {useEffect, useRef, useState} from 'react'
// বুঝলাম না এনভাইরন্টাল মেন্ট ভেরিয়েবল থেকে কেনো এক্সেস করা যাচ্ছে না । এখানে কেনো এক্সপোর্ট করা হয়নি । এক্সপোর্ট করলে এক্সেস করা যাবে ।
const apiKey=  `AIzaSyBu6ihYSZ2gs-kMcCc2SBiB59GcbHO-LJk` //process.env.VITE_APP_GMAP_API_KEY ;
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

// load google map api js
function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src,
    });
    script.addEventListener('load', () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place) => {
  const address = {
    city: '',
    state: '',
    zip: '',
    country: '',
    plain() {
      const city = this.city ? this.city + ', ' : '';
      const zip = this.zip ? this.zip + ', ' : '';
      const state = this.state ? this.state + ', ' : '';
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes('locality')) {
      address.city = value;
    }

    if (types.includes('administrative_area_level_2')) {
      address.state = value;
    }

    if (types.includes('postal_code')) {
      address.zip = value;
    }

    if (types.includes('country')) {
      address.country = value;
    }
  });

  return address;
};

function App({ onStateChange ,cls}) {
  const searchInput = useRef(null);
  const [address, setAddress] = useState({});
  const [location, setLocation] = useState('');

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  // const onChangeAddress = (autocomplete) => {
  //   const place = autocomplete.getPlace();
  //    const suggestion = place.formatted_address;
  //   onStateChange(suggestion);
  //   const _address = extractAddress(place);
  //   setAddress(_address);
  //   const fullAddress = _address.plain();
  //   setLocation(fullAddress);
  //   //onStateChange(fullAddress); // Send the full address to the parent component
   
  // };
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    const suggestion = place.formatted_address;
    setLocation(suggestion);
    // Pass the full suggestion to the parent component
    onStateChange(suggestion);
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    //autocomplete.setFields(['address_component', 'geometry']);
    // Configure Autocomplete to only retrieve formatted address
    autocomplete.setFields(['formatted_address']);
    autocomplete.addListener('place_changed', () => onChangeAddress(autocomplete));
  };

  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    searchInput.current.value = 'Getting your location...';
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const _address = extractAddress(place);
        setAddress(_address);
        const fullAddress = _address.plain();
        setLocation(location.results[0]);
       // onStateChange(place); // Send the full address to the parent component
        searchInput.current.value = fullAddress;
      });
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
  }, []);

  return (
    <div className="App">
      <input className={cls} ref={searchInput} type="text" placeholder="Search location...." />
      {/* <button onClick={findMyLocation}>Insert my location </button>
      <h1> {location || 0} </h1> */}
    
    </div>
  );
}

export default App;