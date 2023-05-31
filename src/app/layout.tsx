'use client'; // prettier-ignore
// import "./globals.css";
import { Inter } from "next/font/google";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { ChevronLeft, Menu } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AppBar } from "@/components/dashboardComp/AppBar";
import { Drawer } from "@/components/dashboardComp/Drawer";
import { ListItems } from "@/components/dashboardComp/ListItem";

const inter = Inter({ subsets: ["latin"] });
const mdTheme = createTheme();

export default function RootLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const toggleDrawer = () => {
    console.log("toggle");
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          style={{ background: "#2E3B55" }}
        >
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              {"nazdar"}
              <Menu />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              ToDo App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItems
              toDashboard={() => router.push("/")}
              toStations={() => router.push("/stations")}
            />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <body> {children}</body>
      </Box>
    </ThemeProvider>
  );
}
