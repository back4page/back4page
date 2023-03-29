import { Field, useFormikContext } from "formik";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { countriesData } from "../data/countriesData";
import MySelect from "./MySelect";
import Select from "react-select";

export const FileField = ({
  label,
  name,
  handleImageChange,
  imagesPreview,
  deleteImage,
  formik,
  selectedFiles,
  renderImages,
}) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <div className="">
        <label htmlFor={name}>{label} </label>
        <p className="text-xs">(Maximum 4 images)</p>
      </div>
      <div className="col-span-2">
        {/* {imagesPreview.length < 4 ? ( */}
        <input
          type="file"
          id={name}
          className=""
          onChange={(e) => handleImageChange(e, formik)}
          accept="image/*"
          multiple={true}
          // disabled={imagesPreview.length > 3 && true}
        />
        {/* ) : (
          <p className="py-1">Maximum Image limit reached</p>
        )} */}

        {/* <div className="mt-3 flex gap-2">
          {renderImages(selectedFiles, formik)}
        </div> */}

        {/* <div className="mt-3 flex gap-2">
          {imagesPreview.length > 0 &&
            imagesPreview.map((item, i) => (
              <div key={i} className="relative w-[90px] h-[90px]">
                <Image src={item} alt="image" layout="fill" objectFit="cover" />
                <button
                  className="absolute top-1 right-1 p-[2px] bg-white shadow rounded-full text-slate-700 text-sm"
                  onClick={() => deleteImage(i, formik)}
                >
                  <FaTimes />
                </button>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

// export const FileField = ({ label, name, handleChange, imagesPreview }) => {
//   return (
//     <div className="grid grid-cols-3 mb-[18px]">
//       <div className="">
//         <label htmlFor={name}>{label} </label>
//         <p className="text-xs">(Maximum 4 images)</p>
//       </div>
//       <div className="col-span-2">
//         <input
//           type="file"
//           id={name}
//           className=""
//           onChange={handleChange}
//           accept="image/*"
//           multiple={true}
//         />

//         <div className="mt-3 flex gap-2">
//           {Array.from(imagesPreview).map((image, i) => (
//             <div key={i} className="relative w-[90px] h-[90px]">
//               <Image
//                 src={image ? URL.createObjectURL(image) : null}
//                 alt="image"
//                 layout="fill"
//                 objectFit="cover"
//                 // width={60}
//                 // height={60}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export const TextField = ({ label, name, icon, ...props }) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-8 lg:pr-[10px]">
        {label}
      </label>

      <div className="col-span-2">
        <div className="flex">
          <div className="py-[11px] px-[12px] border-r border-slate-300 bg-slate-200 text-slate-500 font-extralight text-sm rounded-l cursor-default">
            {icon}
          </div>
          <Field
            className="bg-white font-normal text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded-r"
            id={name}
            name={name}
            {...props}
            // required
          />
        </div>
      </div>
    </div>
  );
};

export const CodeField = ({ label, name, icon, ...props }) => {
  return (
    <div className="flex justify-between gap-20">
      <label htmlFor={name} className="col-span-1">
        {label}
      </label>

      <div className="col-span-2 ">
        <div className="flex">
          <div className="py-[11px] px-[12px] border-r border-slate-300 bg-slate-200 text-slate-500 font-extralight text-sm rounded-l cursor-default">
            {icon}
          </div>
          <Field
            className="bg-white font-normal text-black px-3 py-[6px] w-[130px] outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded-r"
            id={name}
            name={name}
            {...props}
            // required
          />
        </div>
      </div>
    </div>
  );
};

// export const TextField2 = ({ label, name, icon, ...props }) => {
//   return (
//     <div className="flex justify-between items-center lg:gap-20 mb-[18px]">
//       <label htmlFor={name} className="pr-6 lg:pr-[115px]">
//         {label}
//       </label>

//       <div className="flex">
//         <div className="py-[11px] px-[12px] border-r border-slate-300 bg-slate-200 text-slate-500 font-extralight text-sm rounded-l cursor-default">
//           {icon}
//         </div>
//         <Field
//           className="bg-white text-black px-3 py-[6px] w-[170px] lg:min-w-[411px] outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded-r"
//           id={name}
//           name={name}
//           {...props}
//           required
//         />
//       </div>
//     </div>
//   );
// };

export const TextArea = ({ label, name, ...props }) => {
  const {
    values: { reason },
    setFieldValue,
  } = useFormikContext();

  const value1 = "I am a robot (avoid)";
  const value2 = "I am not a human (avoid)";
  const value3 = "Complain about a post.";
  const value4 = "My transaction is not showing.";
  const value5 = "My post was rejected.";

  const message1 =
    "All right! Be more smart robot to solve our all problems and let us rest, enjoy n fun.";
  const message2 =
    "Each ad post has its own complain icon, please complain from there to make it easy for us to find and solve the problem accordingly.";
  const message3 =
    "A transaction may take a few minutes to a few days to appear depends on the mode of payment you used, please be patient. We try best to make it faster.";
  const message4 =
    "A post may be rejected if it is prone to child pornography, human traffiking, drug, weapons, hate speech, promotion of sensitive illegal items under the law of the particular area. To make internet more usable, we have to do it. Please edit your post and update.";

  useEffect(() => {
    switch (reason) {
      case value1:
        setFieldValue(name, message1);
        break;
      case value2:
        setFieldValue(name, message1);
        break;
      case value3:
        setFieldValue(name, message2);
        break;
      case value4:
        setFieldValue(name, message3);
        break;
      case value5:
        setFieldValue(name, message4);
        break;
      default:
        setFieldValue(name, "");
        break;
    }
  }, [reason, setFieldValue, name]);

  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-6 lg:pr-[115px]">
        {label}
      </label>
      <div className="col-span-2 flex">
        <Field
          as="textarea"
          rows="6"
          className="bg-white font-normal text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded"
          id={name}
          name={name}
          {...props}
        />
      </div>
    </div>
  );
};

export const TextArea2 = ({ label, name, ...props }) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-6 lg:pr-[115px]">
        {label}
      </label>
      <div className="col-span-2 flex">
        <Field
          as="textarea"
          rows="10"
          className="bg-white font-normal text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded"
          id={name}
          name={name}
          {...props}
        />
      </div>
    </div>
  );
};

export const SelectField = ({
  label,
  name,
  placeholder,
  options,
  required,
}) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-6 lg:pr-[10px]">
        {label}
      </label>
      <div className="col-span-2">
        <div className="flex">
          <Field
            as="select"
            name={name}
            id={name}
            required={required}
            className="bg-white font-normal text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded"
          >
            <option
              value=""
              className="text-slate-400"
              defaultValue={true}
              hidden
            >
              {placeholder}
            </option>
            {/* {options &&
              options.map((option, i) => (
                <option
                  key={i}
                  value={option}
                  className=""
                  disabled={option.includes("- - - ") && true}
                >
                  {option}
                </option>
              ))} */}
            {options ? (
              options.map((option, i) => (
                <option
                  key={i}
                  value={option}
                  className=""
                  disabled={option?.includes("- - - ") && true}
                >
                  {option}
                </option>
              ))
            ) : (
              <option value="" className=""></option>
            )}
          </Field>
        </div>
      </div>
    </div>
  );
};

