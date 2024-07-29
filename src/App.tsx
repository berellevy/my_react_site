import { FC } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import './App.css'
import { Container } from '@mui/material'


const  App: FC = () => {
  return (

    <Container maxWidth="xs" sx={{my: "3em"}}>
      <Box sx={{flexGrow: 1}}>
        
        <AppBar component={"nav"}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ mx: 'auto' }}>
              berellevy.com
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        
      </main>
    </Container>
  )
}

export default App
