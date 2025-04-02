import { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import {OrbitProgress} from "react-loading-indicators"
import { MapPinned } from 'lucide-react';
import { ClipLoader } from 'react-spinners';



let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LatLong {
  lat: number;
  lng: number;
}

interface PositionProps {
  position: LatLong | null;
  setPosition: (position: LatLong) => void;
}

// This component handles the map click events
function LocationMarker({ position, setPosition }: PositionProps) {
  //const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
  
  const map = useMapEvents({
    click(e) {
      const latlong = e.latlng;
      const lat = Number(latlong.lat.toFixed(2));
      const lng = Number(latlong.lng.toFixed(2));
      setPosition({lat, lng});
      console.log(`New position: ${lat}, ${lng}`);
    }
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Latitude: {position.lat.toFixed(6)}<br />
        Longitude: {position.lng.toFixed(6)}
      </Popup>
    </Marker>
  );
}

function getCurrentLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(`Current position: ${lat}, ${lng}`);
    });
  }
}

function Map({ position, setPosition }: any) {
    const mapRef = useRef<any>(null); // Use useRef to hold the map instance
    const [loadingState, setLoadingState] = useState(false);
    const getCurrentLocation = () => {
        setLoadingState(true);
        if (navigator.geolocation) {
            setTimeout(() => {
                navigator.geolocation.getCurrentPosition(
                    (userPosition) => {
        
                            
                      const lat = Number(userPosition.coords.latitude.toFixed(2));
                      const lng = Number(userPosition.coords.longitude.toFixed(2));
                      setPosition({ lat, lng });
                      console.log(`Current position: ${lat}, ${lng}`);
                      setLoadingState(false);
                      
        
                      // Access the map instance and set the new center
                      if (mapRef.current) {
                        mapRef.current.flyTo([lat, lng], 9); // You can adjust the zoom level (13) as needed
                      }
                    },
                    (error) => {
                      console.error("Error getting location:", error);
                      setLoadingState(false);
                      // Handle error appropriately, e.g., display an error message to the user
                    }
                  );
            }, 150);
         
        } else {
          console.error("Geolocation is not supported by this browser.");
          // Handle the case where geolocation is not supported
        }
      };

      function MapComponent() {
        const map = useMap();
        mapRef.current = map; // Assign the map instance to the ref
        return null; // This component doesn't render anything
      }

  return (
    
    <Card className=' border-none '>
        <p className="text-xs font-light my-1 ">
            Click on the map to place a marker or use button to get your current location
        </p>
        {/* {loadingState ? (
            <div className='flex items-center justify-center'>
                <OrbitProgress size="small"  text= "Finding" color="teal" />
            </div>
        ) :( 
            <button 
            className="h-6 px-4 my-3 text-sm text-teal-100 transition-colors duration-150 bg-teal-600 rounded-lg focus:outline-none hover:bg-teal-800 flex items-center justify-center" 
            onClick={getCurrentLocation}
        >
            {loadingState ?(
                <OrbitProgress size="small"  text= "Finding" color="teal" />
            ): <MapPinned className="h-4 w-4 mr-2" />
            }
            <MapPinned className="h-4 w-4 mr-2" />
            Get Current Location
        </button>
        )

        } */}
         <button 
            className="h-6 px-4 my-3 text-sm text-teal-100 transition-colors duration-150 bg-teal-600 rounded-lg focus:outline-none hover:bg-teal-800 flex items-center justify-between" 
            onClick={getCurrentLocation}
        >
            {loadingState ?(
                <ClipLoader size={21} color='white' className='mr-2'/>
            ): <MapPinned className="h-4 w-4 mr-2" />
            }
            Get Current Location
        </button>
    <div style={{ height: "380px", width: "100%" }}>
        
      <MapContainer 
        center={[position.lat, position.lng]} 
        zoom={5} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker position={position} setPosition={setPosition} />
        <MapComponent /> 
        
      </MapContainer>
      
    </div>
    
    </Card>
    
  );
}

export default Map;