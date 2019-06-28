import React from "react";
import { Wrapper, ItemWrapper, Bar, LegendTitle } from "./styles";

class VelocityChartLegend extends React.Component {
  render() {
    const value = this.props.expectedValues;
    const { dark } = this.props;
    return (
      <Wrapper>
        <ItemWrapper dark={dark}>
          <LegendTitle>Recommended values for next sprint:</LegendTitle>
          <Bar>
            {value.minValue} - {`${value.maxValue}` + " SP"}
          </Bar>
        </ItemWrapper>
      </Wrapper>
    );
  }
}

export default VelocityChartLegend;
