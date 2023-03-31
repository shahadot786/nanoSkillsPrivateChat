import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
// import PhoneNumberInput from 'react-native-phone-number-input';

const CustomFormInputHook = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  iconName,
  number,
  eye,
  visible,
  togglePasswordVisibility,
  multiline,
  numberOfLines,
  editable,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          {number ? (
            <>
              <Text style={styles.text}>{name}</Text>
              <Animatable.View animation={error && 'shake'}>
                <PhoneNumberInput
                  editable
                  defaultCode="BD"
                  placeholder={placeholder}
                  placeholderTextColor={Colors.DarkGray}
                  value={value}
                  onChangeFormattedText={onChange}
                  onBlur={onBlur}
                  containerStyle={[
                    styles.containerNumber,
                    {borderColor: error ? 'red' : Colors.Primary},
                  ]}
                  textContainerStyle={[
                    styles.input,
                    {
                      backgroundColor: 'transparent',
                    },
                  ]}
                  textInputStyle={{
                    fontSize: 14,
                    color: Colors.Black,
                  }}
                  codeTextStyle={{
                    color: Colors.Gray,
                  }}
                />
              </Animatable.View>
            </>
          ) : (
            <>
              <Text style={styles.text}>{name}</Text>
              <Animatable.View
                animation={error && 'shake'}
                style={[
                  styles.container,
                  {borderColor: error ? 'red' : Colors.Primary},
                ]}>
                <Icon
                  style={styles.inputIcon}
                  name={iconName}
                  size={20}
                  color={Colors.Primary}
                />
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  style={styles.input}
                  secureTextEntry={secureTextEntry}
                  placeholderTextColor={Colors.Gray}
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={editable}
                  numberOfLines={numberOfLines}
                  multiline={multiline}
                />
                {eye && (
                  <Icon
                    style={styles.inputIconEye}
                    name={'eye-slash'} //eye
                    size={20}
                    color={Colors.Primary}
                  />
                )}
              </Animatable.View>
            </>
          )}

          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch', marginLeft: 10}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: Colors.Primary,
    borderRadius: 25,
    marginBottom: 5,
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 2,
  },
  containerNumber: {
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: Colors.Primary,
    borderRadius: 25,
    marginBottom: 5,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    width: '100%',
    height: 46,
  },
  input: {
    paddingTop: 4,
    paddingBottom: 4,
    color: Colors.Black,
  },
  text: {
    color: Colors.Primary,
    marginLeft: 10,
    marginTop: 15,
    textTransform: 'capitalize',
  },
  inputIcon: {
    padding: 8,
    marginHorizontal: 2,
  },
  inputIconEye: {
    right: -150,
  },
});

export default CustomFormInputHook;
