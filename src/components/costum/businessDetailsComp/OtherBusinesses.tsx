// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBusinesses } from "store/actions/business.actions";
// import { RootState } from "store/storeIndex";

// const OtherBusinesses: React.FC = () => {
//   const dispatch = useDispatch();
//   const businesses = useSelector(
//     (state: RootState) => state.businessModule.businesses
//   );

//   useEffect(() => {
//     dispatch(getBusinesses({}));
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Other Businesses</h1>
//       <ul>
//         {businesses.map((business) => (
//           <li key={business.id}>{business.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OtherBusinesses;
