import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button'
import KafkaConsumer from './components/Kafka/KafkaConsumer'
import KafkaBroker from './components/Kafka/KafkaBroker'
import KafkaTopic from './components/Kafka/kafkaTopic'

ReactDOM.render(
  <React.StrictMode> 
    
    {/* <KafkaConsumer 
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
      } />      */}

      {/* Add a Kafka broker input */}
      <KafkaBroker 
        helpStr="You can specify a container to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlay's.        " 
        leftSideTitle="Broker URL" 
        brokers="$INTERNAL_BROKER_URL"
      />

    <KafkaTopic 
        helpStr="Provide your topic name" 
        leftSideTitle="Kafka Topic" 
        topic="$INTERNAL_TOPIC"
      />

  </React.StrictMode>,
  document.getElementById('root')
);