import { Camera, CameraType } from 'expo-camera';
import { useState, useRef, useContext } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%
`

const CameraContainer = styled.View`
   width: 100%;
   height: 100%;
`;

const CameraButton = styled(Button).attrs({
   mode: "contained",
   icon: "camera"
})`
   position: absolute;
   top: 525px;
   left: 140px;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef()
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }

  const snap = async () => {
      if (cameraRef && cameraRef.current) {
         const photo = await cameraRef.current.takePictureAsync();
         //console.log(photo);
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        navigation.goBack();
      }
   };


  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </ProfileCamera>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {

    },
    buttonContainer: {

    },
    button: {

    },
    text: {

    },
 }); 