import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.HeadText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, {backgroundColor: 'red'}]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'yellow'}]}>
            <Text>Yellow</Text>
        </View>
        <View style={[styles.card, {backgroundColor: 'green'}]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    HeadText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 'auto'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})