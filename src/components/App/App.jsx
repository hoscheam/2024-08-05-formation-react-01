import React from 'react';
import Button from '../ui/Button/Button';


function App() {
  return (
  <div className="App">
    <Button bgColor='skyblue' color="black">Valider </Button> 
    <Button bgColor='skyblue' color='white' >Annuler </Button>
    <Button color='white' style={{textDecoration: 'underline', fontWeight:200}}><img src='/button.jpg' />NE PAS TOUCHER </Button>
  </div>
  );
}

export default App;
