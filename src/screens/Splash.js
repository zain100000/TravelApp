import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/splash_bg.jpg')}
      className="w-full h-screen">
      <View className="flex-1 flex-row justify-center items-center">
        <View className="p-5 mr-3 rounded-full bg-[#141414]">
          <Text className="text-[#4DABB7] font-bold text-3xl">Go</Text>
        </View>
        <View>
          <Text className="text-4xl font-bold text-[#4DABB7] ">Travel</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
