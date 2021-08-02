import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modals from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { Button } from "./Button";
/**
 * Primary UI component for user interaction
 */
export const Modal = ({ isOpen, closeOnEsc, closeOnOverlayClick, showCloseIcon, type, modalHeader, modalContent, ...props }) => {
    const [open, setOpen] = useState(isOpen);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={onOpenModal}
                buttonType="upgrade"
                label="Open Modal"></Button>
            <Modals
                open={open}
                onClose={onCloseModal}
                center
                closeOnEsc={closeOnEsc}
                closeOnOverlayClick={closeOnOverlayClick}
                showCloseIcon={showCloseIcon}
                className="modal-dialog"
            >
                <div>
                    <div className="">
                        <div className="modal-header header-styling  border-0">
                            <h5
                                className="modal-title1 text-center white-txt col-md-12 p-0 font-book font-24"
                                id="exampleModalLabel "
                            >
                                {modalHeader}
                            </h5>

                        </div>
                        <div className="modal-body body-padding--value pb-0">
                            <div>
                                <div className="col-md-12 text-center m-b-30 mr-auto ml-auto">
                                    <p className="font-15 font-semibold black-txt">{modalContent}</p>
                                </div>
                                {type == 'confirmation' && <div className="buttons-read w-100 m-t-20 float-left text-center pointer">
                                    <Button
                                        onClick={onCloseModal}
                                        buttonType="primary"
                                        size="large"
                                        label="Yes" className="m-r-10"></Button>
                                    <Button
                                        onClick={onOpenModal}
                                        buttonType="warning"
                                        size="large"
                                        label="No"></Button>
                                </div>
                                }
                                {type == 'info' && <div className="buttons-read w-100 m-t-20 float-left text-center pointer">
                                    <Button
                                        onClick={onCloseModal}
                                        buttonType="upgrade"
                                        size="large"
                                        label="Ok" className="m-r-10"></Button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Modals>
        </div>
    );
};

Modal.propTypes = {
    /**
     * What are the variant in modal
     */
    type: PropTypes.oneOf(['basic', 'info', 'confirmation']),
    isOpen: PropTypes.bool,
    closeOnEsc: PropTypes.bool,
    closeOnOverlayClick: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    modalHeader: PropTypes.string,
    modalContent: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Modal.defaultProps = {
    isOpen: false,
    type: 'basic',
    closeOnEsc: false,
    closeOnOverlayClick: false,
    showCloseIcon: true,
    onClick: undefined,
};
