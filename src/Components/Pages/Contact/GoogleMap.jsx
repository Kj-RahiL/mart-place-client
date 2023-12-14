import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );
const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 22.79564,
          lng: 91.19892
        },
        zoom: 11
      };
    return (
        <div className='shadow-md' style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAr_IpRxExZ3fSvZarim4aNHXEyGOsT8pc" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={22.79564}
            lng={91.19892}
            text="My House"
          />
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMap;