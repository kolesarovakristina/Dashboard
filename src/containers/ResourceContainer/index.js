import { connect } from "react-redux";
import Resource from "Components/Resource";
import ResourceActions from "Actions/resource.action";

const mapStateToProps = state => ({
  resourceData: state.resourceReducer,
  resourceYearlyReducer: state.resourceYearlyReducer,
  themeColor: state.themeReducer.themeColor,
  accessToken: state.loginReducer.accessToken,
  dateRangeFilter: state.dateRangeFilter
});

const mapDispatchToProps = dispatch => ({
  fetchResourceData: () => {
    // fetch data for LABS(id 50) and Vault(id -1) team at once
    dispatch(ResourceActions.fetchResourceData(50));
    dispatch(ResourceActions.fetchResourceData(-1));
  },
  fetchResourceDataYearly: () => {
    // fetch data for LABS(id 50) and Vault(id -1) team at once
    dispatch(ResourceActions.fetchResourceData(50, true));
    dispatch(ResourceActions.fetchResourceData(-1, true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
