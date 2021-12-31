
import { InputGroup, FormControl, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from 'react';
import PropTypes from 'prop-types';

function GenericInput({value, setValue, description, tooltipHelpStr}) {
    return (
        <>
            <InputGroup  className="mb-3">
            <InputGroup.Text id="basic-addon1">{description}</InputGroup.Text>
            <FormControl
                placeholder={value}
                aria-label={value}
                aria-describedby="basic-addon1"                
                onChange={(event) => {
                    setValue(event.target.value)                                            
                }}
                value={value}
            />
            
            <OverlayTrigger 
                placement="bottom" 
                overlay={
                <Tooltip >
                    {tooltipHelpStr}
                </Tooltip>
                }
            >
                    {({  ...triggerHandler }) => (
                        <Button variant="light" {...triggerHandler} className="d-inline-flex align-items-center">
                            <BsFillInfoCircleFill/>
                        </Button>
                    )}
            </OverlayTrigger>                    
            </InputGroup>
        </>
    )
}

GenericInput.defaultProps = {
    tooltipHelpStr: "TODO - set tooltipHelpStr value in component to show in help when you click on this icon",    
    description: "Please name of this property"
}

GenericInput.propTypes = {
    tooltipHelpStr: PropTypes.string,
    description: PropTypes.string
};

export {GenericInput}