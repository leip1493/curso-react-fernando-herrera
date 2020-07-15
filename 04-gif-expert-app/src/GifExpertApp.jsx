import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const CATEGORIES = ["Naruto"];

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(CATEGORIES);

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
