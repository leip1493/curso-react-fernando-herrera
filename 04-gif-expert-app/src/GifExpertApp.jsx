import React, { useState } from "react";
import PropTypes from 'prop-types';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GidExpertApp</h2>

      <AddCategory {...{ setCategories }} />

      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} {...{ category }} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.arrayOf(PropTypes.string),
}

GifExpertApp.defaultProps = {
  defaultCategories: ["Naruto"]
};
