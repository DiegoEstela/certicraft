import React from "react";
import { Grid, Container } from "@mui/material";
import { StandardCard } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { standards } from "../../../utils/standards";

const AllStandarsView = () => {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/standard-detail/${name}`);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {standards.map((standard, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StandardCard
              key={standard.name}
              standard={standard}
              onCardClick={() => handleCardClick(standard.name)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllStandarsView;
