import * as React from "react";
import { Input, Button, Box } from "@mui/joy";

function ToDoForm() {
  return (
    <Box display="flex" justifyContent="center">
      <form
        color="neutral"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          alert(JSON.stringify(formJson));
        }}
      >
        <Input
          color="neutral"
          size="lg"
          variant="soft"
          placeholder="Enter Your task!"
          required
          sx={{ marginRight: 1 }}
          endDecorator={
            <Button type="submit" color="neutral">
              Submit
            </Button>
          }
        />
      </form>
    </Box>
  );
}

export default ToDoForm;
