import { Formik, Form } from "formik";
import {
  FaAlignLeft,
  FaAt,
  FaComments,
  FaHashtag,
  FaLock,
} from "react-icons/fa";
import Link from "next/link";
import {
  TextField,
  SelectField,
  TextArea2,
  CheckboxField,
  FileField,
  SelectMultiple,
} from "../common/InputField";
import Location from "./Location";
import { useEffect, useId, useState } from "react";
import { countriesData } from "../data/countriesData";
import Select, { components } from "react-select";
import MySelect from "../common/MySelect";
import ImageUpload from "./ImageUpload";
import usePostData from "../../hooks/usePostData";

function MultiLocationAd({ formTitle, services }) {
  const [locationArray, setLocationArray] = useState([]);
  const [changeColor, setChangeColor] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setChangeColor(!changeColor);
  //   }, 500);

  //   return () => clearInterval(interval);
  // });

  const [imagesPreview, setImagesPreview] = useState([]);

  const [countrySelected, setCountrySelected] = useState(null);
  const [stateSelected, setStateSelected] = useState(null);
  const [citySelected, setCitySelected] = useState(null);

  const countries = countrySelected?.map((option) => option.value);
  const states = stateSelected?.map((option) => option.value);

  const initialvalues = {
    // location: locationArray,
    tag: "multiple",
    country: "",
    state: "",
    city: citySelected,
    service: "",
    category: "",
    title: "",
    description: "",
    email: "",
    phone: "",
    age: "",
    highlight_ad: "",
    blink_ad: "",
    sponsored_ad: "",
    images: [],
    // city_featured: "",
    // cover_star: "",
    total_bill: "",
  };

  // const handleSubmit = (values, formik) => {
  //   console.log(values);
  // };

  const { postData } = usePostData();

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  const imageUpload = (e, formik) => {
    // const files = e.target.files;
    // setImagesPreview([...imagesPreview, ...files]);

    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    // console.log(ImagesArray);
    setImagesPreview([...imagesPreview, ...ImagesArray]);

    formik.setFieldValue("images", [...imagesPreview, ...ImagesArray]);
  };

  const deleteImage = (e, formik) => {
    const updatedImages = imagesPreview.filter((item, index) => index !== e);
    setImagesPreview(updatedImages);
    formik.setFieldValue("images", updatedImages);
    // console.log(s);
  };

  const sponsoredAdOptions = [
    "Not Now $0.0",
    "7 days $10.00",
    "14 days $18.00",
    "30 days $30.00",
    "90 days $60.00",
  ];

  const serviceOptions = services.map((category) => category?.name);

  const categoryOptions = (value) => {
    if (!value) {
      return ["- - - Select Service First - - -"];
    }
    const filteredServices = services.find((service) => service.name === value);
    const filteredCategories = filteredServices?.categories?.map(
      (category) => category
    );
    return filteredCategories;
  };

  const countriesSelect = countriesData.map((country, i) => [country.name]);

  const statesSelect = (values) => {
    const { country: countryValue } = values && values;
    if (!countryValue) {
      return ["- - - Select Country First - - -"];
    }
    const country = countriesData.find(
      (country) => country.name === countryValue
    );
    const states = country?.states?.map((state) => state.name);
    return states;
  };

  // const citySelect = (values) => {
  //   const { country: countryValue, state: stateValue } = values && values;

  //   if (!stateValue) {
  //     return ["- - - Select State First - - -"];
  //   }
  //   const countries = countriesData?.find(
  //     (country) => country.name === countryValue
  //   );

  //   const citiesValues = countries?.states?.find(
  //     (state) => state.name === stateValue
  //   );
  //   const cities = citiesValues?.cities?.map((city) => city);
  //   return cities;
  // };

  // const cities = citySelect();

  // const citiesOptions = cities?.map((city) => {
  //   return {
  //     value: city,
  //     label: city,
  //   };
  // });

  // const citiesOptions = {
  //   value: "city",
  //   label: "city",
  // };

  const [dropdown, setDropdown] = useState(false);
  const [stateDropDown, setStateDropDown] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");

  const statesData = countriesData.find(
    (country) => country.name === countryName
  );

  const toggle = (index) => {
    if (countryDropDown === index) {
      return setCountryDropDown(null);
    }

    setCountryDropDown(index);
  };

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const MultiValue = (props) => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );

  const selectedStates = () => {
    const country = countries?.map((v) =>
      countriesData.find((country) => country.name.includes(v))
    );

    // Array.prototype.concatAll = function () {
    //   var results = [];
    //   this.forEach(function (subArray) {
    //     subArray.forEach(function (subArrayValue) {
    //       results.push(subArrayValue);
    //     });
    //   });
    //   return results;
    // };

    // const x = country?.map((c) => c?.states).concatAll();

    const x = country?.flatMap((c) => c?.states);

    const states = x?.map((s) => s.name);

    return states;
  };

  const selectedCities = () => {
    const filteredStates = states?.map((s) =>
      countriesData?.map((c) =>
        c?.states?.find((state) => state?.name?.includes(s))
      )
    );

    const x = filteredStates?.flatMap((c) => c);

    const z = x?.flatMap((y) => y?.cities);

    const citiesFiltered = z?.filter((value) => value !== undefined);

    return citiesFiltered;
  };

  const statesValue = selectedStates();

  // const citiesValue = selectedCities();
  const citiesValue = citySelect();

  const countriesOptions = countriesData.map((country) => {
    return {
      value: country.name,
      label: country.name,
    };
  });

  const statesOptions = statesValue?.map((state) => {
    return {
      value: state,
      label: state,
    };
  });

  // const citiesOptions = citiesValue?.map((state) => {
  //   return {
  //     value: state,
  //     label: state,
  //   };
  // });

  // const citiesOptions = citiesValue?.map((city) => {
  //   return {
  //     value: city,
  //     label: city,
  //   };
  // });

  const countriesId = useId();
  const statesId = useId();
  const citiesId = useId();

  const handleCountryChange = (selected) => {
    setCountrySelected(selected);
  };

  const handleStateChange = (selected) => {
    setStateSelected(selected);
  };

  const handleCityChange = (selected) => {
    setCitySelected(selected);
  };

  return (
    <div className="font-roboto py-2 flex justify-center font-thin">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white">
          {formTitle && formTitle}
        </h1>

        <div className="mt-4 py-4 border-t border-gray-800/50">
          <p className="mb-4 text-custom-yellow2 font-sans font-normal">
            Not enough credit. Please
            <span className="link font-bold"> Buy Credit</span>
          </p>

          <Formik
            // innerRef={formikRef}
            initialValues={initialvalues}
            // validationSchema={validate}
            // enableReinitialize
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="">
                  <SelectField
                    label="Country"
                    placeholder="Select Country"
                    name="country"
                    type="text"
                    options={countriesSelect}
                  />
                  <SelectField
                    label="State"
                    placeholder="Select State"
                    name="state"
                    type="text"
                    options={statesSelect(formik.values)}
                  />
                  <SelectMultiple
                    // citySelect={citySelect}
                    countrySelected={countrySelected}
                    handleCountryChange={handleCountryChange}
                    handleCityChange={handleCityChange}
                    countriesOptions={countriesOptions}
                    citiesOptions={citiesOptions}
                    citySelected={citySelected}
                  />

                  {/* <SelectMultiple
                    label="City"
                    placeholder="Select City"
                    name="city"
                    type="text"
                    // options={citySelect(formik.values)}
                    citiesOptions={citiesOptions}
                  /> */}
                  {/* <SelectField
                    label="City"
                    placeholder="Select City"
                    name="city"
                    type="text"
                    options={citySelect(formik.values)}
                  /> */}
                  {/* <div className="grid grid-cols-3 mb-[18px]">
                    <label
                      htmlFor="countries"
                      className="col-span-1 pr-6 lg:pr-[10px]"
                    >
                      Countries
                    </label>
                    <div className="col-span-2 text-black font-normal">
                      <MySelect
                        isMulti
                        options={countriesOptions}
                        closeMenuOnSelect={false}
                        instanceId={countriesId}
                        hideSelectedOptions={false}
                        // components={{ Option, MultiValue }}
                        onChange={handleCountryChange}
                        allowSelectAll={true}
                        value={countrySelected}
                      />
                    </div>
                  </div> */}

                  {/* <div className="grid grid-cols-3 mb-[18px]">
                    <label
                      htmlFor="states"
                      className="col-span-1 pr-6 lg:pr-[10px]"
                    >
                      States
                    </label>
                    {countrySelected ? (
                      <div className="col-span-2 text-black font-normal">
                        <MySelect
                          isMulti
                          options={statesOptions}
                          closeMenuOnSelect={false}
                          instanceId={statesId}
                          hideSelectedOptions={false}
                          components={{ Option, MultiValue }}
                          onChange={handleStateChange}
                          allowSelectAll={true}
                          value={stateSelected}
                        />
                      </div>
                    ) : (
                      <div className="bg-white px-3 py-[5px] rounded col-span-2 text-slate-700 font-normal opacity-90">
                        - - - Select Country First - - -
                      </div>
                    )}
                  </div> */}

                  {/* <div className="grid grid-cols-3 mb-[18px]">
                    <label
                      htmlFor="cities"
                      className="col-span-1 pr-6 lg:pr-[10px]"
                    >
                      Cities
                    </label>
                    {stateSelected ? (
                      <div className="col-span-2 text-black font-normal">
                        <MySelect
                          isMulti
                          options={citiesOptions}
                          closeMenuOnSelect={false}
                          instanceId={citiesId}
                          hideSelectedOptions={false}
                          components={{ Option, MultiValue }}
                          onChange={handleCityChange}
                          allowSelectAll={true}
                          value={citySelected}
                        />
                      </div>
                    ) : (
                      <div className="bg-white px-3 py-[5px] rounded col-span-2 text-slate-700 font-normal opacity-90">
                        - - - Select State First - - -
                      </div>
                    )}
                  </div> */}
                  <SelectField
                    label="Service:"
                    placeholder="Select Service"
                    name="service"
                    type="text"
                    options={serviceOptions}
                  />
                  <SelectField
                    label="Category:"
                    placeholder="Select Category"
                    name="category"
                    type="text"
                    options={categoryOptions(formik.values.service)}
                  />
                  <TextField
                    label="Ad Title"
                    name="title"
                    type="text"
                    icon={<FaAlignLeft />}
                  />
                  <TextArea2
                    label="Unique description"
                    name="description"
                    type="text"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    icon={<FaAt />}
                  />
                  <TextField
                    label="Contact No."
                    name="phone"
                    type="text"
                    icon={<FaComments />}
                  />
                  <TextField
                    label="Age"
                    name="age"
                    type="number"
                    icon={<FaHashtag />}
                  />
                  <div className="grid grid-cols-3 mb-[18px]">
                    <p className="col-span-1">Approval Fees:</p>
                    <div className="col-span-2 flex items-center gap-5 lg:gap-[120px]">
                      <p className="bg-slate-200 text-slate-600 px-4 py-1 rounded font-normal text-[15px]">
                        $0.50
                      </p>
                      <CheckboxField
                        label="Highlight Ad"
                        name="highlight_ad"
                        option="chekced"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mb-[18px]">
                    <p className="col-span-1">Blink Ad::</p>
                    <div className="col-span-2 flex items-center gap-2 text-[18px]">
                      <CheckboxField
                        // label="Highlight Ad"
                        name="blink_ad"
                        option="chekced"
                        type="checkbox"
                      />
                      <p
                        className={` text-white px-4 py-[5px] font-normal ${
                          changeColor
                            ? "bg-custom-fuschsia"
                            : "bg-custom-emerald"
                        }`}
                      >
                        Blink Ad Like This
                      </p>
                    </div>
                  </div>
                  <SelectField
                    label="Sponsored Ad:"
                    placeholder="Select Sponsored Ad"
                    name="sponsored_ad"
                    type="text"
                    options={sponsoredAdOptions}
                    formik={formik}
                  />
                  <div className="grid grid-cols-3 mb-[18px]">
                    <div className="">
                      <label htmlFor="images">Images </label>
                      <p className="text-xs">(Maximum 4 images)</p>
                    </div>

                    <div className="col-span-2">
                      <ImageUpload />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mb-[18px]">
                    <p className="col-span-1">Total Bill:</p>
                    <div className="col-span-2 flex items-center gap-5 lg:gap-[120px]">
                      <p className="bg-slate-200 text-slate-600 px-4 py-1 rounded font-normal text-[15px]">
                        $0.50
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3">
                    <div className="col-start-2 col-span-2">
                      <button
                        type="submit"
                        className=" button capitalize px-[12px] py-[7px]"
                      >
                        Post Ad
                      </button>
                      <div className="mt-3">
                        <p className="By clicking on Post Ad you agreed to"></p>
                        <p>
                          01. No Child abused. (Minimum 18, 21 is suggested).
                        </p>
                        <p>02. Not post of illegal content.</p>
                        <p>03. No sex trafficking.</p>
                        <p>04. Agreed to Payment agreement TOS.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default MultiLocationAd;
