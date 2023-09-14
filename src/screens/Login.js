import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require('../assets/login_bg.jpg')}
        className="w-full h-full">
        <ScrollView>
          <View className="flex-1 items-center mt-40">
            <Text className="text-white text-4xl mb-5">Login</Text>
            <Text className="text-white text-1xl">
              Please Login to Continue
            </Text>
          </View>

          <View className="flex-1 items-center mt-8">
            {/* Form Start */}

            <View className="flex-1 mt-8 ml-5 w-full">
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

              <TouchableOpacity
                className="flex-1 justify-center items-center"
                onPress={() => navigation.replace('Home')}>
                <View className="mr-5 w-4/5 items-center mt-8 p-4 bg-[#4ADDB7]">
                  <Text className="text-white text-xl">Login</Text>
                </View>
              </TouchableOpacity>

              {/* Button End */}
            </View>

            <View className="flex-1 mt-3">
              <Text className="text-white">Didn't have an account?</Text>

              <View className="flex-1 items-center mt-3">
                <TouchableOpacity onPress={() => navigation.replace('Signup')}>
                  <Text className="text-white text-xl">Signup</Text>
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

export default Login;
