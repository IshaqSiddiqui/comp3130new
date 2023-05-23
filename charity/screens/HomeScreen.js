import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { logout, selectUser } from '../slices/user';
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = () => {

    const user = useSelector(selectUser);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(()=>{
        navigation.setOptions({ title: 'Home' })
    },[])

    useEffect(() => {
        if (!user) {
            navigation.replace('Login');
        }
    }, [user])

    console.log('user', user);

    const signOut = () => {
        dispatch(logout())
        navigation.replace('Login');
    }

    return (
        <View>
            <Button title='Logout' onPress={signOut} />
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})