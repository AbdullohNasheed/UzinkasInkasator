import {Dimensions, Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  allContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: "center",
  },
  // imageInkass: {
  //   // width: Dimensions.get('window').width - 210,
  //   // height: Dimensions.get('window').width - 230,
  //   width: 130,
  //   height: 130,
  //   marginVertical: 35,
  // },
  buttonBox: {
    borderWidth: 1,
    borderColor: 'rgba(0, 152, 153, 1)',
    marginHorizontal: 10,
    marginBottom: -60,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent:'center',
    height: 55,

  },
  buttonText: {
    color: 'rgba(0, 152, 153, 1)',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 50,
  },
  buttonContainer: {
    marginVertical: 60,
  },
  errorText:{
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
});
