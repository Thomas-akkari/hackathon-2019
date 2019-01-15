import { Component, OnInit } from '@angular/core';
import {tileLayer, latLng, marker, circle, polygon} from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    markerIconUrl = "../../assets/icons/icon-72x72.png";
    options = {
	   layers: [
		  tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	   ],
	   zoom: 8,
	   center: latLng(42.179966, 9.06909)
    };
    
    private centralLayerGroup = L.layerGroup([marker([42.17, 9.06],{
            icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: this.markerIconUrl
            })
        }),marker([42.17, 9.16],{
            icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: this.markerIconUrl
            })
        })
    ])
    
    constructor() { }

    ngOnInit() {
        
    }
    
    addCentral(position, etat, users, tags, puissance){
        var marker = marker([42.17, 9.16],{
            icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: this.markerIconUrl
            })
        });
        marker.tag = ["spirit","smash"];
        this.centralLayerGroup.addLayer(marker)
    }
   
  
    
    
    
    layersControl = {
        baseLayers: {
            'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
            'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        },
        overlays: {
            'Big Circle': circle([ 42.17, 9.06 ], { radius: 5000 }),
            'Big Square': polygon([[ 42.1, 9.1 ], [ 46.9, 10.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]]),
            'Marker': marker([42.17, 9.06],{
            icon: L.icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: this.markerIconUrl
                })   
            }),
            'Test' : this.centralLayerGroup
        }
    }



}
