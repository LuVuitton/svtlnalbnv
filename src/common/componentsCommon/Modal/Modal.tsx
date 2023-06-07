import React, { useState } from 'react';
import { Button, Modal as ModalAntd} from 'antd';

export const Modal: React.FC<ModalPropsType> = ({content,isOpen,title}) => {

  const [modal2Open, setModal2Open] = useState(true);

  return (
    <>
      {/* <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button> */}
      <ModalAntd
        title={title}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        maskClosable={false}
      >
       {content}
      </ModalAntd>
    </>
  );
};


type ModalPropsType = {
  isOpen: boolean
  title: string
  content: React.ReactNode
}
