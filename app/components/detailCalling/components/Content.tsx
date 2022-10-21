import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Ionicons'

type Props = {}

const Content = (props: Props) => {
    const renderItem = ({ item, index }: any) => {
        return (
            <View style={styles.itemUser}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/originals/49/07/13/4907130d5ddcd50beff46f78c9744a49.png',
                    }}
                    style={styles.imageUser}
                />
                <TouchableOpacity style={styles.iconMic} activeOpacity={0.7}>
                    <Icon name={'mic-off'} size={14} color='#fff' />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/originals/49/07/13/4907130d5ddcd50beff46f78c9744a49.png',
                    }}
                    style={styles.imageMain}
                />
            </View>
            <View style={styles.listUsers}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    contentContainerStyle={{
                        marginHorizontal: -5,
                    }}
                />
            </View>
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        flex: 1,
    },
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageMain: {
        backgroundColor: '#333',
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    itemUser: {},
    imageUser: {
        borderWidth: 1,
        borderColor: '#fff',
        marginHorizontal: 5,
        width: (wp(100) - 70) / 4,
        aspectRatio: 1,
        borderRadius: 8,
    },
    listUsers: {
        marginVertical: 24,
    },
    iconMic: {
        position: 'absolute',
        bottom: 6,
        right: 11,
        width: 24,
        height: 24,
        borderRadius: 20,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
