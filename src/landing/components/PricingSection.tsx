// PricingSection.tsx
import React from "react";
import { Box, Button, Stack, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const PricingSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        py: 8,
        bgcolor: "white.100",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Flexible Plans
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        Choose a plan that works best for you and your team.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ pt: 6 }}
      >
        {/* Basic Plan */}
        <Box
          sx={{
            width: 300,
            p: 4,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Basic
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
            $10
          </Typography>
          <Typography color="textSecondary">/ user</Typography>
          <hr />
          <Box sx={{ textAlign: "left", mt: 3 }}>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Basic Vulnerability Scanning
            </Typography>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Monthly Security Reports
            </Typography>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Community Support
            </Typography>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Choose Plan
          </Button>
        </Box>

        {/* Startup Plan */}
        <Box
          sx={{
            width: 300,
            p: 4,
            bgcolor: "primary.main",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            color: "white",
            transform: "scale(1.1)",
            position: "relative",
          }}
        >
          <Typography variant="h5" fontWeight="bold" color="white">
            Startup
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
            $24
          </Typography>
          <Typography color="grey.300">/ user</Typography>
          <hr />
          <Box sx={{ textAlign: "left", mt: 3 }}>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              All features in Basic
            </Typography>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Real Time Vulnerability Alerts
            </Typography>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Advanced Threat Intelligence
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 3, bgcolor: "white", color: "primary.main" }}
            fullWidth
          >
            Choose Plan
          </Button>
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "secondary.main",
              color: "black",
              px: 2,
              py: 0.5,
              borderRadius: 1,
              fontSize: "0.8rem",
            }}
          >
            Popular
          </Box>
        </Box>

        {/* Enterprise Plan */}
        <Box
          sx={{
            width: 300,
            p: 4,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Enterprise
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
            $35
          </Typography>
          <Typography color="textSecondary">/ user</Typography>
          <hr />
          <Box sx={{ textAlign: "left", mt: 3 }}>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              All features in Startup
            </Typography>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Dedicated Account Manager
            </Typography>
            <Typography gutterBottom>
              <StarIcon fontSize="small" />
              Custom Security Audits
            </Typography>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Choose Plan
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default PricingSection;
