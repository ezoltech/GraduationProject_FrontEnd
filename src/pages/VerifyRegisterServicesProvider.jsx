import React, { useState } from "react";
import { Card, Label, Button } from "flowbite-react";
import { MdOutlineVerified } from "react-icons/md";

const VerifyRegisterServicesProvider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(selectedFile);
  };

  const handleSubmit = () => {};

  return (
    <div className="font-kanit transition-colors flex justify-center items-center ">
      <div className="flex w-[60%] gap-16 ">
        <form onSubmit={handleSubmit} className="flex flex-col py-3 px-6 w-full justify-center items-center ">
          <div className="w-[100px] h-[100px] rounded-full relative overflow-hidden">
            <img
              src="/AfroLogo.png"
              alt="AfroLogo"
              className="object-cover absolute inset-0 m-auto"
            />
          </div>
          <div className="pt-2">
            <h1 className="text-4xl font-semibold pt-2 flex gap-4">
              Verify Your Business Account
            </h1>
          </div>

          <div className=" grid-cols-1 md:grid-cols-2 pt-2 flex flex-col ">
            <div className="flex pt-2 gap-5">
              <div className="flex flex-col w-full pt-1">
                <Label className="text-md pb-4 font-semibold pt-4" value="Legal Business Name" />
                <input
                  type="text"
                  className="rounded-md border-1 w-[400px] border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>

              <div className="flex flex-col w-full">
                <Label className="text-md pb-4 font-semibold pt-5" value=" Business Type" />
                <input
                  type="password"
                  className="rounded-md border-1 w-[400px] border-gray-200 bg-gray-100 h-12 dark:bg-gray-800 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
            </div>

            <Label value="Insert Your Business License here" className="flex justify-center p-6" />
            <div className="w-96 h-60 rounded-3xl border-2 border-black bg-white flex flex-col ml-52 relative overflow-hidden">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="uploaded"
                  className="object-cover absolute inset-0 m-auto"
                />
              ) : (
                <img
                  src="/uploadimg.png"
                  alt="ppc"
                  className="object-cover absolute inset-0 m-auto"
                />
              )}
            </div >
            <Button className="mt-4 w-40 ml-80 " color="dark" onClick={handleFileInput}  pill>upload file</Button>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>


          <div className="flex flex-col w-full pt-1 justify-center items-center">
                <Label className="text-md pb-4 font-semibold pt-4" value="Business License Number" />
                <input
                  type="text"
                  className="rounded-md border-1 w-[40%] border-gray-200 bg-gray-100 h-12 dark:bg-gray-900 dark:text-white hover:dark:shadow-cyan-500 duration-200"
                />
              </div>

            <div className="flex pt-10">
              <input
                type="checkbox"
                className="mr-2 "
                id="termsCheckbox dark:bg-gray-900 dark:text-white shadow-lg "
                required
              />
              <label htmlFor="termsCheckbox">
              I confirm that the information provided are correct  {" "}
                
              </label>
              </div>

            <Button color="white" pill className="flex w-44 rounded-full   mt-4 border-2 border-black">
              Verify now <MdOutlineVerified className="text-blue-700 ml-2 text-xl"/>
            </Button>
       
        </form>
      </div>
    </div>
  );
};

export default VerifyRegisterServicesProvider;
