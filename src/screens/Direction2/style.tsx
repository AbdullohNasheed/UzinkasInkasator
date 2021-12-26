import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor:'#181926',
   },
   direction2Container:{
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
       marginHorizontal: 20,
       shadowColor: '#000',
       elevation: Platform.OS==='ios'? 0.5:10,
       shadowOpacity: 0.1,
       shadowRadius: 20,
       backgroundColor:'#242531',
       borderRadius: 12,
       marginVertical: 15,
   },
})