import { Typography, Box } from "@mui/material";

const FilmCard = ({ title, director, producer, release_date }) => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          title:
        </Typography>
        <Typography color="text.primary">{title}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          director:
        </Typography>
        <Typography color="text.primary">{director}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          producer
        </Typography>
        <Typography color="text.primary">{producer}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography color="text.secondary" sx={{ mr: 1 }}>
          release date
        </Typography>
        <Typography color="text.primary">{release_date}</Typography>
      </Box>
    </Box>
  );
};

export default FilmCard;
