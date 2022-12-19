import React, { useState} from 'react';
import {Image, View} from 'react-native';
import Button from '../component/Button';
import * as ImagePicker from 'expo-image-picker';
export default function ImagePick() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled){
      setImage(result.uri);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 400}}/>}
      <Button
        text="Choose Photos"
        onPress={pickImage}
      />
    </View>
  );
}