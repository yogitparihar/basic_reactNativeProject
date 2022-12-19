import { useState } from 'react';
import { SafeAreaView,StyleSheet,TextInput,View,TouchableOpacity,Text,ScrollView} from 'react-native';
const SecondScreen = () => {
  const [textinput, setTextInput] = useState('');
  const[containers, setContainers] = useState([]);
  const showAlert =()=>{
  }
  const addValue = ()=>{
    if(textinput==="")
    {
      alert("Please enter the value");
    }
    let cont=[];
    setContainers([])
    for(let num=0;num<=textinput - 1;num++){
        let obj={
          id:num,
          placeholder: `Text Field ${num + 1}`,
          value:''
        }
        cont.push(obj)
    }
    setContainers(cont)
  }
  const onChangeValue=(id,text)=>{
    let temp = [...containers]
    let index = temp.findIndex((obj) => obj.id == id)
    //console.log('index', index);
    if(index > -1){
      temp[index].value = text
    }
    setContainers(temp)
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container1}>
      <TextInput style={styles.input}
        placeholder="Enter the number"
        placeholderTextColor={'blue'}
        keyboardType='number-pad'
        value={textinput}
        onChangeText={(value)=>setTextInput(value)}
      >
      </TextInput>
      <TouchableOpacity style={styles.button} onPress={addValue}>
        <Text style={{color:'red'}}>ADD LIST</Text>
      </TouchableOpacity>
    </View>
    <ScrollView style={styles.container1}>
              {containers.map((item, index)=>{
                return <TextInput  key={index} 
                value={item.value}
                keyboardType='number-pad'
                placeholder={item.placeholder}
                onChangeText={(text)=>onChangeValue(item.id,text)}
                placeholderTextColor={"black"} style={styles.input1}/>
              })}
    </ScrollView>
    <View style={{alignItems:'center',justifyContent:'center',marginBottom:30}}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={{color:'white'}}>OK</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1:{
    padding:15,
    flexDirection:'row'
  },
  input:{
    height:40,
    width:250,
    borderWidth:2,
    paddingLeft:10,
    color:'blue'
  },
  input1:{
    marginTop:10,
    height:40,
    width:250,
    borderWidth:2,
    paddingLeft:10,
  },
  button:{
    marginLeft:15,
    height:35,
    width:95,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
  }
});

export default SecondScreen;