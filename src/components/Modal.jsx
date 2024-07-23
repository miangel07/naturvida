import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from 'primereact/button';

const Modal = ({visible,closeModal,children,title}) => {
const activate = visible? true : false;
  return (
    <div>
    
      <Dialog
        header={title}
        visible={activate}
        style={{ width: "50vw" }}
        onHide={closeModal}
      >
       {children}
      </Dialog>
    </div>
  );
};

export default Modal;
