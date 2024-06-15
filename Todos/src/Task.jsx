import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

function Task({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.name);
  const [details, setDetails] = useState(todo.description);
  const [currentTask, setCurrentTask] = useState({ ...todo });

  const toggleCheck = (id) => () => {
    console.log(`Task ID: ${id}`);
  };

  const cancelEdit = () => {
    setTitle(todo.name);
    setDetails(todo.description);
    setIsEditing(false);
  };

  const saveTask = () => {
    console.log("Saved task:", currentTask);
  };

  return (
    <ListItem
      disablePadding
      sx={{
        borderRadius: "10px",
        bgcolor: "#f9f9f9",
        marginBottom: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          bgcolor: "#e0e0e0",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container alignItems="center">
          <Grid item xs={9}>
            <Box sx={{ p: 2 }}>
              {isEditing ? (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      id="task-title"
                      label="Title"
                      variant="outlined"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      id="task-description"
                      label="Description"
                      variant="outlined"
                      value={details}
                      onChange={(event) => setDetails(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={1} justifyContent="flex-end">
                      <Grid item>
                        <Button
                          onClick={saveTask}
                          sx={{
                            bgcolor: "#4caf50",
                            color: "#fff",
                            "&:hover": {
                              bgcolor: "#388e3c",
                            },
                          }}
                        >
                          Save
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          onClick={cancelEdit}
                          sx={{
                            bgcolor: "#f44336",
                            color: "#fff",
                            "&:hover": {
                              bgcolor: "#d32f2f",
                            },
                          }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {currentTask.name}
                    </Typography>
                  }
                  secondary={<Typography>{currentTask.description}</Typography>}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={3}>
            {!currentTask.completed && (
              <IconButton onClick={() => setIsEditing(true)} sx={{ p: 2 }}>
                <EditIcon fontSize="small" />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Box>
    </ListItem>
  );
}

export default Task;
