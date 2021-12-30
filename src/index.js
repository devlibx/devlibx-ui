import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button'
import KafkaConsumer from './components/Kafka/KafkaConsumer'

ReactDOM.render(
  <React.StrictMode> 
    <Button/> 
    <KafkaConsumer 
      kafk_consumer={
        {
          topic: "My_Topic",
          brokers: "10.2.0.15:9092",
          partitions: 11,
          replication_factor: 4,
          group_id: "my_group_id",
          publish_message_timeout_ms: 1001,
          acks: "all"
        }
      } />     
  </React.StrictMode>,
  document.getElementById('root')
);