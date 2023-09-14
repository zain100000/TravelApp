import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemScreen = ({route}) => {
  const navigation = useNavigation();
  const data = route?.params?.params;

  const handleBooking = () => {
    alert('Hotel has been booked successfully! ');
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-4">
        {/* Image Start */}

        <View className="relative bg-white shadow-md">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : 'https://media-cdn.tripadvisor.com/media/photo-f/10/a4/78/de/tarka-house-restaurant.jpg',
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

          {/* Price Start */}

          <View className="absolute flex-row inset-x-0 translate-y-52 px-5 items-center justify-between">
            <Text className="text-[#fff] text-[22px] font-extrabold ">
              {data?.price}
            </Text>

            {/* Open Now Start */}

            <View className="bg-[#4ABBD7] px-2 py-1 rounded-md">
              <Text className="text-[#fff] text-[16px] font-bold ">
                {data?.open_now_text}
              </Text>
            </View>
          </View>

          {/* Title Start */}

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

          {/* Rating and Currency */}

          <View className="mt-5">
            <View className="flex-row py-2 items-center justify-around">
              <View className="shadow-sm rounded-2xl p-2 top-1 bg-[#d6c68f]">
                <MaterialCommunityIcons size={32} name="star" color="#fff" />
              </View>
              <Text className="right-7 text-[16px] font-extrabold">
                {data?.rating}
              </Text>

              <View className="shadow-sm rounded-2xl p-2 top-1 bg-[#d6c68f]">
                <MaterialCommunityIcons
                  size={32}
                  name="currency-usd"
                  color="#fff"
                />
              </View>
              <Text className="right-7 text-[16px] font-extrabold">
                {data?.price_level}
              </Text>
            </View>
          </View>

          {/* Description */}

          <View className="mt-6">
            <Text className="font-semibold text-black text-[16px]">
              {data?.description}
            </Text>
          </View>

          {/* Phone Email and Address */}

          <View className="mt-10 mb-10 p-3 rounded-lg shadow-md bg-gray-300">
            <View className="flex-col">
              <View className="flex-row pt-2 pb-5">
                <MaterialCommunityIcons name="phone" size={30} color={'#000'} />
                <Text className="pt-1 px-5 font-semibold text-[15px]">
                  {data?.phone}
                </Text>
              </View>

              <View className="flex-row pt-2 pb-5">
                <MaterialCommunityIcons name="email" size={30} color={'#000'} />
                <Text className="pt-1 px-5 font-semibold text-[15px]">
                  {data?.email}
                </Text>
              </View>

              <View className="flex-row">
                <MaterialCommunityIcons name="map" size={30} color={'#000'} />
                <Text className="pt-1 px-5 font-semibold text-[15px]">
                  {data?.address}
                </Text>
              </View>
            </View>
          </View>

          {/* Book Now Button */}

          <TouchableOpacity
            className="border border-red-100 mb-10 justify-center items-center bg-[#7eafbb] p-5 rounded-xl"
            onPress={() => handleBooking()}>
            <Text className="text-white text-3xl font-bold">Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
