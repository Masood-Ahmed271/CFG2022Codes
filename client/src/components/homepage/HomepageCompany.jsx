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
import Logo from '../images/user_profile.jpg';


const cards = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const theme = createTheme();

export default function HomeCompany() {
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
                    image = {Logo}
                    alt="No Image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {card}
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </ThemeProvider>
  );
}