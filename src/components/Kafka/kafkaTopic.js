import { InputGroup, FormControl, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import React, { useState } from 'react';


function KafkaTopic({ topic, helpStr, leftSideTitle }) {
    const [topicInternal, setTopic] = useState(topic)

    return (
        <>
            <InputGroup  className="mb-3">
                <InputGroup.Text id="basic-addon1">{leftSideTitle}</InputGroup.Text>
                <FormControl
                    placeholder={topicInternal}
                    aria-label={topicInternal}
                    aria-describedby="basic-addon1"
                    onChange={(e) => setTopic(e.target.value)}
                    value={topicInternal}
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



KafkaTopic.defaultProps = {
    topic: "test_topic",    
    helpStr: "Plese provide the topic name to use.",
    leftSideTitle: "Topic"
}

export default KafkaTopic

