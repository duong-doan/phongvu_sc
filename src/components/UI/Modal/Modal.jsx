import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ModalBackdrop = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={props.displayTitle}>Thông báo!</Modal.Title>
            </Modal.Header>
            <Modal.Body style={props.displayBody}>{props.title}</Modal.Body>
            <Modal.Footer style={props.displayFooter}>
                <Link>
                    <Button style={props.displayLeft} variant="secondary" onClick={props.handleLeft}>
                        {props.left}
                    </Button>
                </Link>
                <Link to={`${props.link}`}>
                    <Button style={props.displayRight} variant="primary">
                        {props.right}
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBackdrop
