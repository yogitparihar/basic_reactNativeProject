import React from "react";
import { View,StyleSheet,Text} from "react-native";
const LocationScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>Loaction</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    }
})
export default LocationScreen;