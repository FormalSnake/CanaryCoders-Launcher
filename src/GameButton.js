import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import './App.css';
import App from './App';

function GameButton(params) {
    const {gamebutton_item, doClick} = params;

    const {
      title,
      BackgroundImage
    } = gamebutton_item;

  
  return[
    <Stack spacing={2} direction="column">
          <Button variant="outlined" sx={{
            width: 300,
            height: 50,
            marginTop: 5,
          }} onClick={doClick}>{title}</Button>
          
        </Stack>//, i
        
  ];
}
export function ButtonPressed(key) {
    
    
}


export default GameButton;
