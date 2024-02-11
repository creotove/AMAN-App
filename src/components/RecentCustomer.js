import React from 'react'
import { Text, View, Image} from 'react-native';
import { homepage, recentCustomer } from '../styles/style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ChevronRightIcon} from "react-native-heroicons/outline"
import { utils } from '../styles/utils'

const RecentCustomer = ({ name, phoneNumber, avatar }) => {
  return (
    <View style={recentCustomer.container} >
      <View style={recentCustomer.userDetail}>
        <Image style={recentCustomer.userDetailImage} source={{uri: avatar}} />
        <View style={recentCustomer.userDetailContent}>
            <Text style={utils.mediumText}>{name}</Text>
            <Text style={utils.smallGrayText}>{phoneNumber}</Text>
        </View>
      </View>
      <View>
        <ChevronRightIcon height={hp(2)} width={hp(2)} color={'black'} />
      </View>
    </View>
  )
}

export default RecentCustomer
