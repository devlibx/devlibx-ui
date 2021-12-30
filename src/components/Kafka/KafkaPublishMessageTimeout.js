import { InputGroup, FormControl, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import React, { useState } from 'react';


function KafkaPublishMessageTimeout({ timeout, helpStr, leftSideTitle }) {
    const [inputInternal, setInputInternal] = useState(timeout)

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


KafkaPublishMessageTimeout.defaultProps = {
    timeout: 10,    
    helpStr: "Plese provide the message publish timeout",
    leftSideTitle: "Partition Count"
}

export default KafkaPublishMessageTimeout

