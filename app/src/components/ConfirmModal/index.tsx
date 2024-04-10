import { Button, ButtonGroup, Modal } from '@wordpress/components';

interface IConfirmModal {
  showModal: boolean;
  productTitle?: string;
  toggleModal: () => void;
  deleteProduct: () => void;
}
const ConfirmModal: React.FC<IConfirmModal> = ({showModal, productTitle, toggleModal, deleteProduct}) => {
  
  return showModal ? (
    <Modal title="Confirm delete" onRequestClose={ toggleModal }>
      <p>{`Are you sure that you want to delete '${productTitle}'?`}</p>
      <ButtonGroup>
        <Button
          style={{
            margin: '0 4px'
          }}
          variant="secondary"
          onClick={ toggleModal }
        >
          Cancel
        </Button>
        <Button variant="primary" isDestructive onClick={ deleteProduct }>
          Delete
        </Button>
      </ButtonGroup>
    </Modal>
  ) : null;
}

export default ConfirmModal;
