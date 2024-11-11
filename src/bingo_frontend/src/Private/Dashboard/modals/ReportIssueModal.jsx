import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";
import { useDropzone } from "react-dropzone";
import { PulseLoader } from "react-spinners";

const ReportIssueModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);
  const [reportDesc, setReportDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReport = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(setSelectedSection("location"));
      setLoading(false);
    }, 3000);
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300">
      <div className="w-auto text-black">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Kindly Report any waste mismanagement or issues below:
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
              className="w-full max-h-[500px] object-cover rounded-lg"
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
        <textarea
          placeholder="Describe the issue"
          className="w-full p-2 mb-4 border rounded h-32"
          value={reportDesc}
          onChange={(e) => setReportDesc(e.target.value)}
        />
        <button
          className="bg-black text-white py-3 w-full rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-25 disabled:cursor-not-allowed"
          onClick={handleReport}
          disabled={!preview || !reportDesc}
        >
          {loading ? <PulseLoader size={10} color="#fff" /> : "Report"}
        </button>
      </div>
    </div>
  );
};

export default ReportIssueModal;
