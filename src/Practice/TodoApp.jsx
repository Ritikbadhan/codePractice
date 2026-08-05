import { useState } from "react";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, Input, Typography } from "@mui/material";



function TodoAPP() {

    const [todo, setTodo] = useState([]);
    const [openDialog, setOpenDialog] = useState({ open: false, action: null });
    const [edit, setEdit] = useState({ name: "", isCompleted: false })

    const handleAddTodo = () => {
        setOpenDialog({ open: true, action: "add" })
    }

    const handleEditTodo = (id) => {
        const editingTodo = todo?.find((e) => e.id === id);
        setEdit({ ...editingTodo })
        setOpenDialog({ open: true, action: "edit" })
    }
    const handelSaveTodo = (action) => {
        if (action === 'add') {
            const newTodo = {
                id: crypto.randomUUID(),
                name: edit.name,
                isCompleted: edit.isCompleted
            }
            setTodo([...todo, newTodo]);
            setEdit({ name: '', isCompleted: false })
            setOpenDialog({ open: false, action: null });
        } else {
            const editedodo = {
                name: edit.name,
                isCompleted: edit.isCompleted
            }
            const updatedTodos = todo.filter((e) => e.id != edit?.id)
            setTodo([...updatedTodos, editedodo]);
            setEdit({ name: '', isCompleted: false })
            setOpenDialog({ open: false, action: null });
        }

    }

    const handleDelete = (id) => {
        const updatedTodos = todo?.filter(e => e.id != id);
        setTodo(updatedTodos)

    }




    return (<>

        <div>
            <h3>Todo app</h3>
            <Button variant="contained" onClick={handleAddTodo} sx={{ m: 1 }}>Add todo</Button>
        </div>

        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Is Compilted </th>

                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((e) => {
                    return (
                        <>
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{`${e.isCompleted}`.toUpperCase()}</td>
                                <td><Button variant="contained" onClick={() => handleEditTodo(e.id)}>Edit</Button>
                                    <Button variant="outlined" sx={{ ml: 1 }} onClick={() => { handleDelete(e.id) }} >Delete</Button></td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
        <Dialog open={openDialog.open} >
            <DialogTitle><Typography sx={{ color: 'black' }}>{openDialog?.action?.toUpperCase()} Todo</Typography></DialogTitle>
            <DialogContent >

                <Box sx={{ m: 3 }}>
                    <label>Name : </label>
                    <Input placeholder="Name" sx={{ ml: 2 }} value={edit?.name} onChange={(e) => setEdit({ ...edit, name: e.target.value })}></Input>
                </Box>
                <Box sx={{ m: 3 }}>
                    <label>Completed : </label>
                    <Checkbox sx={{ ml: 2 }} checked={edit?.isCompleted} onChange={(e) => setEdit({ ...edit, isCompleted: e.target.checked })} />
                </Box>

            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={() => handelSaveTodo(openDialog.action)}>Save</Button>
                <Button variant="contained" onClick={() => setOpenDialog({ open: false, action: null })}> Cancel</Button>

            </DialogActions>

        </Dialog>

    </>)


}
export default TodoAPP;