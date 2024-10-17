import Card1 from './Card1'
import { Box, createTheme, ThemeProvider, Typography, useMediaQuery, useTheme} from '@mui/material';
import Card2 from './Card2'



      const font = createTheme({
        typography: {
          fontFamily: 'Poppins, sans-serif',
        },
      });

function Card() {

        const theme = useTheme();
        
        const isApp = useMediaQuery(theme.breakpoints.down("md"));
        


  return (
    <ThemeProvider theme={font}>
      <Box sx={{bgcolor: "#EBECF1", paddingTop: "5px", height: "800px"}}>
         {   isApp ? (
                 <Typography variant='div' sx={{display: "inline-block"}}>
                 <Card2/>

                 </Typography>
                  
              ) : (
                <>
                <Card1/>
                </>
            )
          }
                  
      </Box>
       
            
       </ThemeProvider>
  )
}

export default Card;
