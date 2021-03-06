import React from 'react';
import { View } from 'react-native';
import ProgressStep from "./ProgressStep";

const ProgressButtons = props => (
  <View style={props.styleBtnRow}>
    <View style={{ position: 'absolute', left: 60, bottom: 40 }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: 40 }}>{props.renderNextButton()}</View>
  </View>
);

ProgressButtons.defaultProps = {
    styleBtnRow: { flexDirection: 'row', marginTop: 90 },
};

export default ProgressButtons;
