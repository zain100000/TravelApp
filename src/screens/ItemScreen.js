import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemScreen = ({route}) => {
  const navigation = useNavigation();
  const data = route?.params?.params;

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-4">
        <View className="relative bg-white shadow-md">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : 'https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg',
            }}
            className="rounded-xl w-full h-64 object-contain"
          />

          <View className="absolute flex-row items-center justify-between inset-x-0">
            <TouchableOpacity
              className="px-4 py-4"
              onPress={() => navigation.navigate('Discover')}>
              <MaterialCommunityIcons
                name="chevron-left-box"
                size={60}
                color={'#fff'}
              />
            </TouchableOpacity>

            <TouchableOpacity className="px-4 py-4">
              <MaterialCommunityIcons
                name="heart-flash"
                size={60}
                color={'#fff'}
              />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 translate-y-52 px-5 items-center justify-between">
            <Text className="text-[#fff] text-[22px] font-extrabold ">
              {data?.price}
            </Text>

            <View className="bg-[#4ABBD7] px-2 py-1 rounded-md">
              <Text className="text-[#fff] text-[16px] font-bold ">
                {data?.open_now_text}
              </Text>
            </View>
          </View>

          <View className="mt-10">
            <Text className="text-[#000] text-2xl font-semibold px-2 py-2">
              {data?.name}
            </Text>
            <View className="flex-row">
              <MaterialCommunityIcons size={26} name="map-marker-outline" />
              <Text className="text-[#000] text-lg font-semibold">
                {data?.location_string}
              </Text>
            </View>
          </View>

          <View className="mt-5">
            <View className="flex-row py-2 items-center justify-between">
              <View className="shadow-sm rounded-2xl p-2 top-1 bg-[#d6c68f]">
                <MaterialCommunityIcons size={32} name="star" color="#fff" />
              </View>
              <Text className="right-3 text-[16px] font-extrabold">
                {data?.rating}
              </Text>

              <View className="shadow-sm rounded-2xl p-2 top-1 bg-[#d6c68f]">
                <MaterialCommunityIcons
                  size={32}
                  name="currency-usd"
                  color="#fff"
                />
              </View>
              <Text className="right-3 text-[16px] font-extrabold">
                {data?.price_level}
              </Text>

              <View className="shadow-sm rounded-2xl p-2 top-1 bg-[#d6c68f]">
                <MaterialCommunityIcons
                  size={32}
                  name="sign-direction"
                  color="#fff"
                />
              </View>
              <Text className="right-2 text-[16px] font-extrabold">
                {data?.bearing}
              </Text>
            </View>
          </View>


          <View>
            <Text>{data?.description}</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
