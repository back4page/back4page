import { useFormikContext } from "formik";
import React from "react";

function FileField({ label, name, required }) {
  const formik = useFormikContext();
  const hiddenFileInput = useRef(null);
  return <div>FileField</div>;
}

export default FileField;
