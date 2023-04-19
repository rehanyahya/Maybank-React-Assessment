import React from 'react';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles, googlePlacesStyles} from './styles';

const CustomGooglePlacesAutocomplete = ({
  placeholder,
  onPress,
  predefinedPlaces,
}) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        textInputProps={styles.textInputPropsStyle}
        predefinedPlaces={predefinedPlaces}
        onPress={onPress}
        styles={googlePlacesStyles}
        query={{
          key: 'AIzaSyDEe3YQkQCdce6ykBRPFYr-XaqTjca3efc',
          language: 'en',
        }}
      />
    </View>
  );
};

export default CustomGooglePlacesAutocomplete;
