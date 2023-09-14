import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {HeroImage} from '../assets';
import * as Animatable from 'react-native-animatable';

const Home = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-[#fff] relative">
      <View className="flex-row mt-8 ml-5">
        <View className="rounded-full bg-[#141414] p-4">
          <Text className="text-[#4DABB7] font-bold text-3xl">Go</Text>
        </View>
        <View>
          <Text className="text-3xl font-bold text-[#000] mt-4 ml-3 ">
            Travel
          </Text>
        </View>
      </View>

      <View className="mt-8 ml-6">
        <Text className="text-4xl mb-4 text-[#000] font-medium">
          Enjoy The Trip With
        </Text>
        <Text className="text-4xl text-[#4DABB7] font-extrabold">
          Good Moments
        </Text>
        <Text className="text-[#4DABB7] font-medium mt-4 text-sm">
          Lorem Ipsum dolor sit. Cillum ullamco commodo cillum nostrud pariatur
          cillum sint deserunt aliqua.
        </Text>
      </View>

      {/* Circle section start */}
      <View className="bg-[#4DABB7] w-[300px] h-[300px] rounded-full absolute -right-[150] bottom-28 " />

      <View className="w-[300px] h-[300px] rounded-full absolute -left-[140] bg-orange-500 bottom-0" />
      {/* Circle section end */}

      {/* Image Start */}
      <View className="flex-1 items-center justify-center relative">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="object-cover w-full h-[550] mt-80"
        />
      </View>
      {/* Image End */}

      {/* Button Start */}
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => navigation.replace('Discover')}>
        <View className="absolute bottom-20 bg-[#1a8391] w-52 h-20 items-center justify-center rounded-full">
          <Text className="text-white font-bold text-2xl">Get Started</Text>
        </View>
      </TouchableOpacity>

      {/* Button End */}
    </SafeAreaView>
  );
};

export default Home;
