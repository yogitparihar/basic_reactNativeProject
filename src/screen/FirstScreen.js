import {TouchableOpacity,Text,View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../component/Button';
import Model from './Model';
const FirstScreen = ({navigation})=>{
  const removeValue = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login')
    } catch(e) {
      alert(e)
    }
  }
  const callApi= () => {
    return fetch('https://reactnative.dev/movies.json')
    .then((response)=>response.json())
    .then((json)=>{
        Model.id = json.id
        Model.title = json.title
        Model.releaseYear = json.releaseYear
    })
    .catch((e)=>{
      alert(e);
    })
  };
    return(
      <View>
        <TouchableOpacity onPress={removeValue}>
            <Text style={{position:'absolute',right:40,top:40,fontSize:25,color:'red'}}>LogOut</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:250}}>
            <Text style={{fontSize:20,color:'red'}}></Text>
        </View>
        <View style={{flex:1,marginTop:30,paddingHorizontal:40}}>
           <Button
            text='CallAPI'
            onPress={callApi}
           />
        </View>
      </View>
    )
  }
  export default FirstScreen;