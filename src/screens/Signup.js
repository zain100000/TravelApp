import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import imgPlaceHolder from '../assets/avatar.png';

const Signup = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const handlePickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image);
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('../assets/signup_bg.jpg')}
        className="w-full h-full">
        <ScrollView>
          <View className="flex-1 items-center mt-10">
            <Text className="text-white text-4xl mb-5">Signup</Text>
            <Text className="text-white text-1xl">
              Please provide all required details to register
            </Text>
          </View>

          <View className="flex-1 items-center mt-8">
            {image ? (
              <Image
                source={{uri: image.path}}
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <Image
                source={imgPlaceHolder}
                className="w-24 h-24 rounded-full"
              />
            )}
            <TouchableOpacity onPress={handlePickImage}>
              <Text className="text-white text-xl mt-3">Select Image</Text>
            </TouchableOpacity>

            {/* Form Start */}

            <View className="flex-1 mt-8 ml-5 w-full">
              <View className="flex-row first-letter mb-5">
                <View className="mt-3">
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={22}
                    color={'white'}
                  />
                </View>
                <TextInput
                  className="px-5 text-white text-base"
                  placeholder="Enter Your Name"
                  placeholderTextColor={'white'}
                  value={fullname}
                  onChangeText={text => setFullname(text)}
                />
              </View>

              <View className="flex-row mb-5">
                <View className="mt-3">
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={22}
                    color={'white'}
                  />
                </View>
                <TextInput
                  className="text-base px-5 text-white"
                  placeholder="Enter Your Email"
                  placeholderTextColor={'white'}
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>

              <View className="flex-row">
                <View className="mt-3">
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={22}
                    color={'white'}
                  />
                </View>
                <TextInput
                  className="text-base px-5 text-white"
                  placeholder="Enter Your Password"
                  placeholderTextColor={'white'}
                  keyboardType="number-pad"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>

              {/* Button Start */}

              <TouchableOpacity className="flex-1 justify-center items-center">
                <View className="mr-5 w-4/5 items-center mt-8 p-4 bg-[#4ADDB7]">
                  <Text className="text-white text-xl">Signup</Text>
                </View>
              </TouchableOpacity>

              {/* Button End */}
            </View>

            <View className="flex-1 mt-3">
              <Text className="text-white">Already have an account?</Text>

              <View className="flex-1 items-center mt-3">
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                  <Text className="text-white text-xl">Signin</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Form End */}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
