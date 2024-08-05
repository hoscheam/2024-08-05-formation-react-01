import React from 'react';
import Button from '../ui/Button/Button';


function App() {
  return (
  <div className="App">
    <Button>Valider </Button> 
    <Button>Annuler </Button>
    <Button style={{textDecoration: 'underline'}} bgColor="skyblue" color="yellow"><img src='/button.jpg' />NE PAS TOUCHER </Button>
  </div>
  );
}

export default App;
