import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

const Upload = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  console.log(user._id);

  const [picture, setPicture] = useState(null);
  const [song, setSong] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const inputData = new FormData();
    inputData.append("userId", user._id);
    inputData.append("name", name);
    inputData.append("picturePath", picture.name);
    inputData.append("audioPath", song.name);
    inputData.append("picture", picture);
    inputData.append("song", song);

    const res = await fetch("http://localhost:3001/songs", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: inputData,
    });

    const data = await res.json();
    console.log(data);
    if (data.staus === 500 || !data) {
      window.alert("Invalid Song Upload");
      console.log("Invalid Song Upload");
    } else {
      window.alert("Song Upload Successful");
      console.log("Song Upload Successful");

      navigate("/home");
    }
  };

  return (
    <div className="mt-24">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit ">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                  Upload
                </h1>
                <form method="POST" className="mt-6">
                  <div className="mb-2">
                    <label
                      for="firstName"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Name of Song :
                    </label>
                    <input
                      type="text"
                      name="Name"
                      value={name}
                      onChange={(e) => {
                        const value = e.target.value;
                        setName(value);
                      }}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      for="picturePath"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Thumbnail:
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      id="file"
                      name="picture"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        setPicture(file);
                      }}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      for="picturePath"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Song:
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="song"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        setSong(file);
                      }}
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={handleRegister}
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="xl:sticky relative top-0 h-fit"></div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
