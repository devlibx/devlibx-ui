import { InputGroup, FormControl, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import React, { useState } from 'react';


function KafkaAckType({ ack, helpStr, leftSideTitle }) {
    const [inputInternal, setInputInternal] = useState(ack)

    return (
        <>
            <InputGroup  className="mb-3">
                <InputGroup.Text id="basic-addon1">{leftSideTitle}</InputGroup.Text>
                <FormControl
                    placeholder={inputInternal}
                    aria-label={inputInternal}
                    aria-describedby="basic-addon1"
                    onChange={(e) => setInputInternal(e.target.value)}
                    value={inputInternal}
                />
                
                <OverlayTrigger 
                    placement="bottom" 
                    overlay={
                    <Tooltip >
                        {helpStr}
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
    );    
}


KafkaAckType.defaultProps = {
    ack: "all",    
    helpStr: "Plese provide the ack setting for producer",
    leftSideTitle: "Ack Setting"
}

export default KafkaAckType

