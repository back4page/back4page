import { useRouter } from "next/router";
import React, { useState } from "react";

function LayoutPostAd({ step, children }) {
  const steps = [
    {
      name: "Step 1: Write Ad",
      path: "/ad",
    },
    {
      name: "Step 2: Preview Ad",
      path: "/preview",
    },
    {
      name: "Step 3: Payment",
      path: "/payment",
    },
    {
      name: "Step 4: All Done",
      path: "/all-done",
    },
  ];

  const router = useRouter();

  return (
    <div>
      <h4 className="mt-3 text-2xl font-bold">{step}</h4>
      <div className="mt-5 flex flex-col lg:flex-row items-center gap-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className={` text-black text-sm font-semibold px-3 py-1.5 rounded-full ${
              router.pathname.includes(step.path)
                ? "bg-yellow-500"
                : "bg-yellow-300"
            } `}
          >
            {step.name}
          </div>
        ))}
      </div>
      {/* <div className="mt-5 flex flex-col lg:flex-row items-center gap-5">
        <button className="bg-gray-300 text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full">
          Step 1: Write Ad
        </button>
        <button className="bg-gray-300 text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full">
          Step 2: Preview Ad
        </button>
        <button className="bg-gray-300 text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full">
          Step 3: Payment
        </button>
        <button className="bg-gray-300 text-gray-900 text-sm font-semibold px-3 py-1.5 rounded-full">
          Step 4: All Done
        </button>
      </div> */}
      {children}
    </div>
  );
}

export default LayoutPostAd;
