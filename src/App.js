import React from 'react';
import logo from './logo.svg';
import './App.css';
import Texto from './components/text';
import Menu from './components/menu';
import Snack from './components/snackBar';

function App() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="App">
      <Texto valor={"ok"}></Texto>
      <Menu handleOpen={handleOpen} />
      <Snack open={open} onclose={handleClose} />
    </div>
  );
}

export default App;
