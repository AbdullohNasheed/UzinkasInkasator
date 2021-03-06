import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  direction2Container: {
    flex: 1,
    backgroundColor: '#242531',
    borderRadius: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  box: {
    height: 120,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#2b2c36',
    borderRadius: 12,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: -2,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 20,
  },
});
