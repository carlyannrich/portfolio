import React from "react";
import PropTypes from "prop-types";
import "./ProfileImage.css";

/**
 * Primary UI component for user interaction
 */
const ProfileImage = ({ size = "medium", src = "", alt = "" }) => {
    return (
        <img
            src={src}
            className={`profile-image profile-image--${size}`}
            alt={alt}
        />
    );
};

ProfileImage.propTypes = {
    /**
     * How large should the img be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

export default ProfileImage;
