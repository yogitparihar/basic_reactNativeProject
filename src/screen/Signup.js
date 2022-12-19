import React from 'react';
import {StyleSheet,Image, View,Text,TextInput, ScrollView,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import PhoneInput from "react-native-phone-number-input";
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Button from '../component/Button';
import CheckBox from 'expo-checkbox';

const Signup = ({navigation}) => 
{
  const[textInputEmail, settextInputEmail] = useState('');
  const [textInputPassword, settextInputPassword]=useState('');
  const [textInputConfirmPassword, setInputConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry1, setSecureTextEntry1] = useState(true);
  const [textInputFirst, settextInputFirst] = useState('');
  const [textInputLast, settextInputLast] =useState('');
  const [isselect, setisselect] = useState(false);
  const showAlert =() =>{
    let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if(!textInputFirst.trim()){
      alert("enter your first name")
      return;
    }
    if(!textInputLast.trim()){
      alert("enter your last name")
      return;
    }
    if(!textInputEmail.trim()){
      alert("enter your email address")
      return;
    }
    if(!val.test(textInputEmail)){
      alert("Please enter correct email address")
      return;
    }
    if(!textInputPassword.trim()){
      alert("enter your password")
      return;
    }
    if(!textInputConfirmPassword.trim()){
      alert("enter your confirm password")
      return;
    }
    if(textInputPassword!=textInputConfirmPassword){
      alert("Please enter valid confirm password")
      return;
    }
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
              <Text style={styles.text1}>Create Account</Text>
          </View>
          <View style={styles.textcontainer1}>
              <Ionicons name="person-outline" size={22} color="darkgray" style={{marginRight:10,paddingTop:2}} />
              <TextInput style={styles.input}
                  placeholder='First Name'
                  placeholderTextColor={'darkgray'}
                  autoCapitalize='none'
                  keyboardType="default"
                  defaultValue={textInputFirst}
                  onChangeText={(value)=>settextInputFirst(value)}
              />
          </View>
          <View style={styles.textcontainer1}>
              <Ionicons name="person-outline" size={22} color="darkgray" style={{marginRight:10,paddingTop:2}} />
              <TextInput style={styles.input1}
                  placeholder='Last Name'
                  placeholderTextColor={'darkgray'}
                  autoCapitalize='none'
                  keyboardType="default"
                  defaultValue={textInputLast}
                  onChangeText={(value)=>settextInputLast(value)}
              />
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
           <View style={styles.textcontainer1}>
              <Ionicons name="ios-call-outline" size={22} color='darkgray' style={{paddingTop:15}}/>
              <PhoneInput style={styles.phoneinput}/>
           </View>
           <View style={styles.textcontainer1}>
           <Octicons name='lock' color={'darkgray'} size={22} style={{marginRight:10,paddingTop:8,marginLeft:5}}/>
           <TextInput style={styles.input1}
              placeholder='Password'
              maxLength={20}
              placeholderTextColor={'darkgray'}
              autoCapitalize='none'
              keyboardType='visible-password'
              secureTextEntry={secureTextEntry}
              onChangeText={(value)=>settextInputPassword(value)}
            />
            <Octicons name={secureTextEntry ? "eye-closed" : 'eye'} color={'darkgray'} size={17} 
            style={{position:'absolute', right:50}} onPress={() => {
            setSecureTextEntry(!secureTextEntry);
             }}/>
           </View>
           <View style={styles.textcontainer1}>
           <Octicons name='lock' color={'darkgray'} size={22} style={{marginRight:10,paddingTop:8,marginLeft:5}}/>
           <TextInput style={styles.input1}
              placeholder='Confirm Password'
              maxLength={20}
              placeholderTextColor={'darkgray'}
              autoCapitalize='none'
              keyboardType='visible-password'
              secureTextEntry={secureTextEntry1}
              onChangeText={(value)=>setInputConfirmPassword(value)}
            />
            <Octicons name={secureTextEntry1 ? "eye-closed" : 'eye'} color={'darkgray'} size={17} 
            style={{position:'absolute', right:50}} onPress={() => {
            setSecureTextEntry1(!secureTextEntry1);
             }}/>
           </View>
           <View style={styles.textcontainer1}>
                <CheckBox style={{margin:5}}
                  value ={isselect}
                  onValueChange={setisselect}
                />
                <Text style={{margin:5,color:'darkgray'}}>I agree to the</Text>
                <TouchableOpacity>
                  <Text style={{marginTop:5,textDecorationLine:'underline',color:'darkgray',fontWeight:'bold'}}>Terms</Text>
                </TouchableOpacity>
                <Text style={{margin:5,color:'darkgray'}}>and</Text>
                <TouchableOpacity>
                  <Text style={{marginTop:5,textDecorationLine:'underline',fontWeight:'bold',color:'darkgray'}}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
           <View style={styles.container1}>
              <Button
                text='SIGNUP'
                onPress={showAlert}
              />
            </View>
          <View style={{marginTop:7,flexDirection:'row',justifyContent:'center'}}>
            <Text>Already have an account?  </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text style={{color:'#1DCDFE',fontSize:14,fontStyle:'normal',fontWeight:'500'}}>Login here</Text>
            </TouchableOpacity>
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
      backgroundColor:'white',
    },
    cont:{
      width:390,
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
      marginTop:50,
    },
    text1:{
      fontSize:23,
      fontStyle:'normal',
      fontWeight:"bold",
  },
  textcontainer1:{   
    flex:1,
    marginTop:20,
    paddingHorizontal:40,
    flexDirection:'row'
  },
  input:{
    flex:1,
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:15,
    borderBottomWidth:1,
    borderColor:'darkgray',
  },
  input1:{
    flex:1,
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:15,
    borderBottomWidth:1,
    borderColor:'darkgray',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:4
  },
  button:{
    marginTop:25,
    height:50,
    width:300,
  }, 
  container1:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  phoneinput:{
    flex:1,
  }
})
export default Signup;