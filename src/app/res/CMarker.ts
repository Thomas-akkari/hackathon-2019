import {tileLayer, latLng, marker, circle, polygon} from 'leaflet';
import * as L from 'leaflet';

class CMarker {
    cmarker;
    tags : string[];
    etat;
    markerIconUrl = "../../assets/icons/icon-72x72.png";
    constructor(position,tagListe: string[],etat) {
        this.cmarker = marker(position, {
            icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: this.markerIconUrl //todo
            }) 
        });
        
    }
    
}