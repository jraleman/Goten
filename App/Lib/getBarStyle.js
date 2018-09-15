function getBarStyle() = { (return undefined); }

// function getBarStyle = (routeIndex, props) => {
//     var barStyle;
//     var route;
//
//     barStyle = 'default';
//     route = props.nav.routes[routeIndex].routeName;
//     if (['screenNameHere', 'andHere'].indexOf(route) >= 0) {
//       barStyle = 'dark-content';
//     }
//     else {
//       barStyle = 'light-content';
//     }
//     return (barStyle);
// }
// ----------------------------------------------------------------------
//
// usage:
//
//   <StatusBar barStyle={ getBarStyle(int routeIndex, { ...props }) } />

export default getBarStyle;
