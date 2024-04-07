import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AddButton from '../components/AddButton';
import {useState} from' react';
import { usePutTextMutation } from '../app/services/profile'
import {useDispatch} from'react-redux'

const MultilineTextInput = ({navigation}) => {
  const [value, onChangeText] = React.useState('Escriba aquí su consulta');
  const [triggerText] = usePutTextMutation();
  const dispatch= useDispatch()

  const confirmText = () => {
    triggerText({text})
    navigation.goBack()
}

  return (
    
       <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
     <Pressable onPress={()=> dispatch(confirmText(text))}>
       <AddButton title="Confirmar consulta" onPress={onChangeText}/>
    </Pressable>
    </View>
  );
};
export default MultilineTextInput;


