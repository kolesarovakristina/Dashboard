import React from "react";
import PropTypes from "prop-types";
import { Wrapper, ItemWrapper, Bar } from "./styles";

const ChartLegend = ({ dark }) => (
  <Wrapper>
    <ItemWrapper dark={dark}>
      <Bar color="rgb(26, 152, 80)">{"100% ≥ 80%"}</Bar>
      <Bar color="rgb(243, 145, 53)">{"80% ≥ 60%"}</Bar>
      <Bar color="rgb(189, 0, 38)">{"60% > 0"}</Bar>
    </ItemWrapper>
  </Wrapper>
);

ChartLegend.propTypes = {
  dark: PropTypes.bool.isRequired
};

export default ChartLegend;
