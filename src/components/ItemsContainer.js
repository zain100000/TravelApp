import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemsContainer = ({imgSrc, title, location, data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="justify-evenly border border-gray-300 rounded-md px-2 py-2 shadow"
      onPress={() => navigation.navigate('ItemScreen', {params: data})}>
      <Image
        source={{uri: imgSrc}}
        className="object-contain rounded-md mt-2 w-full h-40"
      />

      {title ? (
        <>
          <Text className="text-[#4ABBD7] text-lg font-semibold px-2">
            {title?.length > 14 ? `${title.slice(0, 14)}....` : title}
          </Text>
          <View className="flex-row">
            <MaterialCommunityIcons size={24} name="map-marker-outline" />
            <Text className="text-[#4ABBD7] text-lg font-semibold">
              {location?.length > 14
                ? `${location.slice(0, 14)}....`
                : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemsContainer;
