import { Typography, Box } from "@mui/material";

const PeopleCard = ({ name, birth_year, eye_color, gender }) => {
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
          birth year:
        </Typography>
        <Typography color="text.primary">{birth_year}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          eye color:
        </Typography>
        <Typography color="text.primary">{eye_color}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          gender:
        </Typography>
        <Typography color="text.primary">{gender}</Typography>
      </Box>
    </Box>
  );
};

export default PeopleCard;
