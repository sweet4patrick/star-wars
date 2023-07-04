import { Box, Grid, Card, CardContent } from "@mui/material";
import {
  FilmCard,
  PeopleCard,
  PlanetCard,
  SpecyCard,
  StarshipsCard,
  VehicleCard,
} from "./Card";

const SearchList = ({ items, category }) => {
  const getCategoryCard = (category, data) => {
    switch (category) {
      case "films":
        return <FilmCard {...data} />;
      case "people":
        return <PeopleCard {...data} />;
      case "planets":
        return <PlanetCard {...data} />;
      case "species":
        return <SpecyCard {...data} />;
      case "starships":
        return <StarshipsCard {...data} />;
      case "vehicles":
        return <VehicleCard {...data} />;
      default:
        return <PeopleCard {...data} />;
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {items.map((ele, index) => (
          <Grid item xs={12} sm={6} md={3} key={`item_${index}`}>
            <Card sx={{ height: "100%" }}>
              <CardContent>{getCategoryCard(category, ele)}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchList;
