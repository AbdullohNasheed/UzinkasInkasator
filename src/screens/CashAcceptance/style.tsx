import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  DirictionContaienr: {
    flex: 1,
    backgroundColor: '#242530',
    borderRadius: 30,
  },
  dataContainer: {
    flexDirection: 'row',
  },
  dataBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#181926',
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  scrollContainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#242530',
  },
  timeDateBox: {
    flexDirection: 'row',
    marginVertical: 10,
    marginTop: 30,
  },
  dateTimeText: {
    fontSize: 15,
    // color: '#3E3E3E',
    color: '#fff',
  },
  iconBox: {
    marginVertical: 13,
    marginHorizontal: 15,
  },
  text: {
    marginHorizontal: 13,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009899',
    marginVertical: 10,
  },
  boxData: {
    flex: 1,
  },
  fotterBox: {
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 12,
    backgroundColor: '#181926',
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 10,
  },
  fotterText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonBox: {
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: 55,
    marginHorizontal: 15,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: ' rgba(0, 152, 153, 1)',
    marginVertical: 15,
  },
  textInput: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009899',
    marginHorizontal: 20,
  },
});
