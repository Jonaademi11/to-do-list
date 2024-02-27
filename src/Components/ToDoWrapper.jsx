import React, { useState, useEffect } from "react";
import ToDoTasks from "./ToDoTasks";
import { Box } from "@mui/joy";
import { ThemeProvider } from "@mui/joy";

function ToDoWrapper({ todoTasks }) {
  return (
    <ThemeProvider
      theme={{
        colorSchemes: {
          light: {
            palette: {
              danger: {
                500: "#C41C1C",
                500: "#C41C1C",
              },
            },
          },
        },
      }}
    >
      <Box
        flex={1}
        sx={{
          padding: "20px",
          borderRadius: 10,
          bgcolor: "danger.500",
          "&:hover": {
            bgcolor: "danger.500",
          },
          // Set minHeight and minWidth to be slightly bigger than the content
          minHeight: 95,
          minWidth: 375,
        }}
      >
        <ToDoTasks />
        <ToDoTasks />
      </Box>
    </ThemeProvider>
  );
}
export default ToDoWrapper;
