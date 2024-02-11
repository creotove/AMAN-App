import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {stitchCustomer, universal} from '../styles/style';
import {utils} from '../styles/utils';
import WelcomeSVG from '../assets/main.svg';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import RecentCustomer from '../components/RecentCustomer';
import {useGetStitchCustomerListQuery} from '../api/adminSlice';
// import AnimationFade from '../components/animationFade';

const StitchCustomerScreen = () => {
  const {data, isLoading} = useGetStitchCustomerListQuery();
  return (
    <View style={universal.main}>
      {/* logo  */}
      <View style={universal.imageContainer}>
        <WelcomeSVG width={hp(8)} height={hp(6)} />
      </View>

      {/* Search Bar  */}
      <View style={universal.searchContainer}>
        <TextInput
          style={universal.searchBar}
          placeholder="Enter mobile number"
          placeholderTextColor={'gray'}></TextInput>
        <TouchableOpacity style={universal.searchBtn}>
          <MagnifyingGlassIcon color={'black'} height={hp(4)} width={hp(4)} />
        </TouchableOpacity>
      </View>

      {/* Recent Customer  */}
      <View style={stitchCustomer.recentContainer}>
        <Text style={utils.smallText}>Recent Customers</Text>
        <ScrollView style={{width: wp(86), height: hp(69), marginTop: hp(1)}}>
        {data && data.data && data.data.data.map((customer,index) => (
            <RecentCustomer
              key={index}
              name={customer.name}
              phoneNumber={customer.phoneNumber}
              avatar={customer.avatar}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default StitchCustomerScreen;
