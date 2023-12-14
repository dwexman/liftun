import React, { useState } from 'react';
import {
  Button,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Container,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import boyd2019Image from '../img/boyd2019.jpeg';

export const CrearAccion = () => {
  const [actionName, setActionName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [hasResponsible, setHasResponsible] = useState(false);
  const [hasObjective, setHasObjective] = useState(false);
  const [actionType, setActionType] = useState('');
  const [calculateFootprint, setCalculateFootprint] = useState(false);
  const [isLegalRequirement, setIsLegalRequirement] = useState(false);


  const handleSaveAction = () => {
    alert('Acción guardada correctamente.');
  };

  const handleCloseForm = () => {
    alert('Formulario cerrado. Volviendo al Home.');
    // Puedes redirigir a otra página o realizar otras acciones según tus necesidades.
  };

  return (
    <Container sx={{marginTop: "8px"}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            style={{
              height: '100vh',
              backgroundImage: `url(${boyd2019Image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Grid item xs={6} container justifyContent="center" alignItems="center">
          <Paper style={{ padding: '16px', maxWidth: '400px', elevation: 8, boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.16)' }}>
            <Typography variant="h6">Crear Acción Sostenible 🌱✨</Typography>
            <form>
              <TextField
                label="Nombre de la Acción"
                style={{ width: '100%', marginBottom: '16px', marginTop: '10px', '&:focused': {
                  borderColor: '#246F36', }, }}
                value={actionName}
                onChange={(e) => setActionName(e.target.value)}
                required
                
              />
              <TextField
                label="Fecha de Inicio"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                style={{ width: '100%', marginBottom: '16px' }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
              <TextField
                label="Fecha de Término"
                type="date"
                InputLabelProps={{ shrink: true }}
                style={{ width: '100%', marginBottom: '16px' }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={hasResponsible}
                    onChange={() => setHasResponsible(!hasResponsible)}
                    icon={<span style={{ fontSize: '18px', backgroundColor: 'white', borderRadius: '10px', padding: '6px', color: "white" }}>👤</span>}
                    checkedIcon={<span style={{ fontSize: '1.5em' }}>🌱</span>}
                    style={{
                      backgroundColor: hasResponsible ? 'white' : 'white',
                      borderRadius: '10px',
                      padding: '6px',
                    }}
                  />
                }
                label="¿Tiene Responsable?"
                style={{ marginBottom: '16px' }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={hasObjective}
                    onChange={() => setHasObjective(!hasObjective)}
                    icon={<span style={{ fontSize: '18px', backgroundColor: 'white', borderRadius: '10px', padding: '6px', color: "white" }}>🎯</span>}
                    checkedIcon={<span style={{ fontSize: '1.5em' }}>🌱</span>}
                    style={{
                      backgroundColor: hasObjective ? 'white' : 'white',
                      borderRadius: '10px',
                      padding: '6px',
                    }}
                  />
                }
                label="¿Tiene Objetivo?"
                style={{ marginBottom: '16px' }}
              />
              <Select
                label="Tipo de Acción"
                value={actionType}
                onChange={(e) => setActionType(e.target.value)}
                style={{ width: '100%', marginBottom: '16px' }}
              >
                <MenuItem value="tipo1">Acción Ambiental 🌍</MenuItem>
                <MenuItem value="tipo2">Acción Social 🤝</MenuItem>
                <MenuItem value="tipo3">Acción Gobernabilidad 🏛</MenuItem>
                <MenuItem value="tipo4">Acción Económica 💰</MenuItem>
              </Select>
              <FormControlLabel
                control={
                  <Switch
                    checked={calculateFootprint}
                    onChange={() => setCalculateFootprint(!calculateFootprint)}
                    icon={<span style={{ fontSize: '18px', backgroundColor: 'white', borderRadius: '10px', padding: '6px', color: "white" }}>👣</span>}
                    checkedIcon={<span style={{ fontSize: '1.5em' }}>🌱</span>}
                    style={{
                      backgroundColor: calculateFootprint ? 'white' : 'white',
                      borderRadius: '10px',
                      padding: '6px',
                    }}
                  />
                }
                label="¿Requiere Cálculo de Huella?"
                style={{ marginBottom: '16px' }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={isLegalRequirement}
                    onChange={() => setIsLegalRequirement(!isLegalRequirement)}
                    icon={<span style={{ fontSize: '18px', backgroundColor: 'white', borderRadius: '10px', padding: '6px', color: "white" }}>⚖️</span>}
                    checkedIcon={<span style={{ fontSize: '1.5em' }}>🌱</span>}
                    style={{
                      backgroundColor: isLegalRequirement ? 'white' : 'white',
                      borderRadius: '10px',
                      padding: '6px',
                    }}
                  />
                }
                label="¿Es una Obligación Legal?"
                style={{ marginBottom: '16px' }}
              />
              <Button
              href="/cerrar"
                variant="contained"
                style={{
                  backgroundColor: '#246F36',
                  color: 'white',
                  margin: '8px 0',
                }}
                onClick={handleSaveAction}
              >
              Crear Acción
              </Button>
              <Button
              href="/cerrar"
                variant="contained"
                color="secondary"
                onClick={handleCloseForm}
                style={{ marginLeft: '8px' }}
              >
                Cerrar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CrearAccion;
