import React from "react";
import { Wrapper, Button } from "./styles";

const ReloadButton = ({isAdmin,reloadDataFunc}) => {
  return (

    <Wrapper isAdmin={isAdmin}>
      <Button
        type="button"
        onClick={reloadDataFunc}
      >
        Reload
            </Button>
    </Wrapper>
  );
}
export default ReloadButton;
