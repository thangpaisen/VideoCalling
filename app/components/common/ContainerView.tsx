import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'
import Constant from '../../controller/Constant'

type Props = {
    children: React.ReactElement
}

const ContainerView = ({ children }: Props) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Constant.colors.background,
            }}
        >
            <View style={{ flex: 1 }}>{children}</View>
        </SafeAreaView>
    )
}

export default ContainerView

const styles = StyleSheet.create({})
