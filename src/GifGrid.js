import React from "react";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

            <div className="gif-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
