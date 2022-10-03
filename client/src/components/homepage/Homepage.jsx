import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../nav/Navbar2';
import Logo1 from '../images/JP Morgan.png';
import Logo2 from '../images/Google.png';
import Logo3 from '../images/Apple.png';
import Logo4 from '../images/Morgan Stanley.png';
import Logo5 from '../images/IBM.png';
import Logo6 from '../images/Amazon.png';
import Logo7 from '../images/Walmart.png';
import Logo8 from '../images/CVS Health.png';
import Logo9 from '../images/Hong Kong Airlines.png';
import { useNavigate } from "react-router-dom"

const cards = ["JP Morgan", "Google", "Apple", "Morgan Stanley", "IBM", "Amazon", "Walmart", "CVS Health", "Hong Kong Airlines"];
const images = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9];

const theme = createTheme();

export default function Home() {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              JA Job Shadowing
            </Typography>
            <Typography variant="h6" align="center" color="text.primary" paragraph>
              JA Job Shadowing brings students to companies for an up-close look at professionals at work.
              Students will acquire hands-on understanding of specific industries and job categories.
            </Typography>
            <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                      padding: "1em 0 1em 0",
                      objectFit: "contain"
                    }}
                    height = {300}
                    image = {images[index]}
                    alt="No Image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {card}
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=> navigate('/video')}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </ThemeProvider>
  );
}