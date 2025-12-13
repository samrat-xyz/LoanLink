import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaEdit, FaEnvelope, FaUser, FaCamera } from "react-icons/fa";
import { imageUpload } from "../../utils";
import Swal from "sweetalert2";

function MyProfile() {
  const { user, updateUserProfile, setUser } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleImagePreview = (file) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let photoURL = user?.photoURL;

      if (image) {
        const uploadedUrl = await imageUpload(image);
        photoURL = uploadedUrl;
      }

      await updateUserProfile({
        displayName: name,
        photoURL,
      });

      setUser({ ...user, displayName: name, photoURL });

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile has been updated successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      setOpenModal(false);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12">
      <div className="p-8 rounded-2xl shadow-xl bg-base-100 h-screen backdrop-blur-xl">

        {/* Profile Photo */}
        <div className="flex justify-center relative">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            className="w-32 h-32 rounded-full shadow-lg object-cover border-4 border-white"
          />
          
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold mt-4 text-center">{user?.displayName}</h1>

        {/* Email */}
        <p className="text-gray-600 mt-2 flex justify-center items-center gap-2">
          <FaEnvelope className="text-blue-500" /> {user?.email}
        </p>

        {/* Card info */}
        <div className="mt-6 bg-base-100  rounded-xl p-5">
          
          <p className="mt-2 text-gray-700"><strong>Last Login:</strong> {user?.metadata?.lastSignInTime}</p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="mt-6 w-full bg-secondary text-white py-2 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition cursor-pointer"
        >
          <FaEdit /> Edit Profile
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Update Profile</h3>

            {/* Full Name */}
            <label className="font-medium">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 mt-1 mb-4">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                className="w-full py-2 outline-none ml-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* File upload */}
            <label className="font-medium">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImagePreview(e.target.files[0])}
              className="w-full mt-2 border rounded-lg p-2"
            />

            {preview && (
              <img
                src={preview}
                className="w-24 h-24 rounded-full border mt-4 mx-auto object-cover"
              />
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-xl"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                {loading ? "Updating..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
