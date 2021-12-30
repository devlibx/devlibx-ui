
import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

function KafkaConsumer(props) {
    const [item] = useState(props.kafk_consumer);
    console.log("Item to configure kafka consumer = ", item)

    return (
        <div>           
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Kafka Topic</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="Some Topic"  value={item.topic}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Broker</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="localhsot:9092"  value={item.brokers}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Partitions</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="10"  value={item.partitions}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Replication Factor</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="10"  value={item.replication_factor}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Group Id</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="10"  value={item["group.id"]}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Message Timeout</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="10"  value={item["publish.message.timeout.ms"]}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Acks</Form.Label>
                <Col sm="10">
                    <Form.Control type="input" placeholder="10"  value={item["acks"]}/>
                </Col>
            </Form.Group>

        </div>           
    )
}

export default KafkaConsumer
