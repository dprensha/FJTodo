import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem/TodoItem";
import "./ListItem.css";

const propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
};

const ListItem = function({ id, name }) {
    const userTodosEndPoint = "https://jsonplaceholder.typicode.com/todos?userId=";
    const [todos, setTodos] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);
    const age = useRef(Math.floor((Math.random() * 10) + 20));

    const handleGetTodosClick = () => {
        if(!hasFetched) {
            fetch(`${userTodosEndPoint}${id}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(todos => setTodos(todos));
        }
        setHasFetched(true);
        setIsExpanded(!isExpanded);
    };

    const handleCompletedClick = useCallback((todoId) => {
        const newArray = [...todos];
        const todo = newArray.find(todo => todo.id === todoId);

        if(todo) {
            todo.completed = !todo.completed;
        }

        setTodos(newArray);
    }, [todos]);

    return (
        <div className="listItem">
            <div className="labelContainer">
                <button onClick={handleGetTodosClick}>{isExpanded ? "-" : "+"}</button>
                <div className="nameLabel">{`My name is ${name} and I am ${age.current} years old.`}</div>
            </div>
            {
                isExpanded &&
                <div className="todoList">
                    {
                        todos.map(todo => {
                            return (
                                <TodoItem
                                    completed={todo.completed}
                                    handleCompletedClick={() => handleCompletedClick(todo.id)}
                                    key={todo.id}
                                    title={todo.title}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

ListItem.propTypes = propTypes;
export default ListItem;