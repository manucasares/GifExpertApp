import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = ( {defaultCategory = []} ) => {
    const [categories, setCategories] = useState(defaultCategory);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
