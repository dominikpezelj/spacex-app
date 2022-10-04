import '../common/modal.css'

import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap'
import { Mission } from '../hooks/interface'
import Modal from 'react-bootstrap/Modal'
import styled from 'styled-components'

interface ShipModalProps {
  missions: Mission[]
  missionsCount: number
  show: boolean
  setIsModalOpen(state: boolean): void
}

const FlightValue = styled.div`
  background: #005288;
  padding: 0.2rem 1rem 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  border-radius: 10px;
  color: white;
`

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
