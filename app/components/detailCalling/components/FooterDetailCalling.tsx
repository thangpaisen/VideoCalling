import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { CallIcon, CameraIcon, MoreIcon, VolumeIcon } from '../../../assets/svg'
import { MicIcon } from '../../../assets/svg/index'

type Props = {}

const FooterDetailCalling = (props: Props) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.itemChildren}>
                <VolumeIcon size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemChildren}>
                <CameraIcon size={14} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemCall}>
                <CallIcon size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemChildren}>
                <MicIcon size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemChildren}>
                <MoreIcon size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default FooterDetailCalling

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#374252',
        borderRadius: 12,
        justifyContent: 'space-evenly',
        paddingVertical: 20,
    },
    itemCall: {
        width: 70,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemChildren: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
