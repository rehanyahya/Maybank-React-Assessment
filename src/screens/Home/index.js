import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';
import CustomGooglePlacesAutocomplete from '../../components/CustomGooglePlacesAutocomplete';
import {locationActions} from '../../store/searchedLocations';

let initialPosition = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};

const Home = () => {
  const dispatch = useDispatch();
  const mapViewRef = useRef();

  const [position, setPosition] = useState(initialPosition);
  const searchedLocations = useSelector(state => state.locationReducer);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(pos => {
      setCurrentPosition(pos.coords);
    });
  };

  const setCurrentPosition = coords => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    });
  };

  const animateMapCameraToPosition = _position => {
    mapViewRef.current.animateCamera({
      center: _position,
      pitch: 0,
      heading: 0,
      altitude: 1000,
      zoom: 16,
    });
  };

  const getGooglePlacesSearch = (data, details = null) => {
    const coords = {
      latitude: details?.geometry?.location.lat ?? initialPosition.latitude,
      longitude: details?.geometry?.location.lng ?? initialPosition.longitude,
    };
    setCurrentPosition(coords);
    animateMapCameraToPosition(coords);
    dispatch(
      locationActions.setLocation({
        type: 'favorite',
        description: data?.description ?? '',
        geometry: {
          location: {
            lat: details?.geometry?.location.lat ?? initialPosition.latitude,
            lng: details?.geometry?.location.lng ?? initialPosition.longitude,
          },
        },
      }),
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View style={styles.container}>
      <CustomGooglePlacesAutocomplete
        placeholder="Enter Location"
        onPress={getGooglePlacesSearch}
        predefinedPlaces={searchedLocations.locations}
      />
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onMapLoaded={() => animateMapCameraToPosition(position)}
        initialRegion={initialPosition}>
        <Marker coordinate={position} />
      </MapView>
    </View>
  );
};

export default Home;
