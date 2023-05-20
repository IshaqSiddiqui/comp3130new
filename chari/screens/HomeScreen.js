import {StyleSheet, Text, View, SafeAreaView, Image, TextInput, PermissionsAndroid} from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'
const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
            <Text style={{fontSize: 18, fontWeight: "600"}}>HomeScreen dscsdc 
                sdcdscdsc
                sdcsddscsdsdf svsfvfvfv adamss
            </Text>
            </View>
            <View> 
                <Image style={{width:50,height:50,borderRadius:25}}
                source={require('./Promote-charity-event-1.png')} />
            </View>
            <View style={{
                padding:10,
                margin:10,
                flexDirection:"row", 
                justifyContent:"space-around", 
                borderWidth: 0.8, 
                borderColor: "blue", 
                borderRadius:10
                }}>
                <TextInput placeholder='Choose charity'/>
                <Feather name='search' size={24} color={"black"}/>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen

