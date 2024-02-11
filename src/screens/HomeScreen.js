import React, { useEffect } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { homepage,universal } from '../styles/style'
import { utils } from '../styles/utils'
import WelcomeSVG from "../assets/main.svg"
import {MagnifyingGlassIcon} from "react-native-heroicons/outline"
import Ripple from 'react-native-material-ripple'
import RecentCustomer from '../components/RecentCustomer';
// import AnimationFade from '../components/animationFade';


const HomeScreen = ({ navigation }) => {

  return (
    <View style={universal.main}>

      {/* logo  */}
        <View style={universal.imageContainer}>
          <WelcomeSVG width={hp(8)} height={hp(6)} />
        </View>

      {/* Search Bar  */}
        <View style={universal.searchContainer}>
          <TextInput autoComplete='off' style={universal.searchBar} placeholder='Enter mobile number' placeholderTextColor={'gray'}></TextInput>
          <TouchableOpacity style={universal.searchBtn}>
              <MagnifyingGlassIcon color={'black'} height={hp(4)} width={hp(4)} />
          </TouchableOpacity>
        </View>

      <ScrollView>

      {/* Recent Customer  */}
        <View style={homepage.recentContainer}>
            <Text style={[utils.smallText, {marginBottom: hp(1)}]}>Recent Customers</Text>
          {/* Recent Customer Details  */}
            <RecentCustomer />
            {/* Recent Customer Details  */}
            <RecentCustomer />


        </View>

        {/* Links  */}
        <View>
          <Ripple style={homepage.imageLinkContainer} onPress={() => navigation.navigate('Measurements')}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/stitchBill.png')}></Image>
          </Ripple>

          <Ripple style={homepage.imageLinkContainer} onPress={() => navigation.navigate('AddSoldBill')}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/soldBill.png')}></Image>
          </Ripple>
        
          <Ripple style={homepage.imageLinkContainer}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/gaajBtn.png')}></Image>
          </Ripple>

          <Ripple style={homepage.imageLinkContainer}>
            <Image style={homepage.imageLinks} source={require('../assets/homepage/ringBtn.png')}></Image>
          </Ripple>

        </View>

      </ScrollView>
      
    </View>
  )
}

export default HomeScreen
