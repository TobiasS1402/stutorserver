import { Container } from '@components/layout/container'
import * as React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'
import { color, spaces } from '@/theme'

interface SearchBarProps {
  showFilter?: boolean
}

const defaultProps: SearchBarProps = {
  showFilter: false,
}

const SearchContainer = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  padding: ${spaces.xl}px ${spaces.xl3}px;
  border-radius: 5px;
  background-color: ${color.white};
`

const SearchInput = styled.TextInput`
  margin-left: ${spaces.xl}px;
  font-family: 'Lato-Regular';
  font-size: 17px;
  color: ${color.gray};
`

const Filter = styled.Pressable`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: ${spaces.xl}px;
  width: 50;
  height: 50;
  background-color: ${color.primary};
  border-radius: 5px;
`

export const SearchBar = (props: SearchBarProps) => {
  return (
    <Container marginVertical={spaces.xl5}>
      <SearchContainer>
        <FontAwesome name={'search'} size={18} color={color.gray} solid />
        <SearchInput autoCorrect={false} placeholder="Zoek een bijles" />
      </SearchContainer>
      {props.showFilter && (
        <Filter>
          <FontAwesome name={'sliders-h'} size={18} color={color.white} solid />
        </Filter>
      )}
    </Container>
  )
}

SearchBar.defaultProps = defaultProps
