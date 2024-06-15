import { Divider, List, Paper, Typography, Box } from "@mui/material";
import React from "react";
import Task from "./Task";

function Todos() {
  const todoList = [
    {
      id: 1,
      name: "Plan trip",
      description: "Plan hotels and transportation for all the places to go.",
      completed: true,
    },
    {
      id: 2,
      name: "Plan a second trip",
      description: "Plan hotels and transportation for all the places to go.",
      completed: false,
    },
  ];

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto", marginTop: "50px" }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: "10px",
          bgcolor: "#fafafa",
          padding: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          My Tasks
        </Typography>
        <List disablePadding>
          {todoList.map((task) => (
            <React.Fragment key={task.id}>
              <Task key={task.name} todo={task} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Todos;
