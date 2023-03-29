// import React from "react";
// import { default as ReactSelect } from "react-select";

// const MySelect = (props) => {
//   if (props.allowSelectAll) {
//     return (
//       <ReactSelect
//         {...props}
//         options={[props.allOption, ...props.options]}
//         onChange={(selected) => {
//           if (
//             selected !== null &&
//             selected.length > 0 &&
//             selected[selected.length - 1].value === props.allOption.value
//           ) {
//             return props.onChange(props.options);
//           }
//           return props.onChange(selected);
//         }}
//       />
//     );
//   }

//   return <ReactSelect {...props} />;
// };

// MySelect.defaultProps = {
//   allOption: {
//     label: "Select all",
//     value: "*",
//   },
// };

// export default MySelect;

import Select from "react-select";

function MySelect({ isMulti, options, onChange, cityFromBackend, fakeCities }) {
  // const defaultCities = fakeCities.map((city) => {
  //   return {
  //     value: city,
  //     label: city,
  //   };
  // });

  const defaultCities = Array(cityFromBackend).map((city) => {
    return {
      value: city,
      label: city,
    };
  });

  return (
    <Select
      isMulti={isMulti}
      options={options}
      onChange={onChange}
      defaultValue={defaultCities}
    />
  );
}

export default MySelect;
