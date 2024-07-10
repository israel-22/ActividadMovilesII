import { StyleSheet, Text, View } from 'react-native' 
import React from 'react' 
import { useState } from 'react'; 
import { Button, Image } from 'react-native'; 
import * as ImagePicker from 'expo-image-picker';


export default function CamaraScreen() {
    
    const [image, setImage] = useState("");

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  


  return (
    <View>
   <Button title="Pick an image from camera roll" onPress={pickImage} color={'green'}/>
   {image&&<Image source={{ uri: image }} style={styles.image} />}
    </View>
  )
}

const styles = StyleSheet.create({

    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
      }, 
      image: { 
        width: 200, 
        height: 200, 
        resizeMode:'contain' 
      }, 
 
})