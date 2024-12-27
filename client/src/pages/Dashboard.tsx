import React from "react";
import { Box, Grid } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ marginLeft: "80px", height: "100vh", padding: "16px" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Top Row */}
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Box
            sx={{
              background: "grey",
              height: "100%",
              borderRadius: "15px",
            }}
          >
            I am box 1
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Box
            sx={{
              background: "grey",
              height: "100%",
              borderRadius: "15px",
            }}
          >
            I am box 2
          </Box>
        </Grid>

        {/* Bottom Row */}
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Box
            sx={{
              background: "grey",
              height: "100%",
              borderRadius: "15px",
            }}
          >
            I am box 3
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ height: "50%" }}>
          <Box
            sx={{
              background: "grey",
              height: "100%",
              borderRadius: "15px",
            }}
          >
            I am box 4
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
