import React from 'react';
import { Button } from '@chandimal/component-lib-poc';
import '@chandimal/component-lib-poc/dist/style.css';


const Playground = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
      <Button variant={'default'}>Click Me</Button>
    </div>
  )
}

export default Playground;