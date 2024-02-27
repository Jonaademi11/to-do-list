import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";

function ToDoTasks() {
  return (
    <Card
      color="neutral"
      invertedColors={false}
      orientation="horizontal"
      variant="soft"
      size="sm"
      sx={{
        width: 370, // Set a smaller width
        height: 90, // Set a smaller height
        margin: "10px 0", // Add margin top and bottom
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <CardActions>
        {" "}
        <Checkbox variant="outlined" />
      </CardActions>
      <CardContent>
        <Typography level="title-sm">
          We are a community of developers prepping for coding interviews,
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <Button variant="outlined" color="neutral">
          ✎
        </Button>
        <Button variant="solid" color="danger">
          🛇
        </Button>
      </CardActions>
    </Card>
  );
}
export default ToDoTasks;
