import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TextInput, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {universal, forms} from '../styles/style';
import {utils} from '../styles/utils';
import SimpleHeader from '../components/SimpleHeader';
import {PlusIcon} from 'react-native-heroicons/outline';
import Ripple from 'react-native-material-ripple';

const CMAddScreen = () => {
  const [measurementNames, setMeasurementNames] = useState([]);
  const [measurementName, setMeasurementName] = useState('');
  // Refs for input fields
  const nameInputRef = useRef(null);
  const stitchingAmountCustomersInputRef = useRef(null);
  const stitchingAmountTailorsInputRef = useRef(null);
  const cuttingAmountInputRef = useRef(null);
  const measurementInputRef = useRef(null);

  const handleAddMeasurementNames = () => {
    console.log('measurementName', measurementName);
    if (measurementName === undefined || measurementName === '') {
      measurementInputRef.current?.focus();
      return;
    }
    setMeasurementName('');
    setMeasurementNames([...measurementNames, measurementName]);
    measurementInputRef.current?.focus();
  };
  const handleRemoveMeasurementNames = i => {
    console.log('i', i);
    let newMeasurementNames = [...measurementNames];
    newMeasurementNames.splice(i, 1);
    setMeasurementNames(newMeasurementNames);
  };

  return (
    <View style={universal.main}>
      {/* Form  */}
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View
          style={[
            forms.container,
            {marginBottom: hp(15), paddingVertical: hp(2)},
          ]}>
          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Name</Text>
            <TextInput
              ref={nameInputRef}
              style={forms.textInput}
              placeholder="Enter Name"
              placeholderTextColor={'gray'}
              returnKeyType="next"
              onSubmitEditing={() =>
                stitchingAmountCustomersInputRef.current.focus()
              }
            />
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>
              Stitching Amount{' '}
              <Text style={[utils.labelText, {color: 'gray'}]}>
                (Customers)
              </Text>
            </Text>
            <TextInput
              ref={stitchingAmountCustomersInputRef}
              style={forms.textInput}
              placeholder="Stitching Amount"
              placeholderTextColor={'gray'}
              returnKeyType="next"
              onSubmitEditing={() =>
                stitchingAmountTailorsInputRef.current.focus()
              }
            />
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>
              Stitching Amount{' '}
              <Text style={[utils.labelText, {color: 'gray'}]}>(Tailors)</Text>
            </Text>
            <TextInput
              ref={stitchingAmountTailorsInputRef}
              style={forms.textInput}
              placeholder="Stitching Amount"
              placeholderTextColor={'gray'}
              returnKeyType="next"
              onSubmitEditing={() => cuttingAmountInputRef.current.focus()}
            />
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Cutting Amount</Text>
            <TextInput
              ref={cuttingAmountInputRef}
              style={forms.textInput}
              placeholder="Enter Cutting Amount"
              placeholderTextColor={'gray'}
              returnKeyType="next"
              onSubmitEditing={() => measurementInputRef.current.focus()}
            />
          </View>

          {/* Text Input  */}
          <View style={forms.inputContainer}>
            <Text style={utils.labelText}>Measurement</Text>
            <View style={forms.inputWithBtn}>
              <TextInput
                ref={measurementInputRef}
                style={forms.textInput2}
                placeholder="Enter Measurement"
                placeholderTextColor={'gray'}
                value={measurementName}
                onChangeText={text => setMeasurementName(text)}
              />
              <Ripple
                style={forms.inputButton}
                onPress={handleAddMeasurementNames}>
                <Text style={utils.labelWhiteText}>Add</Text>
              </Ripple>
            </View>
          </View>

          {/* Pills Container */}
          <View style={forms.pillsContainer}>
            {measurementNames &&
              measurementNames.map((item, index) => {
                return (
                  <View style={forms.pills} key={index}>
                    <Text style={utils.labelWhiteText}>{item}</Text>
                    <Text style={utils.labelWhiteText}>
                      <Ripple
                        style={forms.closeBtn}
                        onPress={() => handleRemoveMeasurementNames(index)}>
                        <View style={forms.closeBtnContainer}>
                          <Text style={utils.labelText}>X</Text>
                        </View>
                      </Ripple>
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>

      <View style={universal.innerPageBtn}>
        <PlusIcon
          height={hp(4)}
          width={hp(4)}
          strokeWidth={hp(0.4)}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default CMAddScreen;
