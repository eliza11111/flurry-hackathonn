import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  });

  const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.7",
  });

  return (
    <div>
      <Box>
        <Typography
          align="center"
          variant="h3"
          sx={{ fontWeight: 900, bgcolor: "lightgrey", color: "green" }}
        >
          FLURRY
        </Typography>
        <Typography align="center" variant="body1" sx={{ fontWeight: 600 }}>
          Plant your own gardens and decorate your own soul!
        </Typography>

        <Box
          style={{
            background:
              "url(https://i.pinimg.com/originals/80/9f/dc/809fdc64839a1f48b442cda6884a397d.png) no-repeat center",
            backgroundSize: "cover",
            height: 600,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "40%", padding: 20 }}>
            <Box sx={{ background: "#9e9e9e", opacity: "0.9" }}>
              <Typography variant={"h6"} color="#263238" align="center" pt={8}>
                65% of NEW PLANT
              </Typography>
              <Typography variant="h4" align="center">
                You can't buy happiness, but you can buy plants, and that's
                pretty much the same thing.
              </Typography>
              <Typography variant="body1" align="center" pb={8}></Typography>
              <Button variant="contained" sx={{ marginBottom: 7 }}>
                BUY NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Stack direction={"row"} spacing={4} mt={5}>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://images.squarespace-cdn.com/content/v1/58f747ddf5e2314662f770cf/8d026ee0-43e9-40b4-b257-78b3896c63aa/Screen+Shot+2018-01-07+at+15.54.10.png)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              FLOWERS
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://img.staticmb.com/mbcontent//images/uploads/2022/12/Vastu-Plants-for-Home.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              PLANTS FOR HOME
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://www.popsci.com/uploads/2022/04/21/garden.jpg?auto=webp)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              PLANTS FOR THE GARDEN
            </StyledTypography>
          </StyledBox>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
