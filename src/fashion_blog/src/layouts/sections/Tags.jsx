import React from 'react';
import Tag from '../../components/Tag';

const Tags = () => {
  return (
    <div className="w3-white w3-margin">
    <div className="w3-container w3-padding w3-black">
      <h4>Tags</h4>
    </div>
    <div className="w3-container w3-white">
      <p>
        <Tag className="w3-black" label="Fashion"/>{" "}
        <Tag className=" w3-light-grey w3-small" label="New York"  />{" "}
        <Tag className=" w3-light-grey w3-small"  label="London"  />
        <Tag className=" w3-light-grey w3-small"  label="Hats" />{" "}
        <Tag className=" w3-light-grey w3-small"  label="Norway"  />{" "}
        <Tag className=" w3-light-grey w3-small "  label="Sweaters" />
        <Tag className=" w3-light-grey w3-small"  label="Ideas" />{" "}
        <Tag className=" w3-light-grey w3-small "  label="Deals" />{" "}
        <Tag className=" w3-light-grey w3-small "  label="Accessories" />
        <Tag className=" w3-light-grey w3-small"  label="News" />{" "}
        <Tag className=" w3-light-grey w3-small "  label="Clothing" />{" "}
        <Tag className=" w3-light-grey w3-small "  label="Shopping" />
        <Tag className=" w3-light-grey w3-small"  label="Jeans"  />{" "}
        <Tag className=" w3-light-grey w3-small "  label="Trends"
        />
      </p>
    </div>
  </div>
  );
}

export default Tags;
