import React from 'react';
import {StyleSheet,Image, View,Text, ScrollView,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import Button from '../component/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Otp = ({navigation})=>{
  const [timer, setTimer] = useState(30);
  const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);
  console.log(timer);
  const resettimer =()=>{
    if(!timer){
      setTimer(30)
    }
  }
  return(
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.cont}>
        <AntDesign name="arrowleft" size={24} color="black" style={{paddingTop:70,marginLeft:30}}
          onPress={()=>navigation.goBack()}/>
        <Image style={{alignSelf:'center',marginTop:30}}
          source={require('../../assets/logo1.png')}
        />
        </View>
        <View style={{backgroundColor:'lightcyan'}}>
        <View style={styles.cont1}>
           <View style={styles.textcontainer}>
              <Text style={styles.text1}>Enter OTP</Text>
              <Text style={{marginTop:10,fontWeight:'400'}}>6 digit code has been sent to +1(208)555-0112</Text>
          </View>
          <View style={styles.textcontainer1}>
              <OTPInputView pinCount={6}
              codeInputFieldStyle={{borderWidth:0,borderBottomWidth:1,color:'black'}}
              />
          </View>
          <View style={styles.container1}>
             <Button />
          </View>
          <View style={{marginTop:15,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <Text>
              Don't receive the otp? 
            </Text>
            <Text style={{marginLeft:5,color:'black',fontWeight:'700'}}>
                00:{timer}
            </Text>
          </View>
          <View>
          <TouchableOpacity style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'#1DCDFE',fontSize:14,fontStyle:'normal',fontWeight:'500',textDecorationLine:'underline'}} 
            onPress={resettimer}>Resend OTP</Text>
            </TouchableOpacity>
          </View>

        </View>
        </View>
    </ScrollView>
    </View>
  )};
  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    cont:{
        height:250,
        backgroundColor:'lightcyan',
        borderBottomLeftRadius:50,
      },
    cont1:{
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius:50
      },
    textcontainer:{
      paddingHorizontal:40,
      marginTop:50
    },
    text1:{
      fontSize:23,
      fontStyle:'normal',
      fontWeight:"500",
    },
    textcontainer1:{
      flex:1,
      paddingHorizontal:40,
      flexDirection:'row',
      marginTop:20
    },
    input:{
      flex:1,
      fontStyle:'normal',
      fontWeight:'bold',
      fontSize:15,
      borderBottomWidth:1,
      borderColor:'darkgray',
    },
    container1:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    },
    button:{
      marginTop:25,
      height:50,
      width:310,
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:4
    }
  })
  export default Otp;