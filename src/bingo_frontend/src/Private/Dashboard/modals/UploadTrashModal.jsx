import React, { useState } from "react";
import { BiUpload, BiInfoCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";
import { useDropzone } from "react-dropzone";
import { generateWeightAndAmount } from "../../../helpers";
import { setTrash } from "../../../Redux/slices/trashSlice";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import axios from "axios";

const TrashUpload = () => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    setLoading(true);
    const generatedTrash = generateWeightAndAmount();
    dispatch(setTrash(generatedTrash));
    setTimeout(async () => {
      dispatch(setSelectedSection("pickup"));
      setLoading(false);
    }, 3000);
  };

  const handleReport = (e) => {
    e.preventDefault();
    dispatch(setSelectedSection("report"));
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await axios.post(
          "https://bingoml.onrender.com/classify/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Let Axios handle the content-type for file uploads
            },
          }
        );
        toast.success("Uploaded Trash is classified as " + response.data);
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Upload a photo of your trash, and Mexa will identify its category for
        simple, efficient recycling.
      </h1>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg py-10 flex flex-col items-center justify-center mb-6 cursor-pointer"
      >
        <input {...getInputProps()} />
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full object-cover rounded-lg max-h-[500px]"
          />
        ) : (
          <>
            <BiUpload className="w-10 h-10 text-gray-500 mb-4" />
            <p className="text-lg font-semibold">Drag and Drop here</p>
            <p className="text-gray-500">or</p>
            <button className="text-sky-400 font-medium mt-2">
              Browse files
            </button>
          </>
        )}
      </div>
      <div className="flex items-center justify-start text-gray-600 mb-4">
        <BiInfoCircle className="w-5 h-5 mr-2" />
        <button className="underline" onClick={handleReport}>
          Report any Issue
        </button>
      </div>
      <button
        className="bg-black text-white py-3 w-full rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={handleUpload}
        disabled={!preview}
      >
        {loading ? <PulseLoader size={10} color="#fff" /> : "Upload"}
      </button>
    </div>
  );
};

export default TrashUpload;
