// Importing needed components
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Location-component structure
const Location = ({ city, country, getWeather }) => {
  // Default values
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  // Default input focus
  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  // When input mode is on show form
  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }

  // Show Location contents
  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

// Exports
export default Location;

// Component styles
const Container = styled.div`
  text-align: center;
`;
const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;
const InputField = styled.input`
  padding: 5px;
  width: 80px;
  background: transparent;
  border: none;
  color: white;
  &:focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  border: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  cursor: pointer;
`;
const CancelButton = styled.span`
  position: absolute;
  background: #557fc2;
  cursor: pointer;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  top: -8px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;
const City = styled.h1`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;
const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
