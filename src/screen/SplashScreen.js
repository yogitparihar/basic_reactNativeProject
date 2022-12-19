import React from "react";
import { View,StyleSheet,Image,ActivityIndicator} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = ({navigation})=>{
    const[animating, setAnimating] = useState(true)
    useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
          AsyncStorage.getItem('@isLogin').then(
            navigation.navigate('StackNavigation')
          )
        }, 2000);
      }, []);
    return(
        <View style={styles.container}>
            <Image
            source={require('../../assets/logo1.png')}
            style={{width: '90%', resizeMode: 'contain', margin: 30}}
            />
             <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            size="large"
            style={styles.activityIndicator}
             />
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
      },
      activityIndicator: {
        alignItems: 'center',
        height: 80,
      },
})
export default SplashScreen;