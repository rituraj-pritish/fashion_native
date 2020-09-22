import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

import styles from './Counter.styled.js'

const Counter = ({ onIncrement, onDecrement, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          setCount(count + 1)
          onIncrement()
        }}
      >
        <AntDesignIcon name='plus' size={20} />
      </TouchableOpacity>
      <View style={styles.box}>
        <Text>{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          if (count === 0) return
          setCount(count - 1)
          onDecrement()
        }}
      >
        <AntDesignIcon name='minus' size={20} />
      </TouchableOpacity>
    </View>
  )
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  initialCount: PropTypes.number
}

export default Counter
