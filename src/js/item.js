import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import {
  faCircle,
  faDotCircle,
  faListDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./css/item.css";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import download from "downloadjs";

const Item = (props) => {
  let data = props.data;
  console.log("recipe ", data);

  //   console.log("item", props.data);

  useEffect(() => {
    if (props.download) {
      console.log("kambing download", props.download);
      var dwImg = document.getElementById("recipe");

      htmlToImage.toPng(dwImg).then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
    }
  }, [props.download]);
  return (
    <>
      {data.id ? (
        <div className="item-card" id="recipe">
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
      ) : (
        ""
      )}
    </>
  );
};

export default Item;
