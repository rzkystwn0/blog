import React, { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(true);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="fixed top-0 left-0 w-full flex h-screen justify-center items-center backdrop-blur-lg bg-black/40">
          <div className="bg-white rounded-3xl w-11/12 md:w-3/12">
            <div>
              <img src="alert.png" alt="" className="rounded-t-3xl" />
            </div>
            <p className="text-center bg-blue-400 hover:bg-blue-400/80 rounded-b-3xl py-3 text-white cursor-pointer montserraf font-medium" onClick={showModal}>TUTUP</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
