import React from 'react';
import PropTypes from 'prop-types';
import './imageplacer.css'; // Ensure the file exists

function ImagePlacer({ src, alt = "image", className = "custom-class", backgroundColor }) {
    return (
        <div 
            className="image-placeholder" 
            style={{ backgroundColor: backgroundColor || 'transparent' }} // Default to transparent if no color is provided
        >
            <img src={src} alt={alt} className={className} />
        </div> 
    );
}

ImagePlacer.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    backgroundColor: PropTypes.string, // New prop for background color
};

export default ImagePlacer;
