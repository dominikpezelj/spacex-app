import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'
import { Mission } from '../hooks/interface'
import Modal from 'react-bootstrap/Modal'

interface ShipModalProps {
  missions: Mission[]
  show: boolean
  setIsModalOpen(state: boolean): void
}

export const ShipModal = ({ missions, show, setIsModalOpen }: ShipModalProps) => {
  const handleClose = () => {
    return setIsModalOpen(false)
  }
  const handleShow = () => {
    return setIsModalOpen(true)
  }
  return (
    <Modal show={show} onHide={handleClose} style={{ maxHeight: '90vh' }}>
      <Modal.Header closeButton>
        <Modal.Title>Missions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as='ul'>
          <ListGroup.Item
            as='li'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#005288',
              padding: '1rem 2rem',
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            <div>Name</div>
            <div>Flight</div>
          </ListGroup.Item>
        </ListGroup>
        {missions.map((item) => {
          return (
            <ListGroup as='ul' key={item.flight}>
              <ListGroup.Item
                as='li'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1rem 2rem',
                }}
              >
                <i>{item.name}</i>
                <i>{item.flight}</i>
              </ListGroup.Item>
            </ListGroup>
          )
        })}
      </Modal.Body>
      <Modal.Footer style={{ marginTop: '0' }}>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
