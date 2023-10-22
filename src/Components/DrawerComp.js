import React, { useState } from "react";
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  List,
  Typography,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import HouseIcon from "@mui/icons-material/House";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const DrawerComp = () => {
  const drawerElementsList = [
    { text: "Home", icon: <HouseIcon /> },
    { text: "AboutUs", icon: <InfoIcon /> },
    { text: "ContactUs", icon: <ContactPhoneIcon /> },
    { text: "Login", icon: <LoginIcon /> },
    { text: "SignUp", icon: <PersonAddAlt1Icon /> },
  ];
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <React.Fragment>
        <Drawer
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <List>
            {drawerElementsList.map((value, index) => (
              <div key={index}>
                {index === 3 ? <Divider /> : null}
                <ListItem >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "#664229" }}>{value.icon}</ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#664229" }}
                      >
                        {value.text}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </div>
            ))}
          </List>
        </Drawer>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      </React.Fragment>
    </div>
  );
};

export default DrawerComp;
