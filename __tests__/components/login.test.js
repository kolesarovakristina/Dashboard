import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../../src/components/LoginPage";
import FormInput from "../../src/components/FormInput";
import { Button } from "../../src/components/FormInput/styles";
import Error from "../../src/components/Error/error";

describe("<LoginPage/>", () => {
  const component = shallow(
    <LoginPage themeColor={false} errMessage="error" />
  );
  it("should render login page", () => {
    expect(component).toHaveLength(1);
  });

  it("theme color props should be false", () => {
    expect(component.instance().props.themeColor).toEqual(false);
  });

  it("errMessage props should be string", () => {
    expect(component.find(Error).props().errMessage).toEqual("error");
  });

  it("should containt submit button", () => {
    expect(component.find(Button).exists()).toBe(true);
  });

  it("username input min lenght should be greater than 9", () => {
    expect(
      component
        .find(FormInput)
        .at(0)
        .props().minLength
    ).toEqual(10);
  });

  it("password input placeholder should equal 'password' ", () => {
    expect(
      component
        .find(FormInput)
        .at(1)
        .props().placeholder
    ).toEqual("password");
  });
});
