import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  scrollContainer: {
    backgroundColor: '#242531',
    borderRadius: 30,
    flex: 1,
  },
  dropDown: {},
  loading: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    // marginHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 100,
    borderRadius: 10,
    backgroundColor: '#242531',
    elevation: 10,
    marginVertical: 30,
    top: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    zIndex: -1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    width: 130,
  },
  buttonBox: {
    flex: 0.7,
  },
  button: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownBox: {
    marginTop: 10,
    zIndex: 3000,
    marginHorizontal: 20,
  },
  dropDownBoxTwo: {
    zIndex: 2000,
    marginTop: 20,
    marginHorizontal: 20,
  },
  dropDownBoxThree: {
    zIndex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  style1: {
    backgroundColor: '#009899',
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  style2: {
    backgroundColor: '#1a333d',
    borderWidth: 1,
    borderColor: '#009899',
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  style1Text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  style2Text: {
    color: '#3f545d',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
