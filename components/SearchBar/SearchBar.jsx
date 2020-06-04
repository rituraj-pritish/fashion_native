import React, { useState } from 'react'

import { SearchIcon, SearchBarWrapper } from './SearchBar.styled.js'
import { View, TextInput } from 'react-native'

const SearchBar = () => {
  const [showBar, setShowBar] = useState(false)
  const [query, setQuery] = useState('')

  const focusInput = e => {
    if (e) e.focus()
  }

  return (
    <>
      <SearchIcon
        name='search'
        size={26}
        color='black'
        onPress={() => setShowBar(true)}
      />
      {showBar && (
        <SearchBarWrapper
          isVisible={showBar}
          backdropOpacity={0}
          onBackdropPress={() => setShowBar(false)}
        >
          <TextInput
            ref={focusInput}
            value={query}
            onChangeText={text => setQuery(text)}
          />
        </SearchBarWrapper>
      )}
    </>
  )
}

export default SearchBar
