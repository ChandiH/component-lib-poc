import './App.css'
import 'component-lib-poc/dist/style.css';
// import { Button, Alert, AlertDescription, AlertTitle } from 'component-lib-poc';
import { Button, Alert, AlertDescription, AlertTitle } from 'shadcn-ui-library-starter';
import { Terminal } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`flex align-center justify-start ${mode} flex-col h-[100vh]`}>
      <h1 className="text-3xl font-bold underline">
        Built using shadcn-ui-library-starter
      </h1>
      <div className='py-4'>
        <Button variant="" size={} onClick={toggleDarkMode}>Toggle Dark Mode</Button>
      </div>
      <div className='py-4'>
        <Button variant="destructive" className='text-orange-500'>Shadcn Button</Button>
      </div>

      <div className='py-4'>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}