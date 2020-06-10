import React from "react";
import PropTypes from "prop-types";

import { Loading } from "../../components";

import CategoryItem from "./CategoryItem";

import "./Categories.scss";

const Categories = ({ data, isLoading, url }) => (
  <div className="categories" data-testid="categories">
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <div className="categories__title">Categorias</div>
        <div className="categories__content">
          {data.map((category) => (
            <CategoryItem
              id={category.id}
              icon={category.icon}
              name={category.name}
              url={category.url}
            />
          ))}
        </div>
      </>
    )}
  </div>
);

export default Categories;
