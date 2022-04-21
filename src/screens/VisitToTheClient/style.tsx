import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#242531',
    borderRadius: 30,
  },
  scrollBox: {
    marginHorizontal: 15,
    height: '50%',
    justifyContent: 'space-between',
  },
  buttonBox: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 152, 153, 1)',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
  },
  nameBox: {
    backgroundColor: '#181926',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  nameText: {},
});
