import React from "react";

const Item = (props) => {
  let data = props.data;

  //   console.log("item", props.data);
  return (
    <>
      {data
        ? data.map((data) => {
            return (
              <>
                {data.name.first} {data.name.last}
                <br />
              </>
            );
          })
        : ""}
    </>
  );
};

export default Item;
