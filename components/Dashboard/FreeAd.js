import { Formik, Form, useFormikContext } from "formik";
import {
  FaAlignLeft,
  FaAt,
  FaComments,
  FaHashtag,
  FaLock,
  FaTimes,
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
import { useEffect, useState, useRef } from "react";
import { countriesData } from "../data/countriesData";
import Image from "next/image";
import ImageUpload from "./ImageUpload";
import usePostData from "../../hooks/usePostData";
import { useRouter } from "next/router";
import useEditData from "../../hooks/useEditData";
import useImageUpload from "../../hooks/useImageUpload";
import ImageField from "../common/ImageField";

function FreeAd({ formTitle, services, ad }) {
  const [locationArray, setLocationArray] = useState([]);
  const [changeColor, setChangeColor] = useState(false);

  const router = useRouter();

  // const formikRef = useRef();

  // console.log(formikRef);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setChangeColor(!changeColor);
  //   }, 500);

  //   return () => clearInterval(interval);
  // });

  // const [imageFiles, setImageFiles] = useState([]);
  // const [imageUrl, setImageUrl] = useState([]);
  // const { uploadImage } = useImageUpload(imageFiles, imageUrl, setImageUrl);
  const initialvalues = {
    // location: locationArray,
    tag: "free",
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
    images: ad?.images || [],
  };

  // const handleSubmit = (values, formik) => {
  //   // const data = values.images;
  //   // console.log([...data.entries()]);
  //   console.log(values);
  // };

  const { postData } = usePostData("free");

  const postId = ad?.id;
  const { editData } = useEditData(postId);

  const handleSubmit = async (values, formik) => {
    // uploadImage(values);

    const redirect = "post-ad/preview/single";
    const type = "single";
    const isPreview = ad?.preview === 1 && true;
    !ad
      ? postData(values, formik, redirect)
      : editData(values, formik, type, isPreview);
  };

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

  return (
    <div className="font-roboto py-2 flex justify-center font-thin overflow-hidden">
      <div className="lg:w-[540px]">
        <h1 className="text-center text-[32px] text-white">
          {formTitle && formTitle}
        </h1>

        <div className="mt-4 py-4 border-t border-gray-800/50">
          <p className="mb-4 text-custom-yellow2 font-sans font-normal">
            Not enough credit. Please
            <span className="link font-bold">Buy Credit</span>
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
                    required
                  />
                  <SelectField
                    label="State"
                    placeholder="Select State"
                    name="state"
                    type="text"
                    options={statesSelect(formik.values)}
                    required
                  />
                  <SelectField
                    label="City"
                    placeholder="Select City"
                    name="city"
                    type="text"
                    options={citySelect(formik.values)}
                    required
                  />
                  <SelectField
                    label="Service:"
                    placeholder="Select Service"
                    name="service"
                    type="text"
                    options={serviceOptions}
                    required
                  />
                  <SelectField
                    label="Category:"
                    placeholder="Select Category"
                    name="category"
                    type="text"
                    options={categoryOptions(formik.values.service)}
                    required
                  />
                  <TextField
                    label="Ad Title"
                    name="title"
                    type="text"
                    icon={<FaAlignLeft />}
                    required
                  />
                  <TextArea2
                    label="Unique description"
                    name="description"
                    type="text"
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    icon={<FaAt />}
                    required
                  />
                  <TextField
                    label="Contact No."
                    name="phone"
                    type="text"
                    icon={<FaComments />}
                    required
                  />
                  <TextField
                    label="Age"
                    name="age"
                    type="number"
                    icon={<FaHashtag />}
                    required
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

export default FreeAd;
