import React from "react";
import { Typography, Box , ThemeProvider} from "@mui/joy";

function Header({ style }) {
  return (
    <div className="header" style={style}>
      <Box
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="40px"
      >
        {" "}
        <ThemeProvider
          theme={{
            colorSchemes: {
              light: {
                palette: {
                  danger: {
                    500: "#FEF6F6",
                    500: "#FEF6F6",
                  },
                },
              },
            },
          }}
        >
          <Typography color="danger.50" level="h1" variant="plain">
            TO DO LIST
          </Typography>
        </ThemeProvider>
      </Box>
    </div>
  );
}

export default Header;
