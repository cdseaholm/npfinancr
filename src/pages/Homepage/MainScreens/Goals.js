import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import BackgroundMonth from "../../../components/BackgroundMonth";

export function Goals() {
  const monthToUse = BackgroundMonth();
  
  return (
    <View style={{paddingTop: 40, height: '100%'}}>
      <ImageBackground source={monthToUse} resizeMode="cover" style={{flex: 1}}>
    <Text>
      This is the Goal page
    </Text>
    </ImageBackground>
    </View>
  )
}

export default Goals
