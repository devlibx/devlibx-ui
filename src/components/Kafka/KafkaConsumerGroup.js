import { InputGroup, FormControl, Button, Tooltip, OverlayTrigger, Image, Popover } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import React, { useState } from 'react';


function KafkaConsumerGroup({ consumerGroupId, helpStr, leftSideTitle }) {
    const [inputInternal, setInputInternal] = useState(consumerGroupId)

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


KafkaConsumerGroup.defaultProps = {
    consumerGroupId: "group_consumer_v1",    
    helpStr: "Plese provide the consumer group id for kafka consumer",
    leftSideTitle: "Consume Group Id"
}

export default KafkaConsumerGroup

