
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types, no-unused-vars
const AnyReactComponent = ({ text }) => <div><FaMapMarkerAlt className='text-red-600 text-6xl' />
</div>;

const GoogleMap = () => {
   const googleApiKey =import.meta.env.VITE_APP_GOOGLE_API_KEY;
  const defaultProps = {
    center: {
      lat: 23.800060015011738,
      lng: 90.37185609282587
    },
    zoom: 15
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}  
         
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
