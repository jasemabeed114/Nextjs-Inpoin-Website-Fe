import React from "react";
import PropTypes from "prop-types";

import {VideoResponsive, Iframe} from "./YoutubeEmbed.elements"

const YoutubeEmbed = ({ embedId }) => (
    <VideoResponsive>
        <Iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </VideoResponsive>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;