import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todo.css"

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginTop: 4, display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" component="div" gutterBottom>
        To-Do List
      </Typography>
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <TextField
          label="Add items"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
          fullWidth
        />

        <Button variant="contained" onClick={handleAddItem} sx={{marginLeft:2,height:"55px"}}>
          Add
        </Button>

      </Box>

      <List sx={{ marginTop: 2, width: "100%",  bgcolor: "background.paper",textAlign:"center",backgroundColor:'#F0F8FF' }}>
        {items.map((item, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={item} />
          </ListItem>

        ))}
        {items.length>1 && <Button color="error" variant="outlined" onClick={()=>setItems([])}>All clear</Button>}
        
      </List>
    </Container>
  );
};

export default Todo;