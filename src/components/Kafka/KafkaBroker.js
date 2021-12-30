import { InputGroup, FormControl, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import React, { useState, useRef } from 'react';

function KafkaBroker({ brokers, helpStr, leftSideTitle }) {
    const [broker, setBroker] = useState(brokers)
    const ref = useRef(null);

    const checkBrokerValue = (event) => {
        // TODO - check if broker value contains correct port GrTooltip
    }

    // const popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Header as="h3">Info</Popover.Header>
    //       <Popover.Body>{helpStr}</Popover.Body>
    //     </Popover>
    // );

    return (        
        <div ref={ref}>
            <InputGroup  className="mb-3">
                <InputGroup.Text id="basic-addon1">{leftSideTitle}</InputGroup.Text>
                <FormControl
                    placeholder={broker}
                    aria-label={broker}
                    aria-describedby="basic-addon1"
                    onBlur={checkBrokerValue}
                    onChange={(e) => setBroker(e.target.value)}
                    value={broker}
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
        </div>
    )
}

KafkaBroker.defaultProps = {
    brokers: "localhost:9092",    
    helpStr: "Plese provide the broker url e.g. localhost:9092",
    leftSideTitle: "Broker"
}


export default KafkaBroker