export const SelectMultiple = ({
  label,
  name,
  // citySelect,
  citiesOptions,
  countriesOptions,
  handleCountryChange,
  handleCityChange,
  countrySelected,
  citySelected,
}) => {
  const { values } = useFormikContext();

  const citySelect = () => {
    const { country: countryValue, state: stateValue } = values && values;

    if (!stateValue) {
      return ["- - - Select State First - - -"];
    }
    const countries = countriesData?.find(
      (country) => country.name === countryValue
    );

    const citiesValues = countries?.states?.find(
      (state) => state.name === stateValue
    );
    const cities = citiesValues?.cities?.map((city) => city);
    return cities;
    // }
  };

  console.log(citySelect());

  const citiesValue = citySelect();

  // const citiesOptions = citiesValue?.map((city) => {
  //   return {
  //     value: city,
  //     label: city,
  //   };
  // });

  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor="countries" className="col-span-1 pr-6 lg:pr-[10px]">
        Countries
      </label>
      <div className="col-span-2 text-black font-normal">
        <MySelect
          isMulti
          // options={countriesOptions}
          // options={citiesOptions}
          // // closeMenuOnSelect={false}
          // // // instanceId={countriesId}
          // // hideSelectedOptions={false}
          // // // components={{ Option, MultiValue }}
          // // // onChange={handleCountryChange}
          // onChange={handleCityChange}
          // // allowSelectAll={true}
          // // // value={countrySelected}
          // value={citySelected}
        />
      </div>
    </div>
  );
};

