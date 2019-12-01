import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../assets'

export default MainLoader = prop => <ActivityIndicator color={Colors.red} size={prop.size} />