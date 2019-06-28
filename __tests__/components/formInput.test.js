import React from "react";
import { shallow} from "enzyme";
import FormInput from "../../src/components/FormInput";
import { StyledInput } from "../../src/components/FormInput/styles";


describe("FormInput component", () => {
    const component = shallow(<FormInput 
      type="text"
      value="username"
      placeholder= "placeholder"
      required
      autocomplete="off"
      className="red"
      dark={true}
      isLogin={true}
      minLength={10}
      />);
  
    it("should render form input component", () => {
        expect(component.exists()).toBe(true);
      });

      it("Placeholder should be string-placeholder", () => {
        expect(component.find(StyledInput).props().placeholder).toEqual("placeholder");
      }); 
      it("Value should be string-username", () => {
        expect(component.find(StyledInput).props().value).toEqual("username");
      }); 
      it("Type should be string -text", () => {
        expect(component.find(StyledInput).props().type).toEqual("text");
      }); 
    it("Min length shoul be 10", () => {
        expect(component.find(StyledInput).props().minLength).toEqual(10);
      }); 
    it("Autocomplete should be off", () => {
        expect(component.find(StyledInput).props().autocomplete).toEqual("off");
      });
      it("ClassName should be string- red", () => {
        const className = className
        expect(component.find(StyledInput).props().className).toEqual("red");
      }); 
      it("It should send props dark", () => {
        expect(component.find(StyledInput).props().dark).toEqual(true);
      }); 
      it("Is login props should be true", () => {
        expect(component.find(StyledInput).props().isLogin).toEqual(true);
      }); 
      it("Input should be required", () => {
        expect(component.find(StyledInput).required).toBeTruthy;
      }); 
});