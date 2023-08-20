import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import PropTypes from "prop-types";
import "./LoginModal.scss";

function ModalLogin({ show, handleClose }) {
  return (
    <>
      <Modal centered="true" dialogClassName="login-modal" show={show} onHide={handleClose}>
        <Modal.Body>
          <h4 className="title">Login</h4>
          <Form.Group className="mb-3">
            <FloatingLabel label="Email">
              <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Form.Check type="checkbox" label="Remember me" id="remember" />
          </Form.Group>
          <Button variant="outline-info" size="md" className="action">
            Login
          </Button>
          <Button variant="link" className="cancel" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

ModalLogin.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ModalLogin;
