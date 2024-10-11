import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import Elevated from './Components/Elevated'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import Contact from './Components/Contact'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <Elevated />
        <FancyCard />
        <ActionCard />
        <Contact />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App