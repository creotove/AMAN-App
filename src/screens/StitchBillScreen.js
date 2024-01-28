import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { universal, forms } from '../styles/style'
import { utils } from '../styles/utils';
import SimpleHeader from '../components/SimpleHeader';
import { PlusIcon } from 'react-native-heroicons/outline'

const StitchBillScreen = ({navigation}) => {
  return (
    <View style={universal.main}>
        {/* Back Button And header  */}
      <SimpleHeader navigation={navigation} title="Stitch Bill" />

      {/* Form  */}
      <View style={[forms.container, {paddingVertical: hp(1.5)}]}>
        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Name</Text>
          <TextInput style={forms.textInput} placeholder='Enter Name' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Mobile Number</Text>
          <TextInput style={forms.textInput} placeholder='Enter Mobile' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Shirt Qty.</Text>
          <TextInput style={forms.textInput} placeholder='Enter Shirt Qty' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Pant Qty</Text>
          <TextInput style={forms.textInput} placeholder='Enter Pant Qty' placeholderTextColor={'gray'}></TextInput>
        </View>

        {/* Text Input  */}
        <View style={forms.inputContainer}>
          <Text style={utils.labelText}>Total Amount</Text>
          <TextInput style={forms.textInput} placeholder='Enter Amount' placeholderTextColor={'gray'}></TextInput>
        </View>


      </View>

      <View style={universal.innerPageBtn}>
        <PlusIcon height={hp(4)} width={hp(4)} strokeWidth={hp(0.4)} color={'white'} />
      </View>

    </View>
  )
}

export default StitchBillScreen
