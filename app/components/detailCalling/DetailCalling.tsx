import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContainerView from '../common/ContainerView'
import Constant from '../../controller/Constant'
import HeaderDetailCalling from './components/HeaderDetailCalling'
import FooterDetailCalling from './components/FooterDetailCalling'
import Content from './components/Content'

type Props = {}

const DetailCalling = (props: Props) => {
    return (
        <ContainerView>
            <View style={styles.container}>
                <HeaderDetailCalling title='Hello' />
                <Content />
                <FooterDetailCalling />
            </View>
        </ContainerView>
    )
}

export default DetailCalling

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.colors.background,
        paddingHorizontal: 20,
    },
    title: {},
})
