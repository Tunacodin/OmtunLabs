import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import mapImage from "../img/map.png";
import  darkColors  from "../consts/colors";
import colors from "../consts/colors";

const ContactUs = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        fontFamily: "Poppins",
        padding: "3rem",
      }}
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid
        style={{ overflow: "hidden" }}
        item
        md={6}
        component={Paper}
        
        square
      >
        <div
          style={{
            padding: "2rem",
            color: colors.platinum,
            backgroundColor: "#1e1e1e",
          }}
        >
          <Typography
            style={{
              fontFamily: "Anton",
              color: colors.platinum,
              fontSize: "3rem",
            }}
            variant="h4"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography variant="body1">
            Our support team is always available to answer your questions and
            help you with any issues you may have. Please feel free to contact
            us using the form below.
          </Typography>
        </div>
        <div style={{ padding: "2rem", backgroundColor: "#1e1e1e" }}>
          <Grid
            style={{
              color: colors.platinum,
              borderColor: colors.platinum,
              backgroundColor: "white",
              padding: "2rem",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem",
            }}
            container
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                color="primary"
                label="Name"
                InputProps={{
                  style: {
                    backgroundColor: colors.primary,
                    color: "black",
                    padding: "5px",
                    fontWeight: 400,
                    borderWidth: 2,
                    fontSize: "1rem",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                type="email"
                InputProps={{
                  style: {
                    backgroundColor: colors.primary,
                    color: "black",
                    padding: "5px",
                    fontWeight: 400,
                    borderWidth: 2,
                    fontSize: "1rem",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Subject"
                InputProps={{
                  style: {
                    backgroundColor: colors.primary,
                    color: "black",
                    padding: "5px",
                    fontWeight: 400,
                    borderWidth: 2,
                    fontSize: "1rem",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Message"
                multiline
                rows={4}
                InputProps={{
                  style: {
                    backgroundColor: colors.primary,
                    color: "black",
                    padding: "10px",
                    paddingLeft: "1.2rem",
                    fontWeight: 400,
                    borderWidth: 2,
                    fontSize: "1rem",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                style={{
                  backgroundColor: colors.primary,
                  color: "black",
                  padding: "1rem",
                  fontWeight: 600,
                  borderWidth: 2,
                  fontSize: "1rem",
                  color: colors.platinum,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid style={{ width: "100%", borderRadius: "1rem" }} item md={5}>
        <img
          src={mapImage}
          alt="map"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ContactUs;
