import React, { Component } from "react"
import { Button, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "/Users/alxcapa/gatsby-site/src/style/custom-bootstrap.css"

class ButtonRDV extends Component {
  render() {
    const [show, setShow] = setState(false)
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Custom Width Modal
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default ButtonRDV