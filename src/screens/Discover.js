import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Avatar, NotFound} from '../assets';
import MenuContainer from '../components/MenuContainer';
import ItemsContainer from '../components/ItemsContainer';
import {Hotels, Attractions, Restaurants} from '../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getPlacesData} from '../api';

const Discover = () => {
  const [type, setType] = useState('resturants');
  const [isloading, SetIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    SetIsLoading(true);
    getPlacesData().then(data => {
      setMainData(data);
      setInterval(() => {
        SetIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#fff] relative">
      <ScrollView>
        <View className="px-5 py-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-black text-4xl font-bold py-2">
                Discover
              </Text>
              <Text className="text-[#999] text-3xl font-semibold">
                the beauty today
              </Text>
            </View>

            <View className="items-center justify-center rounded-full w-[12] h-[12]">
              <Image
                source={Avatar}
                className="w-[60] h-[60] rounded-full object-cover mr-5"
              />
            </View>
          </View>

          {/* Search Bar Start */}
          <View className="flex-row items-center mt-6 p-2 rounded-2xl bg-[#fff] font-bold text-xl shadow-xl text-black">
            <TextInput
              placeholder="Search Here"
              placeholderTextColor="#000"
              className="font-medium text-xl ml-2"
            />
          </View>

          {/* Search Bar End */}

          {isloading ? (
            <View className="flex-1 justify-center items-center mt-52">
              <ActivityIndicator color={'black'} size={'large'} />
            </View>
          ) : (
            <View>
              {/* Menu Container Start */}
              <View className="flex-row justify-between">
                <MenuContainer
                  key={'hotel'}
                  title="Hotel"
                  imgSrc={Hotels}
                  type={type}
                  setType={setType}
                />
                <MenuContainer
                  key={'attractions'}
                  title="Attractions"
                  imgSrc={Attractions}
                  type={type}
                  setType={setType}
                />
                <MenuContainer
                  key={'resturants'}
                  title="Resturants"
                  imgSrc={Restaurants}
                  type={type}
                  setType={setType}
                />
              </View>
              {/* Menu container End */}

              {/* Top Tips Start */}
              <View className="flex-row justify-between">
                <View className="mt-10">
                  <Text className="text-3xl font-extrabold">Top Tips</Text>
                </View>
                <TouchableOpacity>
                  <View className="flex-row mt-10">
                    <Text className="text-xl font-semibold text-[#4AABD7] top-1">
                      Explore
                    </Text>
                    <View className="top-1 left-1">
                      <MaterialCommunityIcons
                        name="arrow-right-thin"
                        size={30}
                        color="#4ADDB7"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Top Tips End */}

              {/* Items Start */}
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <View className="mt-8 justify-evenly object-contain">
                      <ItemsContainer
                        key={i}
                        imgSrc={
                          data?.photo?.images?.small?.url
                            ? data?.photo?.images?.small?.url
                            : 'https://media-cdn.tripadvisor.com/media/photo-o/0a/35/c6/91/getlstd-property-photo.jpg'
                        }
                        title={data?.name}
                        location={data?.location_string}
                        data={data}
                      />
                    </View>
                  ))}
                </>
              ) : (
                <>
                  <View className="flex-1 items-center justify-center w-full h-[300px]">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="items-center justify-center text-lg mt-5 text-black font-semibold">
                      OOPS No Data Found.........
                    </Text>
                  </View>
                </>
              )}

              {/* Items End */}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
