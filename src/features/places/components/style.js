import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: white;
  border-color: ${props => props.visited ? 'red' : 'black'};;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-left: 15px;
`;

export const StyledText = styled.Text`
  color: ${props => props.visited ? 'red' : 'blue'};
  font-size: 25px;
  text-decoration-line: ${props => props.visited ? 'line-through' : 'none'};
`;
