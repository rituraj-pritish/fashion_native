import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Image, View, ActivityIndicator, StyleSheet } from 'react-native'

const ImageComponent = ({ source, style, hasSmallSpinner = false }) => {
  const [loading, setLoading] = useState(false)

  const dimensions = {
    width: style.width,
    height: style.height
  }

  return (
    <>
      <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={source}
        style={style}
      />
      {loading && <View style={[dimensions, styles.spinnerContainer]}>
        <ActivityIndicator size={hasSmallSpinner ? 'small' : 'large'} />
      </View>}
    </>
  )
}

ImageComponent.propTypes = {
  source: PropTypes.shape({
    uri: PropTypes.string.isRequired
  }),
  style: PropTypes.object,
  hasSmallSpinner: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  spinnerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f8fc'
  }
})

export default ImageComponent
