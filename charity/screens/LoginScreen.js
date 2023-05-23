import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Form from '../Form'
import { selectUser } from '../slices/user';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const user = useSelector(selectUser);
    const navigation = useNavigation();

    useEffect(() => {
        if(user){
            navigation.replace('HomeTabs');
        }
    }, [user])

    console.log('user', user);

  return (
    <View style={styles.container}>
        <Form />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    }
})