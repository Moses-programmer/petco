import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 items-center">
            <View className="h-16 w-[95%] border-2 border-green-300 rounded-2xl ">
                <Icon name="align-justify" color="green" size={24} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})