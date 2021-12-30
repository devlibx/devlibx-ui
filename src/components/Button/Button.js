import React, { useState } from 'react';

const Button = (props) => {
  const [item, setItem] = useState(props.item);
   return (
     <div>
         This is button v5 {item}
     </div>
   )
}
export default Button;