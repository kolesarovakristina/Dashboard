import React from "react";
import { shallow } from "enzyme";
import ReliabilityComponent from "../../src/components/Reliability/index";
import { createMemoryHistory } from "history";
import NoSprints from "../../src/components/Velocity/styles";

describe("<RealibiltyComponent/>", () => {
  const history = createMemoryHistory("/dashboard/reliability");
  const component = shallow(<ReliabilityComponent history={history} />);

  it("should render reliabilty component", () => {
    expect(component.exists()).toBe(true);
  });

  it("No Sprints component should exists because there are no data to display", () => {
    expect(component.find(NoSprints).exists()).toBeTruthy;
  });

  it("No Sprints component theme color props should be false", () => {
    expect(component.find(NoSprints).props().themeColor).toBeFalsy;
  });
});
