import '../common/modal.css'

import Button from 'react-bootstrap/Button'
import { FlightValue } from './styled/components.styled'
import { ListGroup } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { ShipModalProps } from '../hooks/interface/props'

export const ShipModal = ({ missions, missionsCount, show, setIsModalOpen }: ShipModalProps) => {
  const handleClose = () => {
    return setIsModalOpen(false)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Missions <FlightValue as={'span'}>{missionsCount}</FlightValue>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
        <ListGroup
          as='ul'
          style={{ position: 'sticky', top: 0, zIndex: 1, padding: 0, borderRadius: 0 }}
        >
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

        <ListGroup as='ul' style={{ padding: '1rem' }}>
          {missions.map((item) => {
            return (
              <ListGroup.Item
                key={item.flight}
                as='li'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1rem 2rem',
                  zIndex: 0,
                }}
              >
                <i>{item.name}</i>
                <FlightValue>{item.flight}</FlightValue>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer style={{ margin: '' }}>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
