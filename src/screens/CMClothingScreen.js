import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {universal, customer} from '../styles/style';
import {utils} from '../styles/utils';
import Dots from '../assets/dots.svg';
import {
  useGetClothingItemMeasurementNamesQuery,
  useGetClothingItemsQuery,
} from '../api/adminSlice';
import axios from 'axios';

const CMClothingScreen = ({navigation}) => {
  const {data: clothingItems, isLoading} = useGetClothingItemsQuery();
  const [measurementNames, setMeasurementNames] = useState(null);

  const handleMeasurementNamesPress = async clothingItemName => {
    try {
      const res = await axios.get(
        `http://192.168.224.139:8080/api/v1/admin/clothingItemMeasurementNames/${clothingItemName}`,
      );
      if (res.data.statusCode === 200) {
        setMeasurementNames(res.data.data);
        console.log(res.data.data);
      }
      console.log('res.data');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={universal.main}>
      {/* Items  */}
      <View
        style={{
          marginVertical: hp(5),
        }}>
        <ScrollView>
          {clothingItems &&
            clothingItems.data.map((item, index) => {
              return (
                <View key={index} style={{marginBottom: hp(2)}}>
                  <View style={customer.container}>
                    <Text style={utils.labelText}>{item.name}</Text>
                    <TouchableOpacity
                      onPress={() => handleMeasurementNamesPress(item.name)}>
                      <Text
                        style={{
                          fontSize: hp(3),
                          transform: [{rotate: '90deg'}],
                        }}>
                        &gt;
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {measurementNames
                    ? measurementNames.map((item, index) => {
                        return (
                          <View
                            key={index}
                            style={[
                              utils.subList,
                              index === measurementNames.length - 1
                                ? utils.endItem
                                : '',
                            ]}>
                            <View>
                              <Text>{item}</Text>
                            </View>
                          </View>
                        );
                      })
                    : null}
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CMClothingScreen;

{
  /* <View style={{
            position: 'absolute',
            backgroundColor: 'white',
            right: wp(10),
            width: wp(25),
            height: hp(10),
            elevation: 2,
            borderRadius: 5,
            zIndex: 99999,
            top: hp(4)
          }}>
              <TouchableOpacity>
                <Text style={utils.smallText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{position: "relative", zIndex: 999}}>
                <Text style={utils.smallText}>Delete</Text>
              </TouchableOpacity>
          </View> 












           <View
                    style={[
                      utils.subList,
                      // index === measurementData.length - 1
                      //   ? utils.endItem
                      //   : '',
                    ]}>
                    <View>
                      <Text>Hello</Text>
                    </View>
                  </View>
                  <View style={utils.subList}>
                    <View>
                      <Text>Hello</Text>
                    </View>
                  </View>
                  <View style={utils.subList}>
                    <View>
                      <Text>Hello</Text>
                    </View>
                  </View>
                  <View style={utils.subList}>
                    <View>
                      <Text>Hello</Text>
                    </View>
                  </View>
          */
}
