import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  styled,
  Link,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const IconBtn = styled(IconButton)({
  color: "white",
  backgroundColor: "#3b1d04",
});
const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none", // Remove the underline
  "&:hover": {
    cursor: "pointer",
    color: "#3b1d04",
  },
}));
const Footer = () => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#664229",
          color: "white",
          padding: 3,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="body2" variant="h6" color="inherit" mr={3}>
        
            <StyledLink to="/home"> Home</StyledLink>
          </Typography>
          <Typography component="body2" variant="h6" color="inherit" mr={3}>
            <StyledLink to="/about">AboutUs</StyledLink>
          </Typography>
          <Typography component="body2" variant="h6" color="inherit">
            <StyledLink to="/contact">ContactUs</StyledLink>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box p={2}>
            <IconBtn>
              <TwitterIcon />
            </IconBtn>
          </Box>
          <Box p={2}>
            <IconBtn>
              <FacebookIcon />
            </IconBtn>
          </Box>
          <Box p={2}>
            <IconBtn>
              <PinterestIcon />
            </IconBtn>
          </Box>
          <Box p={2}>
            <IconBtn>
              <InstagramIcon />
            </IconBtn>
          </Box>
        </Box>
        <Typography variant="body1" color="inherit">
          &copy; Abbaya.pk
        </Typography>
      </AppBar>
    </div>
  );
};

export default Footer;
