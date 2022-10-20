import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CameraIcon, MoreIcon, VolumeIcon } from './app/assets/svg'
import { MicIcon } from './app/assets/svg/index'

type Props = {}

const App = (props: Props) => {
    return (
        <SafeAreaView>
            <Text>App</Text>
            <VolumeIcon color='red' size={99} />
            <MicIcon color='red' size={99} />
            <CameraIcon color='red' size={99} />
            <MoreIcon color='red' size={99} />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({})
