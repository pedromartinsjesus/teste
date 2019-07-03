import React from 'react';
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
      <Texto handleOpen={handleOpen} valor={"ok"}></Texto>
      <Menu handleOpen={handleOpen} />
      <Snack open={open} onclose={handleClose} />
    </div>
  );
}

export default App;
