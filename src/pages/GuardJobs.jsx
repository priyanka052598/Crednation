
import { useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import "../../src/global.css"

// const guards = [
//     {
//       "_id": "67a48879f93d090cb127a597",
//       "guardID": "G1000",
//       "userID": "67a48838f93d090cb127a594",
//       "skills": ["akhil", "akhil2", "akhil3"],
//       "summary": "this is summary of the guard",
//       "minRate": 40,
//       "maxRate": 70,
//       "experience": "this is experience of guard",
//       "additionalInfo": "additional info of guard",
//       "updatedDate": "2025-02-06T10:01:29.079Z",
//       "registrationComplete": true,
//       "pic": "",
//       "serviceType": "",
//       "userDetails": {
//         "_id": "67a48838f93d090cb127a594",
//         "fullName": "akhilnew",
//         "phoneNumber": "1234567890",
//         "email": "akhilnew@gmail.com",
//         "password": "$2b$10$iTJJhXWmb2pq0dYDs.lPyOdgjdQYzW7EkPG9.WLCVzQ94CYV2Pafi",
//         "userType": "guard",
//         "city": "",
//         "country": "",
//         "state": ""
//       }
//     },
//     {
//       "_id": "67a48d27712f2e074ee5236c",
//       "guardID": "G1001",
//       "userID": "67a463f7c7b1b5bac4cda676",
//       "skills": ["akhil", "akhil2", "akhil3"],
//       "summary": "this is summary of the guard",
//       "minRate": 40,
//       "maxRate": 70,
//       "experience": "this is experience of guard",
//       "additionalInfo": "additional info of guard",
//       "updatedDate": "2025-02-06T10:21:27.039Z",
//       "registrationComplete": true,
//       "pic": "",
//       "serviceType": "",
//       "userDetails": {
//         "_id": "67a463f7c7b1b5bac4cda676",
//         "fullName": "milan",
//         "phoneNumber": "1234567890",
//         "email": "milan@rtesoftwares.com",
//         "password": "$2b$10$CPqv62CNypVIsXvYDTsxGesD6nfatytOn2VAsjTwNK9zXHoRUTqkO",
//         "userType": "guard",
//         "city": "",
//         "country": "",
//         "state": ""
//       }
//     },
//     {
//       "_id": "67a48d89712f2e074ee5236d",
//       "guardID": "G1002",
//       "userID": "67a45e3ec7b1b5bac4cda672",
//       "skills": ["akhil", "akhil2", "akhil3"],
//       "summary": "this is summary of the guard",
//       "minRate": 40,
//       "maxRate": 70,
//       "experience": "this is experience of guard",
//       "additionalInfo": "additional info of guard",
//       "updatedDate": "2025-02-06T10:23:05.672Z",
//       "registrationComplete": true,
//       "pic": "",
//       "serviceType": "",
//       "userDetails": {
//         "_id": "67a45e3ec7b1b5bac4cda672",
//         "fullName": "akhil Guard",
//         "phoneNumber": "1234567890",
//         "email": "asdf@example.com",
//         "password": "$2b$10$jUbPaU69.Kc/jynAA8ANeegybz1O6lOmm1Wnq1slXePnvDfdBErzS",
//         "userType": "guard",
//         "city": "",
//         "country": "",
//         "state": ""
//       }
//     }
//   ]


const GuardJobs = ({ guards }) => {
  const handleAction = async (jobID, status) => {
    const payload = {
      jobID,
      status,
      senderEmail: "deepanshuqa@gmail.com",
      adminEmail: "chintan@rtesoftwares.com",
    };

    try {
      const response = await axios.post(
        "https://engine.flashbuild.ai/execute-flow/flow_40a99c4e-b922-472e-80c5-394553405845",
        payload
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="self-stretch mx-auto flex flex-row items-start justify-start flex-wrap content-start gap-8 text-center text-xs text-bunker-50">
      <div className="flex flex-wrap gap-4">
        {guards.map((item) => (
          <div
            key={item.jobID}
            className="lg:w-80 sm:w-52 bg-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-between p-4 box-border gap-2"
          >
            <div className="self-stretch rounded-lg bg-gray-300 h-[244px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative gap-2">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
                alt=""
                src={item?.pic ? item.pic : "/image-1-1@2x.png"}
              />
              <div className="!m-[0] absolute top-[0px] right-[0.3px] flex flex-col items-start justify-start p-2 z-[1]">
                <div className="rounded bg-ripe-plum-100 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-1">
                  <img className="w-4 relative h-4" alt="" src="/verified.svg" />
                  <div className="relative text-xs leading-[20px] font-lg-normal text-ripe-plum-950 text-center">
                    Verified
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="self-stretch relative text-xl leading-[28px] font-semibold font-lg-normal text-ripe-plum-50 text-left">
                  {item?.userDetails?.fullName}
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-1">
                  <FaMapMarkerAlt className="text-[#8A21CF] text-[16px]" />
                  <div className="relative text-sm leading-[22px] font-lg-normal text-bunker-50 text-left">
                    {item?.jobLocation}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 self-stretch">
              <button
                onClick={() => handleAction(item.jobID, "accept")}
                className="cursor-pointer border-none p-0 bg-emerald-600 self-stretch rounded-lg h-12 overflow-hidden flex flex-col items-center justify-center w-1/2"
              >
                <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="relative text-sm leading-[22px] font-lg-normal text-white text-center">
                    ACCEPT
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleAction(item.jobID, "reject")}
                className="cursor-pointer border-none p-0 bg-red-700 self-stretch rounded-lg h-12 overflow-hidden flex flex-col items-center justify-center w-1/2"
              >
                <div className="self-stretch flex-1 flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="relative text-sm leading-[22px] font-lg-normal text-white text-center">
                    REJECT
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardJobs;