import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import bannerImage from '../img/banner.png';

const cardsData = [
  { title: 'Better World', description: 'Acción Ambiental', image: 'url_de_la_imagen_1' },
  { title: 'Better Place', description: 'Acción Social', image: 'url_de_la_imagen_2' },
  { title: 'Better Company', description: 'Acción Gobernabilidad', image: 'url_de_la_imagen_3' },
  { title: 'Better Profit', description: 'Acción Económica', image: 'url_de_la_imagen_4' },
];

export const HomePage = () => {
  return (
    <div>
      {/* Sección del Banner */}
      <div style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
        <Container style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Puedes agregar un título aquí si lo deseas */}
        </Container>
      </div>

      {/* Sección de las Cards */}
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {cardsData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={`Imagen de ${card.title}`}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Crear Acción Sostenible
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;

