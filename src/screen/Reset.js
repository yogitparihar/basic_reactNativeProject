import React from 'react';
import {StyleSheet,Image, View,Text,TextInput, ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Button from '../component/Button';
import { useState } from 'react';

const Reset = ({navigation})=>{
    const[textInputEmail, settextInputEmail] = useState()
    const showAlert =() =>{
      let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if(!textInputEmail.trim()){
      alert("enter your email")
      return;
    }
    if(!val.test(textInputEmail)){
      alert("check your email")
      return;
    }
    navigation.navigate('Otp')
  };
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
              <Text style={styles.text1}>Forgot Password</Text>
              <Text style={{marginTop:10,fontWeight:'400'}}>Please enter your email address. 
              You will receive a link to create a new password via email</Text>
          </View>
          <View style={styles.textcontainer1}>
              <Entypo name='email' color={'darkgray'} size={22} style={{marginRight:10,paddingTop:8}}/>      
              <TextInput style={styles.input}
                placeholder='Email'
                placeholderTextColor={'darkgray'}
                autoCapitalize='none'
                keyboardType="email-address"
                defaultValue={textInputEmail}
                onChangeText={(value)=>settextInputEmail(value)}
              />
          </View>
          <View style={styles.container1}>
              <Button
                text='SUBMIT'
                onPressIn ={showAlert}
              />
            </View>
        </View>
        </View>
    </ScrollView>
    </View>
  )
};
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
      fontWeight:"bold",
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
  export default Reset;