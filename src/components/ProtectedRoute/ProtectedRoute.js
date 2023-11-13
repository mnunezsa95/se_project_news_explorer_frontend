import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  return <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>;
};

export default ProtectedRoute;

// import React, { useEffect } from "react";
// import { Route, Redirect } from "react-router-dom";

// const ProtectedRoute = ({ isLoggedIn, setActiveModal, children, ...props }) => {
//   useEffect(() => {
//     if (!isLoggedIn) {
//       setActiveModal("signin");
//     }
//   }, [isLoggedIn, setActiveModal]);

//   return (
//     <Route {...props}>
//       {isLoggedIn ? children : <Redirect to="/" />}
//     </Route>
//   );
// };

// export default ProtectedRoute;
