import { Typography, Box } from "@mui/material";

const StarshipsCard = ({ name, model, starship_class, manufacturer }) => {
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
          starship class:
        </Typography>
        <Typography color="text.primary">{starship_class}</Typography>
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

export default StarshipsCard;
