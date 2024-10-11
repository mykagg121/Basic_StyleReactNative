import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Mayank Aggarwal',
            status: 'Soft Dev',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747453?v=4'
        },
        {
            uid: 2,
            name: 'Dipankita',
            status: 'Project Manager',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747454?v=4'
        },
        {
            uid: 3,
            name: 'Prince',
            status: 'Soft Dev',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747455?v=4'
        },
        {
            uid: 4,
            name: 'Shiristhi',
            status: 'Business Analyst',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747456?v=4'
        },
        {
            uid: 5,
            name: 'Tushar',
            status: 'Soft Dev',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747457?v=4'
        },
    ]
  return (
    <View>
      <Text style={styles.HeadText}>Contact</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source={{ uri: imageUrl}} style={styles.Image} />
                <View  style={styles.textCard}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 'auto'
    },
    container: {
        paddingHorizontal: 16,
        marginTop: 5
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 8,
        borderRadius: 10,
        margin: 2
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 60 /2 ,
        marginRight: 14
    },
    userName :{
        fontSize: 16,
        fontWeight: '600',
    },
    userStatus: {
        fontSize: 12,
        fontWeight: '400',
    },
    textCard: {

    }
})