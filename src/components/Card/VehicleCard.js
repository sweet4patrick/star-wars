import { Typography, Box } from "@mui/material";

const VehicleCard = ({ name, model, vehicle_class, manufacturer }) => {
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
          model:
        </Typography>
        <Typography color="text.primary">{model}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          vehicle class:
        </Typography>
        <Typography color="text.primary">{vehicle_class}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          manufacturer:
        </Typography>
        <Typography color="text.primary">{manufacturer}</Typography>
      </Box>
    </Box>
  );
};

export default VehicleCard;
