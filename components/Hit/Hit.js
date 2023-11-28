import Image from "next/image";
import {Highlight} from "react-instantsearch";

const Hit = ({hit}) => <div>
  <div className="row image-container">
    <div className="col-md d-flex align-items-end justify-content-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={hit.image} alt={hit.name} />
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md">
      <h5>
        <Highlight hit={hit} attribute="name" tagName="mark" />
      </h5>
    </div>
  </div>

  <div className="row mt-2">
    <div className="col-md">
      <Highlight hit={hit} attribute="description" tagName="mark" />
    </div>
  </div>

  <div className="row mt-auto">
    <div className="col-md">
      <div className="hit-price fw-bold mt-4">{hit.price}</div>
      <div className="hit-rating">Rating: {hit.rating}/5</div>
    </div>
  </div>
</div>;

export default Hit;
