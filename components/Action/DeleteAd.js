import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../config";

function DeleteAd({ adInfo, type }) {
  // `/post/add/delete/${id}`
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [disableDelete, setDisableDelete] = useState(false);

  const router = useRouter();

  const { data: session } = useSession();
  const userId = session?.user?.id;
  const token = session?.user?.token;

  const handleDelete = async () => {
    setDisableDelete(true);

    // console.log("url", `${API_URL}/post/add/delete/${userId}`);

    // return;

    const res = await fetch(`${API_URL}/post/add/delete/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ idPost: adInfo.id }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success(`Ad ${adInfo.title} Deleted`);
      router.replace(`/my-ads/${type}`);
      // setShowDeleteModal(false);
      // setDisableDelete(false);
    } else {
      console.log("error", data);
      toast.success("Something went wrong");
      // setShowDeleteModal(false);
      // setDisableDelete(false);
    }

    setShowDeleteModal(false);
    setDisableDelete(false);

    // setTimeOut(() => {
    //   setShowDeleteModal(false);
    //   setDisableDelete(false);
    // }, 3000);
  };

  return (
    <div>
      <button
        className="bg-red-600 text-xs text-white font-semibold px-2 py-1 rounded"
        onClick={() => setShowDeleteModal(true)}
      >
        Delete
      </button>

      {showDeleteModal && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 h-screen w-full overflow-y-hidden">
          <div className="h-screen flex justify-center items-center">
            <div className="mx-2 bg-custom-gray2 p-4 lg:p-8 rounded-lg">
              <div className="pb-4 border-b border-gray-500">
                <p className="text-center text-xl lg:text-2xl text-white">
                  {`Are you sure you want to delete "${adInfo.title}"?`}
                </p>
              </div>

              <p className="mt-3 text-red-600 text-center">
                {`Warning: All data from "${adInfo.title}" will be
                deleted. This action is irreversible.`}
              </p>

              {!disableDelete ? (
                <div className="mt-5 lg:mt-8 flex justify-center gap-7 items-center">
                  <button
                    className="bg-blue-600  text-white font-semibold px-4 py-2 rounded"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-red-600  text-white font-semibold px-4 py-2 rounded disabled:bg-opacity-50"
                    onClick={handleDelete}
                    disabled={disableDelete}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div className="mt-5 lg:mt-8 flex justify-center items-center">
                  <button className="bg-red-600/50  text-white font-semibold px-4 py-2 rounded cursor-not-allowed">
                    Deleting . . .
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAd;