export const CheckboxField = ({ label, name, placeholder, option }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="px-3 py-1 bg-slate-200 rounded">
        <Field type="checkbox" name={name} className="" />
      </div>
      <label>{label}</label>
    </div>
  );
};

export const MultiSelectField = ({ previousCities }) => {
  const { values, setFieldValue } = useFormikContext();
  const fakeCities = ["x", "y", "z"];
  const citySelect = () => {
    const { country: countryValue, state: stateValue } = values && values;

    if (!stateValue) {
      return ["- - - Select State First - - -"];
    }
    const countries = countriesData?.find(
      (country) => country.name === countryValue
    );

    const citiesValues = countries?.states?.find(
      (state) => state.name === stateValue
    );
    const cities = citiesValues?.cities?.map((city) => city);
    // fakeCities && fakeCities.map((city) => cities.unshift(city));
    return cities;
  };

  const cities = citySelect();

  const citiesOptions = cities?.map((city) => {
    return {
      value: city,
      label: city,
    };
  });

  const handleCityChange = (selected) => {
    const values = selected?.map((value) => value.value);

    setFieldValue("city", values);
  };

  const defaultCities =
    previousCities &&
    Array(previousCities).map((city) => {
      return {
        value: city,
        label: city,
      };
    });

  // const defaultCities =
  //   previousCities &&
  //   previousCities.map((city) => {
  //     return {
  //       value: city,
  //       label: city,
  //     };
  //   });

  // const defaultCity = previousCities && {
  //   value: previousCities,
  //   label: previousCities,
  // };

  return (
    <Select
      isMulti
      options={citiesOptions}
      onChange={handleCityChange}
      defaultValue={defaultCities}
      // defaultValue={defaultCity}
      instanceId="react-select-multi"
    />
  );
};

// export const TestMulti = ({ cityValue, previousCities }) => {
//   const { values, setFieldValue } = useFormikContext();
//   const fakeCities = ["x", "y", "z"];
//   const citySelect = () => {
//     const { country: countryValue, state: stateValue } = values && values;

//     if (!stateValue) {
//       return ["- - - Select State First - - -"];
//     }
//     const countries = countriesData?.find(
//       (country) => country.name === countryValue
//     );

//     const citiesValues = countries?.states?.find(
//       (state) => state.name === stateValue
//     );
//     const cities = citiesValues?.cities?.map((city) => city);
//     // fakeCities && fakeCities.map((city) => cities.unshift(city));
//     return cities;
//   };

//   const cities = citySelect();

//   // console.log("ccc", cities);

//   // const citiesOptions = [{ value: "city", label: "city" }];

//   const citiesOptions = cities?.map((city) => {
//     return {
//       value: city,
//       label: city,
//     };
//   });

//   // const citiesOptions = cities?.map((city) => {
//   //   return {
//   //     value: city,
//   //     label: city,
//   //   };
//   // });

//   const handleCityChange = (selected) => {
//     const values = selected?.map((value) => value.value);
//     // console.log("selected", values);
//     setFieldValue("city", values);
//     // setCityValues(values);
//   };

//   // const defaultValue = () => {
//   //   return citiesOptions
//   //     ? citiesOptions?.find((option) => option === values?.city)
//   //     : "";
//   // };

//   // const x = defaultValue();

//   return (
//     <MySelect
//       isMulti
//       options={citiesOptions}
//       // value={defaultValue()}
//       // value={values.city}
//       // value={cityValues}
//       onChange={handleCityChange}
//       previousCities={previousCities}
//       fakeCities={fakeCities}
//       // defaultValue={["z", "x", "y"]}
//       // options={countriesOptions}
//       // options={citiesOptions}
//       // // closeMenuOnSelect={false}
//       // // // instanceId={countriesId}
//       // // hideSelectedOptions={false}
//       // // // components={{ Option, MultiValue }}
//       // // // onChange={handleCountryChange}
//       // onChange={handleCityChange}
//       // // allowSelectAll={true}
//       // // // value={countrySelected}
//       // value={citySelected}
//     />
//   );
// };
