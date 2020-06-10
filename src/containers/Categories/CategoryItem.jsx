import React from "react";

const CategoryItem = ({ id, icon, name, url }) => (
  <div className="categories__item" data-testid="category">
    <a href={url} className="categories__item__link">
      <img src={icon} alt={`Ícone da categoria ${name}`} />
      <div className="categories__item__title">{name}</div>
    </a>
  </div>
);

export default CategoryItem;
