import React,{ useState } from "react";
import "../Todocomponents/Todo.css"

const Todoapp= () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(null);

    const addFunction = () => {
        if (input !== "") {
            setItems((prevItems) => [...prevItems, input]);
            setInput("");
        }
    };

    const updateFunction = () => {
        if (input !== "" && updateIndex !== null) {
            let temp = [...items];
            temp[updateIndex] = input;
            setItems(temp);
            setUpdateIndex(null);
            setInput("");
        }
    };

    const editFunction = (data, ind) => {
        setInput(data);
        setUpdateIndex(ind);
    };

    const deleteFunction = (data, ind) => {
        const temp = [...items];
        temp.splice(ind, 1);
        setItems(temp);
    };

    return (
        <div className="parent_todo">
            <div className="header">
                <h1>Todo list</h1>
            </div>
            <div className="input_todo">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button onClick={addFunction}>Add</button>
                <button onClick={updateFunction}>Update</button>
            </div>
            <div className="user_data" >
           
                                  
                    {items.length
                        ? items.map((item, index) => {
                            return (
                                <div className="inside-todo-lists" key={index}>
                                  <table  cellSpacing={20}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                <h2 style={{color:'blue'}}>{item}</h2>
                                                </td>
                                                <td>
                                                <button className="edit-btn" onClick={() => editFunction(item, index)}>
                                                     Edit
                                                </button>   
                                                </td>
                                                <td>
                                                <button className="delete-btn" onClick={() => deleteFunction(item, index)}>
                                                        Del
                                                </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                  
                                        </table>
                          
                                </div>
                             
                                   
                                 
                            );
                        })
                        : ""}
                          
            </div>
        </div>
    );
};

export default Todoapp;
