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
    
    private centralesLayerGroup = L.layerGroup([
        circle([ 42.25, 9.03 ], { radius: 1000, color: "#FFB800"}),
        circle([ 42.17, 9.26 ], { radius: 1000, color: "#FFB800" }),
        circle([ 42.42, 9.02 ], { radius: 1000, color: "#FFB800" }),
        circle([ 42.34, 9.46 ], { radius: 1000, color: "#CC0000" }),
        circle([ 42.56, 9.1 ], { radius: 1000 , color: "#00FF12"}),
        circle([ 41.97, 8.96 ], { radius: 1000 , color: "#00FF12" }),
        circle([ 42.17, 8.76 ], { radius: 1000 , color: "#00FF12"}),
        circle([ 41.87, 9.06 ], { radius: 1000 , color: "#00FF12"}),
        circle([ 41.77, 9.06 ], { radius: 1000 , color: "#00FF12"}),
        circle([ 41.77, 9.26 ], { radius: 1000 , color: "#00FF12"}),
        circle([ 41.67, 9.36 ], { radius: 1000 , color: "#00FF12"}),
        circle([ 41.57, 9.0 ], { radius: 1000,  color: "#CC0000"  })
        
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
        overlays: {
            'Centrales': this.centralesLayerGroup,
            'Post-Sources': polygon([[ 42.1, 9.1 ], [ 46.9, 10.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]]),
            
        }
    }



}
