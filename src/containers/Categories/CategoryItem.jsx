import React from "react";

const CategoryItem = ({ id, icon, name, url, handleCategory }) => {
  return (
    <div
      onClick={() => handleCategory(id, url)}
      style={{ backgroundImage: `url(${icon})` }}
      className="categories__item"
      data-testid="category"
    >
      <div className="categories__item__link">
        <div className="categories__item__title">{name}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
