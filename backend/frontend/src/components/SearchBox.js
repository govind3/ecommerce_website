import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (keyword) {
      history(`/?keyword=${keyword}&page=1`);
    }
  }, [keyword]);
  return (
    <Form
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5 mt-2 mt-sm-0"
        placeholder="Search..."
      />
    </Form>
  );
}

export default SearchBox;
