import React from 'react'
import Header from '../components/Header'
import { FaCircleCheck } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom';

function ShowModal() {
      const navigate = useNavigate();
    
  return (
    <div>  
         <div className="w-full  relative [background:linear-gradient(179.48deg,_#0e0e10,_#3e065f)] overflow-hidden flex flex-col items-start justify-start min-w-[340px] text-left text-base text-ripe-plum-50 font-lg-normal">
          <Header />
          </div>
          <div className="h-screen bg-gradient-to-b from-[#0F0F11] to-[#210B2F]">
          <div className={`popup-header  ${window.innerWidth<500?"w-[85%]":"w-[40%]"} py-20  h-auto flex flex-col mx-auto justify-center items-center`} style={{
                    // display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}>
                    <div className={`w-12 h-12  rounded-full bg-gray-400 flex justify-center items-center`} style={{ marginRight: '18px' }}>
                      <FaCircleCheck className= "text-[#3E065F] text-[28px]" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '29px',
                        margin: '0',
                      }} className="text-white text-center py-5">Congratulations! </h3>
                      <span  style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        display: 'block',
                        textAlign:"center",
                        marginTop: '5px',
                      }}>Thank you for your interest</span>
                    </div>
                    <div className="popup-body">
        <p className="text-[20px] my-7 text-gray-150 text-center font-normal">Congratulations you are registered, we will reach out to you with jobs soon.</p>
      </div>
      <div className="popup-footer" style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}>
      
     

<button
              onClick={() => {
             
                navigate('/home'); // Navigate to /home
                setIsPopupVisible(false);
              }}
              style={{
                padding: '15px 20px',
                width:"100%",
                backgroundColor: "#3E065F",
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}>
              Got it thanks!
            </button>
      </div>
                  </div>
          </div>
          </div>
  )
}

export default ShowModal