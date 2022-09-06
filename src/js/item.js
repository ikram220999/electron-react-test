import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import {
  faCircle,
  faDotCircle,
  faListDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./css/item.css";

const Item = (props) => {
  let data = props.data;
  console.log("recipe ", data);

  //   console.log("item", props.data);
  return (
    <>
      <div className="item-card">
        <div className="wrap-top">
          <div className="wrap-img-title">
            <h3 className="title">{data.title}</h3>
            <img src={data.image} className="item-img"></img>
          </div>
          <div className="wrap-ing">
            <h4>Ingredients</h4>
            {data.ingredients
              ? data.ingredients.map((ing) => (
                  <div className="ing">
                    <FontAwesomeIcon icon={faCircle} width={8} />
                    {ing}
                  </div>
                ))
              : ""}
          </div>
          <div className="wrap-ins">
            <h4>Instructions</h4>
            {data.ingredients
              ? data.ingredients.map((ing) => (
                  <div className="ing">
                    <FontAwesomeIcon icon={faCircle} width={8} />
                    {ing}
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
