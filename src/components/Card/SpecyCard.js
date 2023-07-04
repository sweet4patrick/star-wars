import { Typography, Box } from "@mui/material";

const SpecyCard = ({ name, classification, designation, average_height }) => {
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
          classification:
        </Typography>
        <Typography color="text.primary">{classification}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          designation:
        </Typography>
        <Typography color="text.primary">{designation}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          average height:
        </Typography>
        <Typography color="text.primary">{average_height}</Typography>
      </Box>
    </Box>
  );
};

export default SpecyCard;
