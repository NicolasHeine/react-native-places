import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { StyledTouchableOpacity, StyledText} from './style';

const Item = props => {
  return (
    <StyledTouchableOpacity onPress={props.onPress} visited={props.visited}>
      <StyledText visited={props.visited}>{props.label}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Item;
