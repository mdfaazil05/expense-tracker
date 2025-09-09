// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     if (!open) {
//       setOpen(true);
//     } else if (open) {
//       setOpen(false);
//     }
//   };
//   if (theme.direction === "ltr") {
//     console.log("right to left");
//   }
//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* {!open && (
//         <Box sx={{ width: "5%", bgcolor: "black" }}>
//           <List>
//             {["I", "S", "em", "Dr"].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon sx={{ color: "white" }}>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={text}
//                     sx={{ color: "white", ml: "-12px" }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       )} */}
//       <CssBaseline />
//       <IconButton
//         onClick={handleDrawerClose}
//         sx={{
//           color: "white",
//           bgcolor: "black",
//           borderRadius: "100%",
//           zIndex: 2000,
//           height: "20px",
//           width: "20px",
//           marginLeft: !open ? "-10px" : "210px",
//           ":hover": { backgroundColor: "black" },
//           transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//           }),
//         }}
//       >
//         {open ? (
//           <ChevronLeftIcon sx={{ zIndex: "1000px" }} />
//         ) : (
//           <ChevronRightIcon sx={{ zIndex: "1000px" }} />
//         )}
//       </IconButton>
//       <Drawer
//         sx={{
//           width: open ? drawerWidth : 100,
//           flexShrink: 100,
//           "& .MuiDrawer-paper": {
//             width: open ? drawerWidth : 100,
//             boxSizing: "border-box",
//             backgroundColor: "black",
//             color: "white",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon sx={{ color: "white" }}>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppContext } from "../context/ContextProvider";
import TextField from "@mui/material/TextField";

const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const { openDraw, setOpenDraw } = useAppContext();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    if (!open) {
      setOpen(true);
      setOpenDraw(true);
    } else if (open) {
      setOpen(false);
      setOpenDraw(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        onClick={handleDrawerClose}
        sx={{
          color: "white",
          bgcolor: "grey",
          borderRadius: "100%",
          zIndex: 2000,
          height: "20px",
          mt: "30px",
          width: "20px",
          marginLeft: !open ? "90px" : "200px",
          ":hover": { backgroundColor: "grey" },
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : 100,
          flexShrink: 100,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : 100,
            boxSizing: "border-box",
            backgroundColor: "#0D0D0D",
            color: "white",
          },
        }}
      >
        <TextField
          sx={{
            mt: "60px",
            mx: "auto",
            width: "80%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // default border
              },
              "&:hover fieldset": {
                borderColor: "white", // hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // focused border
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "white",
              opacity: 1, // by default placeholder has opacity 0.5
            },
            "& .MuiInputLabel-root": {
              color: "white", // label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white", // focused label color
            },
          }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Type here..."
        />

        <List>
          {["Home", "Monthly Income", "Expenses", "Savings"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                        color: "white",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                            transition: "opacity 0.5s",
                          }
                        : {
                            opacity: 0,
                            transition: "opacity 0.3s",
                          },
                    ]}
                    color={"white"}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
