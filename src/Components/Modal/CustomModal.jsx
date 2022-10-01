import { Modal } from 'antd';

const CustomModal = ({ children,isModalVisible, setIsModalVisible }) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal width={'auto'} visible={isModalVisible} footer={null} onCancel={handleCancel} centered={true} closable={false}>
      {children}
    </Modal>
  )
}

export default CustomModal;