import React, { useState } from 'react';
import './Modal.scss';
import { Modal, Button } from 'react-bootstrap';


const ModalBackdrop = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={props.displayTitle}>Thông báo!</Modal.Title>
            </Modal.Header>
            <Modal.Body style={props.displayBody}>{props.title}</Modal.Body>
            <Modal.Footer>
                <Button style={props.displayLeft} variant="secondary" onClick={props.handleLeft}>
                    {props.left}
                </Button>
                <Button style={props.displayRight} variant="primary" onClick={props.handleRight}>
                    {props.right}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBackdrop
