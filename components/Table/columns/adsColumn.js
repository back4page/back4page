import Link from "next/link";

export const adsColumn = [
  {
    Header: "status",
    accessor: "preview",
    Cell: ({ row }) => (
      <div className="flex justify-center">
        {row.original.preview ? (
          <span className="bg-green-600 px-3 py-0.5 rounded text-sm">
            Draft
          </span>
        ) : (
          <span className="bg-blue-600 px-3 py-0.5 rounded text-sm">Live</span>
        )}
        {/* <span
          className={`px-3 py-1 ${
            row.original.preview ? "bg-blue-600" : "bg-green-600"
          }}`}
        >
          {row.original.preview ? "Draft" : "Live"}
        </span> */}
      </div>
      // <span
      //   className={`px-3 py-1 ${
      //     row.original.preview ? "bg-blue-600" : "bg-green-600"
      //   }}`}
      // >
      //   {row.original.preview ? "Draft" : "Live"}
      // </span>
    ),
  },
  {
    Header: "title",
    accessor: "title",
  },
  {
    Header: "category",
    accessor: "category",
  },
  {
    Header: "tag",
    accessor: "tag",
  },
  {
    Header: "date",
    accessor: "created_at",
    Cell: ({ row }) => (
      <div className="">
        <span className="">
          {new Date(row.original.created_at).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
    ),
  },
  {
    Header: "action",
    accessor: "id",
    disableSortBy: true,
    // width: 200,
    Cell: ({ row }) => (
      <div className="flex justify-center items-center gap-2">
        <div className="">
          <Link href={`/edit-ad/${row.original.id}`}>
            <button className="bg-yellow-600 text-xs text-white font-semibold px-2 py-1 rounded">
              Edit
            </button>
          </Link>
        </div>
        <div className="">
          <Link href={`/posters/details/${row.original.id}`}>
            <button className="bg-green-600 text-xs text-white font-semibold px-2 py-1 rounded">
              View
            </button>
          </Link>
        </div>

        <div className="">
          <button className="bg-red-600 text-xs text-white font-semibold px-2 py-1 rounded">
            Delete
          </button>
        </div>

        {/* <DeletePost posterInfo={row.original} /> */}
      </div>
    ),
  },
  // {
  //   Header: "country",
  //   accessor: "country",
  // },
  // {
  //   Header: "state",
  //   accessor: "state",
  // },
  // {
  //   Header: "city",
  //   accessor: "city",
  // },

  // {
  //   Header: "service",
  //   accessor: "service",
  // },

  // {
  //   Header: "description",
  //   accessor: "description",
  // },
  // {
  //   Header: "email",
  //   accessor: "email",
  // },
  // {
  //   Header: "phone",
  //   accessor: "phone",
  // },
  // {
  //   Header: "age",
  //   accessor: "age",
  // },
  // {
  //   Header: "images",
  //   accessor: "images",
  // },
];
