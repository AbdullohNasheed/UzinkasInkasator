import {Dimensions, Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  allContainer: {
    flex: 1,
    // alignItems: "center",
  },
  imageInkass: {
    width: Dimensions.get('window').width - 210,
    height: Dimensions.get('window').width - 230,
    marginVertical: 35,
  },
  buttonBox: {
    borderWidth: 1,
    borderColor: 'rgba(0, 152, 153, 1)',
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    marginVertical: 16,
    color: 'rgba(0, 152, 153, 1)',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  buttonContainer: {
    marginVertical: 60,
  },
});
