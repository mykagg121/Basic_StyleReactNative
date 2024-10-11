import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Elevated = () => {
  return (
    <View>
        <Text style={styles.HeadText}>Elevated</Text>
        <ScrollView horizontal={true}>

            <View style={[styles.card]}>
                <Text style={{color:'white'}}>Mayank</Text>
            </View>
            <View style={[styles.card]}>
                <Text style={{color:'white'}}>is</Text>
            </View>
            <View style={[styles.card]}>
                <Text style={{color:'white'}}>Doing</Text>
            </View>
            <View style={[styles.card]}>
                <Text style={{color:'white'}}>Great</Text>
            </View>
            <View style={[styles.card]}>
                <Text style={{color:'white'}}>!!!!</Text>
            </View>
            <View style={[styles.card]}>
                <Text style={{color:'white'}}>Partyyy</Text>
            </View>
        
        </ScrollView>
    </View>
  )
}

export default Elevated

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 'auto'
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        elevation: 4,
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowColor: 'red'
    }
})