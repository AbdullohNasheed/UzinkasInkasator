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
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#242531',
    elevation: Platform.OS === 'ios' ? 0.5 : 10,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.2,
    marginVertical: 100,
  },
});
