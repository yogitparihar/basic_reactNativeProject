import React from 'react';
import {StyleSheet,Image, View,Text,TextInput, ScrollView,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
    const [textInputEmail, settextInputEmail]=useState('');
    const [textInputPassword, settextInputPassword]=useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    useEffect(() => {
        getLoginValue();
    },[])
    async function getLoginValue() {
        try {
          await AsyncStorage.getItem('@isLogin').then(value=>{
            if(value!=null){
                navigation.navigate('TabNavigation');
            }
          })
        } catch(e) {
          alert(e)
        }
      }
const setdata =  async(value) =>{
    if(!textInputEmail.trim()){
      alert("enter your email")
      return;
    }
    if(!val.test(textInputEmail)){
        alert("Please enter valid email")
        return;
    }
    if(!textInputPassword.trim()){
      alert("enter your password")
      return;
    }
    try {
        await AsyncStorage.setItem('@isLogin', value)
        navigation.navigate('TabNavigation');
    } catch (e) {
      alert(e)
    }
  };
  return (
    <View style={styles.container}>
    <ScrollView>
    <View>
        <Image style={styles.image}
            source={require('../../assets/logo.png')}
        />
    </View>
    <View style={styles.textcontainer}>
       <Text style={styles.text1}>Login</Text>
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
    <View style={styles.textcontainer2}>
    <Octicons name='lock' color={'darkgray'} size={22} style={{marginRight:10,paddingTop:8,marginLeft:5}}/>
        <TextInput style={styles.input1}
            placeholder='Password'
            maxLength={20}
            placeholderTextColor={'darkgray'}
            autoCapitalize='none'
            keyboardType='visible-password'
            defaultValue={textInputPassword}
            secureTextEntry={secureTextEntry}
            onChangeText={(value)=>settextInputPassword(value)}
        />
        <Octicons name={secureTextEntry ? "eye-closed" : 'eye'} color={'darkgray'} size={17} 
            style={{position:'absolute', right:50}} onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}/>
    </View>
    <View style={styles.textcontainer3}>
    <TouchableOpacity onPress={()=>navigation.navigate("Reset")}>
            <Text style={
                {color:'black',fontStyle:'normal',textDecorationLine:'underline'}
            }>Forgot Password?</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.container1}>
    <Button
        text='Login'
        onPress={()=>{setdata(textInputEmail)}}
    />
    </View>
    <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:195,flexDirection:'row'}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
        <Text style={{color:'#1DCDFE',fontSize:14,fontStyle:'normal',fontWeight:'500'}}>Sing up here</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    image:{
        width:390,
        height:300,
    },
    textcontainer:{
        paddingHorizontal:40
    },
    textcontainer1:{   
        flex:1,
        marginTop:30,
        paddingHorizontal:40,
        flexDirection:'row'
    },
    textcontainer2:{
        flex:1,
        paddingHorizontal:40,
        marginTop:30,
        flexDirection:'row',
    },
    textcontainer3:{
        flex:1,
        marginTop:20,
        paddingLeft:230
    },
    text1:{
        fontSize:23,
        fontStyle:'normal',
        fontWeight:"bold",
    },
    input:{
        fontStyle:'normal',
        fontSize:15,
        fontWeight:'bold',
        borderBottomWidth:1,
        borderColor:'lightgray',
        flex:1
    },
    input1:{
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:15,
        borderBottomWidth:1,
        borderColor:'lightgray',
        flex:1
    },

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
    container1:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})
export default Login;