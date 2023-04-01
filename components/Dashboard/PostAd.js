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
} from "../common/InputField";
import Location from "./Location";
import { useEffect, useState } from "react";
import { countriesData } from "../data/countriesData";
import ImageUpload from "./ImageUpload";
import usePostData from "../../hooks/usePostData";
import useEditData from "../../hooks/useEditData";
import ImageField from "../common/ImageField";

function PostAd({ formTitle, services, ad }) {
  const [locationArray, setLocationArray] = useState([]);
  const [changeColor, setChangeColor] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setChangeColor(!changeColor);
  //   }, 500);

  //   return () => clearInterval(interval);
  // });

  const initialvalues = {
    // location: locationArray,
    tag: "ad",
    country: ad?.country || "",
    state: ad?.state || "",
    city: ad?.city || "",
    service: ad?.service || "",
    category: ad?.category || "",
    title: ad?.title || "",
    description: ad?.description || "",
    email: ad?.email || "",
    phone: ad?.phone || "",
    age: ad?.age || "",
    highlight_ad: ad?.highlight_ad || "",
    blink_ad: ad?.blink_ad || "",
    sponsored_ad: ad?.sponsored_ad || "",
    images: ad?.images || [],
    total_bill: ad?.total_bill || "",
  };

  // const handleSubmit = (values, formik) => {
  //   console.log(values);
  // };

  const { postData } = usePostData("ad");

  const postId = ad?.id;
  const { editData } = useEditData(postId);

  const handleSubmit = (values, formik) => {
    const redirect = "/post-ad/preview/single";
    const type = "single";
    const isPreview = ad?.preview === 1 && true;
    !ad
      ? postData(values, formik, redirect)
      : editData(values, formik, type, isPreview);
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
    const filteredCAtegories = filteredServices?.categories?.map(
      (category) => category
    );
    return filteredCAtegories;
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

  const citySelect = (values) => {
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

  // const statesSelect = (values) => {
  //   if (!values?.country) {
  //     return [""];
  //   } else {
  //     const country = countriesData.find(
  //       (country) => country.name === values?.country
  //     );
  //     const states = country?.states?.map((state) => state.name);
  //     return states;
  //   }
  // };

  // const citySelect = (values) => {
  //   if (!values.country || !values.state) {
  //     return [""];
  //   }

  //   const countries = countriesData?.find(
  //     (country) => country?.name === values?.country
  //   );

  //   const citiesValues = countries?.states?.find(
  //     (state) => state.name === values?.state
  //   );
  //   const cities = citiesValues?.cities?.map((city) => city);
  //   return cities;
  // };

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
                  {/* <Location setLocationArray={setLocationArray} /> */}
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
                  <SelectField
                    label="City"
                    placeholder="Select City"
                    name="city"
                    type="text"
                    options={citySelect(formik.values)}
                  />
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
                  />

                  {/* <div className="grid grid-cols-3 mb-[18px]">
                    <div className="">
                      <label htmlFor="images">Images </label>
                      <p className="text-xs">(Maximum 4 images)</p>
                    </div>

                    <div className="col-span-2">
                      <ImageUpload images={ad?.images} />
                    </div>
                  </div> */}

                  <div className="grid grid-cols-3 mb-[18px]">
                    <div className="">
                      <label htmlFor="images">Images </label>
                      <p className="text-xs">(Maximum 4 images)</p>
                    </div>

                    <div className="col-span-2">
                      <ImageField images={ad?.images} />
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
                        className=" button capitalize px-[12px] py-[7px] disabled:opacity-50"
                        disabled={!formik.values.images.length}
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

export default PostAd;
