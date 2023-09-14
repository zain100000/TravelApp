import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const MenuContainer = ({title, imgSrc, type}) => {
  return (
    <TouchableOpacity className="flex-1 justify-around items-center mt-10">
      <View
        className={`w-20 h-20 rounded-full items-center justify-center ${
          type === title.toLowerCase() ? 'bg-gray-100' : ''
        }`}>
        <Image source={imgSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="font-medium text-[#4ABBA7] py-3 text-[18px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
