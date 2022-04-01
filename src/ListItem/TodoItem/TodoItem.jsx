import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

const propTypes = {
    completed: PropTypes.bool,
    handleCompletedClick: PropTypes.func,
    name: PropTypes.string
};

const TodoItem = function({ completed, handleCompletedClick, title }) {
    return (
        <div className="todoItem">
            <input
                checked={completed}
                onClick={handleCompletedClick}
                type="checkbox"
            ></input>
            <span>{title}</span>
        </div>
    );
};

TodoItem.propTypes = propTypes;
export default TodoItem;