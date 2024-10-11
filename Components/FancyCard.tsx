import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.HeadText}>FancyCard</Text>
      <View style={styles.card}>
        <Image src={'https://picsum.photos/id/1/200/300'} style={{height:180, borderRadius: 6}} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Lorem Ipsum</Text>
            <Text style={styles.cardLabel}>Label</Text>
            <Text style={styles.cardDesc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book 
            </Text>
            <Text style={styles.cardFoot}>Footer Info</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 'auto'
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'pink',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowColor: 'yellow',
        borderRadius: 6
    },
    cardBody:{
        flex: 1,
        paddingHorizontal: 5,
        flexGrow: 1
    },
    cardTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2
    },
    cardLabel:{
        fontSize: 20,
        marginBottom: 4
    },
    cardDesc:{
        fontSize: 16,
        marginBottom: 6
    },
    cardFoot:{
        fontSize: 14,
    },
})