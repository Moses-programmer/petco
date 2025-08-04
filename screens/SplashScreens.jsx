import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'

const SplashScreens = () => {
  return (
    <SafeAreaView className="bg-green-700 flex-1 justify-center items-center">
      <View className="bg-white h-32 w-32 items-center rounded-2xl shadow-2xl shadow-white py-2">
        <Image source={require("../assets/pets.png")} className="h-24 w-24 " />
      </View>

      <View className="h-12 w-72 items-center bg-white top-[85%] absolute rounded-full">
        <Pressable>
          <Text className="text-green-500 text-2xl p-2 font-semibold tracking-wider">
            Start
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default SplashScreens

const styles = StyleSheet.create({})