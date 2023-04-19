import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInputPropsStyle: {
    placeholderTextColor: '#5d5d5d',
  },
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 12,
    left: 12,
    right: 12,
  },
});

const googlePlacesStyles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  textInput: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  listView: {
    backgroundColor: 'transparent',
  },

  description: {color: 'black'},
});

export {styles, googlePlacesStyles};
