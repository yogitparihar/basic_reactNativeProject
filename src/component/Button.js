import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity,StyleSheet} from "react-native";
const Button = ({onPress,text})=>{
    return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <LinearGradient colors={['#34F5C5','#1DCDFE','aqua']} style={styles.gradient} >
            <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>{text}</Text>
        </LinearGradient>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        marginTop:30,
        height:50,
        width:300,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:4
      },
})
export default Button;