import { Typography, Box } from "@mui/material";

const PlanetCard = ({ name, diameter, rotation_period, orbital_period }) => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          name:
        </Typography>
        <Typography color="text.primary">{name}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          diameter:
        </Typography>
        <Typography color="text.primary">{diameter}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          rotation period:
        </Typography>
        <Typography color="text.primary">{rotation_period}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          orbital period:
        </Typography>
        <Typography color="text.primary">{orbital_period}</Typography>
      </Box>
    </Box>
  );
};

export default PlanetCard;
