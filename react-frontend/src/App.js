import React, { useState } from 'react';
import Results from './Results.js';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


export default function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState(null);
  const [lang, setLang] = useState('English');

  const api = 'http://127.0.0.1:5000';

  const onSubmit = () => {
    fetch(api + '/spacy', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "data": val,
        "lang": lang
      })
    })
    .then(res => res.json())
    .then(
      (result) => {
        setData(result);
      })
  }

  return (
    <div className="container">
      <h1 className="title">Named Entity Recognizer (spaCy)</h1>
      <Form className="form">
        <div className="text-container">
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {lang}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onSelect={() => setLang('English')}>English</Dropdown.Item>
              <Dropdown.Item onSelect={() => setLang('Spanish')}>Spanish</Dropdown.Item>
              <Dropdown.Item onSelect={() => setLang('French')}>French</Dropdown.Item>
              <Dropdown.Item onSelect={() => setLang('Chinese')}>Chinese</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control 
            as="textarea" 
            rows={10}
            value={val}
            onChange={e => setVal(e.target.value)}
          />
        </div>
        <div className="submit-div">
          <Button variant="primary" onClick={onSubmit}>
            Go
          </Button>
        </div>
      </Form>
      {data ? <Results data={data} /> : null}
    </div>
  );
}