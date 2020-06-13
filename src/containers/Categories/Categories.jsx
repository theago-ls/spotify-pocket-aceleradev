import React from "react";
import PropTypes from "prop-types";

import { Loading } from "../../components";

import CategoryItem from "./CategoryItem";

import "./Categories.scss";

const Categories = ({ data, isLoading, url, handleCategory }) => {
  return (
    <div className="categories" data-testid="categories">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="categories__title">Categorias</div>
          <div className="categories__content">
            {data &&
              data.map((category) => (
                <CategoryItem
                  id={category.id}
                  icon={category.icons[0].url}
                  name={category.name}
                  url={category.href}
                  key={category.id}
                  handleCategory={handleCategory}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
