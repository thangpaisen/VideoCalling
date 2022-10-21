import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { RecordIcon } from '../../../assets/svg/index'
import Constant from '../../../controller/Constant'

type Props = {
    title: string
}

const HeaderDetailCalling = ({ title }: Props) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btnBack}>
                <Icon name='chevron-back' size={20} color='#fff' />
            </TouchableOpacity>
            <View style={styles.viewTitle}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
                <View style={styles.timeRecord}>
                    <RecordIcon size={16} />
                    <Text style={styles.timeRecordText}>REC {new Date().toLocaleTimeString()}</Text>
                </View>
            </View>
            <View style={styles.viewUser}>
                <TouchableOpacity style={styles.totalUsers}>
                    <Icon name='people' size={16} color='#fff' />
                    <Text style={styles.textCountUser}>15+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewMessageCount}>
                    <Icon name='chatbox-ellipses-outline' size={24} color='#fff' />
                    <View style={styles.totalNewMessageCount}>
                        <Text style={styles.textCountNewMessage}>4</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderDetailCalling

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 10,
        height: 74,
        paddingVertical: 16,
        backgroundColor: '#374252',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnBack: {
        backgroundColor: '#4A5767',
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTitle: {
        flex: 1,
        marginLeft: 16,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    timeRecord: {
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeRecordText: {
        fontSize: 12,
        marginHorizontal: 6,
        color: Constant.colors.grayText,
    },
    viewUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    totalUsers: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        paddingHorizontal: 12,
        backgroundColor: '#4A5767',
        borderRadius: 8,
    },
    textCountUser: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    viewMessageCount: {
        paddingHorizontal: 20,
    },
    totalNewMessageCount: {
        position: 'absolute',
        top: -4,
        right: 12,
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    textCountNewMessage: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
    },
})
