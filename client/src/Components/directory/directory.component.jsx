import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../Redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.css";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
