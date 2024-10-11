import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWeb (website: string){
        Linking.openURL(website)
    }
  return (
    <View>
      <Text style={styles.HeadText}>ActionCard</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Browser Linking</Text>
        <Image src={'https://picsum.photos/id/1/200/300'} style={{height:180, borderRadius: 6}} />
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={ () => openWeb('https://www.lipsum.com/')}
            >
                <Text style={styles.cardLabel}>Read More !!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => openWeb('https://www.linkedin.com/in/mykagg/')}
            >
                <Text style={styles.cardLabel}>LinkedIN</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 'auto'
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'yellow',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowColor: 'yellow',
        borderRadius: 6
    },
    cardTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2
    },
    footer: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'space-between',
        flexDirection: 'row'
    },
    cardLabel:{
        fontSize: 20,
        marginBottom: 4,
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        borderRadius: 5
    },
})