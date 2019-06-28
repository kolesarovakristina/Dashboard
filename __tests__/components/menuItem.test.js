import React from "react";
import { shallow } from "enzyme";
import MenuItem from "../../src/components/MenuItem/index";
import StyledMenuItem from "../../src/components/MenuItem/styles";

describe("<MenuItem/>", () => {
    const component = shallow(<MenuItem 
        themeColor={false}
        href="dashboard"
        isAdmin={true}
       />);
  
    it("should render menu item component", () => {
        expect(component.exists()).toBe(true);
      });
      it("ThemeColor should be false", () => {
        expect(component.find(StyledMenuItem).props().dark).toEqual(false);
      }); 
      it("IsAdmin should be true", () => {
        expect(component.find(StyledMenuItem).props().isAdmin).toEqual(true);
      }); 
      it("To href should be string- /dashboard", () => {
        expect(component.find(StyledMenuItem).props().to).toEqual("dashboard");
      }); 
});