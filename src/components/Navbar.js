import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import "../App.css";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.green,
      },
      warning: {
        main: colors.yellow,
      },
      success: {
        main: colors.platinum,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "center", minHeight: "64px" }}>
          <Box
            sx={{
              width: "60%",
              height: "60px",
              mx: "auto",
              bgcolor: darkColors.black,
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)",
              position: "relative", // relative positioning for the animation dot
            }}
          >
            {/* Blinking Dot */}
            <Box
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: colors.green,
                boxShadow: `0 0 10px ${colors.green}`,
                animation: "blink 14s infinite",
                animationDelay: "4s",
              }}
            />

            <Box
              sx={{
                width: "80%",
                height: "48px",
                mx: "auto",
                bgcolor: darkColors.black,
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant="fullWidth"
                textColor="inherit"
                sx={{
                  "& .MuiTabs-flexContainer": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: -1,
                  },
                  "& .MuiTab-root": {
                    minHeight: "38px",
                    minWidth: "40px",
                    color: colors.platinum,
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  },
                  "& .Mui-selected": {
                    color: colors.platinum,
                    backgroundColor: darkColors.green,
                    opacity: 0.9,
                    transition: "0.9s",
                    "& svg": {
                      color: colors.green,
                    },
                  },
                }}
              >
                <Tab icon={<HomeRoundedIcon />} label="Home" />
                <Tab icon={<WorkOutlineIcon />} label="Projects" />
                <Tab icon={<BusinessIcon />} label="Clients" />
                <Tab icon={<AssignmentIcon />} label="Tasks" />
                <Tab icon={<PersonIcon />} label="Profile" />
              </Tabs>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
