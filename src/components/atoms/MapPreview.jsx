import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapPreview = ({ mapData }) => {
    const indiaCenter = [20.5937, 78.9629]; // Center coordinates for India
    const indiaZoomLevel = 5; // Zoom level to show the entire country

    // Set up custom icon for Leaflet marker
    const customIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl:
            'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    useEffect(() => {
        // Fix Leaflet marker icon path for React
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconUrl:
                'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            iconRetinaUrl:
                'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        });
    }, []);

    return (
        <div className="map-container bg-gray-200 h-96">
            <MapContainer
                center={indiaCenter}
                zoom={indiaZoomLevel}
                className="w-full h-full"
            >
                <TileLayer url="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {mapData.map((mapDatum) => (
                    <Marker
                        key={mapDatum.id}
                        position={[mapDatum.lat, mapDatum.lon]}
                        icon={customIcon}
                    >
                        <Popup>
                            <div className="map-event-popup">
                                <h3 className="map-event-popup__title">
                                    {mapDatum.label}
                                </h3>
                                <div className="map-event-popup__date">
                                    {mapDatum.date_string}
                                </div>
                                <div className="map-event-popup__location">
                                    {mapDatum.readable_city}
                                </div>
                                <a
                                    className="map-event-popup__link"
                                    href={mapDatum.details_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Show Details
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapPreview;
