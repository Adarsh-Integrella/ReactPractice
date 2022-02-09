import React from "react";
// import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};
function Users(prop) {
  return (
    <div>
      <h1>{this.prop.params.id}</h1>
    </div>
  );
}

export default withRouter(Users);
