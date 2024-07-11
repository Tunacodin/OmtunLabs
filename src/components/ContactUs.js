import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import colors from "../consts/colors";
import darkColors from "../consts/darkColors";
import img1 from "../img/omtunblack.svg"; // replace with actual path

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const emails = [
    { name: "OmTun Labs", email: "labsomtun@gmail.com", img: img1 },
  ];

  return (
    <div
      ref={formRef}
      style={{
        width: "100%",
        minHeight: "50vh",
        background: darkColors.black,
        color: darkColors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <Typography
        ref={titleRef}
       
        className={isVisible ? "fadeInUp" : ""}
        sx={{
          fontFamily: "Anton",
          color: colors.white,
          textAlign: "center",
          marginBottom: "2rem",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          textShadow: "2px 11px 10px rgba(0, 0, 0, 0.5)",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        İletişim
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ width: "90%", maxWidth: "1200px" }}
      >
        {emails.map((contact, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={8}
            md={6}
            lg={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                backgroundColor: colors.black,
                color: darkColors.white,
                width: "100%",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 1s ease",
                padding: "20px",
                maxWidth: "400px",
              }}
            >
              <CardMedia
                component="img"
                image={contact.img}
                alt={contact.name}
                sx={{
                  objectFit: "cover",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {contact.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  fontSize="18px"
                  sx={{ color: darkColors.white }}
                >
                  <Link
                    href={`mailto:${contact.email}`}
                    style={{ color: darkColors.white, textDecoration: "none" }}
                  >
                    {contact.email}
                  </Link>
                  <IconButton
                    href={`mailto:${contact.email}`}
                    style={{ color: darkColors.white }}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContactUs;
