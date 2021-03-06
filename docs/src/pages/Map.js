import React from 'react'; 
import { Map, GoogleApiWrapper, Marker, InfoWindow  } from 'google-maps-react';
import { Wrapper} from "@googlemaps/react-wrapper";
// remove google maps api 

import {observer} from 'mobx-react';
import Information from '../Information/Info';
import Card from '../components/Card';




const api_Key = 'AIzaSyCVqBK1RQ9LAUR8CspSF2axRU-6MVNThu8';

  let newCoord = [];

class MapContainer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            fields: {},
            currentLocation: {},
            lat: '', 
            longitude: ''
        }
    }
    async componentDidMount() {
        const { lat, lng } = await this.getcurrentLocation();
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location: {
              lat,
              lng
            }
          },
          currentLocation: {
            lat,
            lng
          }, 
          showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
        }));
        
      }

    
       getcurrentLocation() {
        if (navigator && navigator.geolocation) {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              resolve({
                lat: coords.latitude,
                lng: coords.longitude
              });
            });
          });
        }
        return {
          lat: 0,
          lng: 0
        };
      }

      
      async sendData() {
        try {
            let res = await fetch(`http://54.176.8.164:443/?lat=${JSON.stringify(Information["pos"][0]["lat"]())}&lon=${JSON.stringify(Information["pos"][0]["lng"]())}`, {
              method: 'post',
              mode: 'no-cors', 
              headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
              }, 
              body: JSON.stringify(newCoord, null, 2)
            });
            let result = await res.json();
          
            
            

        } 
        catch(e) {
          console.log(e);
        }
      }

      
      addMarker = (location, map) => {
        
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location
          }
        }));

        
          JSON.stringify(newCoord.push(location)) 
        
        if(newCoord.length === 2) {
          console.log(Information);
          Information["pos"] = newCoord;
          console.log(JSON.stringify(Information ) )
          console.log(JSON.stringify(Information["pos"][0])  )
          console.log("TESTING")
          console.log(JSON.stringify(Information["pos"][0]["lat"]()))
          
          this.sendData();
          
          
        }
      //  console.log(JSON.stringify(newCoord, null, 2));
        map.panTo(location);
      };
      
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };


    setInputValue(property, val) {
        
        if (val.length > 100) {
          return; //checks the values length to see how long it is
        }
        this.setState({
          [property]: val // [property] can be reused since we are changing it in the state
        })
      }
      

    render() {
            return (newCoord.length < 2 ? 
            <div className='container py-5' id='wrapper'> 
                       <h2>Click on two small points on the map</h2>
     <Wrapper apiKey={api_Key}>
     <Map
           google={this.props.google}
           style={{
             width: "40%",
             height: "50%"
           }}
           initialCenter={this.state.fields.location}
           center={this.state.fields.location}
           zoom={14}
           onClick={(t, map, c) => {
             this.addMarker(c.latLng, map)}}
         >
           <Marker position={this.state.fields.location} />
         </Map>
             </Wrapper>
         </div> 
         : 
         <div className='container py-5' id='wrapper'>
           <h2>Take a look at it</h2>
           <Wrapper apiKey={api_Key}>
              <Map
              google={this.props.google}
              style={{
                width: "40%",
                   height: "50%"
                  }}
               initialCenter={this.state.fields.location}
              center={this.state.fields.location}
              zoom={14}
              onClick={(t, map, c) => {
              this.addMarker(c.latLng, map)}}
         >
 
           <Marker position={Information.pos[0]} title={'The marker`s title will appear as a tooltip.'}
    onClick={this.onMarkerClick} 
    />
         <Marker position={Information.pos[1]} title={'The marker`s title will appear as a tooltip.'} 
    onClick={this.onMarkerClick} 
    />
    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div >
              <h6 className='text-dark'>Latitude: {Information['pos'][0]['lat']()}</h6>
              <h6 className='text-dark'>Longitude: {Information['pos'][0]['lat']()}</h6>
              <p className='text-dark'>Wind Speed: </p>
              <p className='text-dark'> </p>
              
            </div>
        </InfoWindow>
         </Map>
             </Wrapper>
           
                  


         </div> 
                
            )
        

    }


}





export default observer(GoogleApiWrapper({
    apiKey: api_Key
  })(MapContainer));


/**
 * 
 *  <Marker position={Information.pos[1]} />
           <Marker position={Information.pos[3]} />
           <Marker position={Information.pos[4]} />
         
 */

  /**
   * 
   * <div id='second'>     
                    <h3 className='text-light w-50'>North West</h3>
                    <InputField
                        type='text-light'
                        placeholder='North West Coord.'
                        onChange={(val) => { this.setInputValue('long', val)} }
                        />
                </div>
   */

                /**
                 *      
                 */