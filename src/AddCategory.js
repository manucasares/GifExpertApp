import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((prevCategorie) => [inputValue, ...prevCategorie]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleInputSubmit}>
            <p> {inputValue}</p>
            <input
                type="text"
                placeholder="Busque un GIF"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
