import React, { useRef } from "react";
import { Col, Form, FormGroup } from "reactstrap";
import "./search-bar.css";

//
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const SearchBar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  //
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value.trim();
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All Fields are Required!");
    }

    //
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) {
      alert("Something went wrong");
    }

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <>
      <Col lg="12">
        <div className="search__bar">
          <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  ref={locationRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i className="ri-map-pin-time-line"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance in k/m"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
              <span>
                <i className="ri-group-line"></i>
              </span>
              <div>
                <h6>Max People</h6>
                <input type="number" placeholder="0" ref={maxGroupSizeRef} />
              </div>
            </FormGroup>

            <span
              className="search__icon"
              type="submit"
              onClick={searchHandler}
            >
              <i className="ri-search-line"></i>
            </span>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default SearchBar;
