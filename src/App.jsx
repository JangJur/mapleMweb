import React from 'react';
import { useForm } from 'react-hook-form';

import './App.css';
import BoxComp from './BoxComp.jsx';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { reset, getValues, setValue, control } = useForm({
    defaultValues: {
      searchParam: '',
      title: '',
      img: `${process.env.PUBLIC_URL}/img/태성비.jpg`
    }
  });


  function dataLoad() {
    let key = getValues('searchParam');
    const imageUrl = `${process.env.PUBLIC_URL}/img/${ key }.jpg`;

    setValue('title', key);
    setValue('img', imageUrl);
  };

  return (
    <>
    <div className="App">

      <div>
        <h1>Ledya's Notes</h1>
      </div>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <Form.Label htmlFor="searchBox"></Form.Label>
        <Form.Control
          size="lg"
          type="text"
          id="searchBox"
          name="searchParam"
          onKeyPress={event => {
            if (event.key === "Enter") {
              dataLoad();
            }
          }}
          style={{ marginRight: '5px' }}
        />
        <Button type="button" style={{ marginRight: '3px' }}>
          <FontAwesomeIcon icon={faArrowsRotate} onClick={() => { reset(); }} />
        </Button>
        <Button type="button">
          <FontAwesomeIcon icon={faSearch} onClick={dataLoad()} />
        </Button>
      </div>

      <BoxComp
        title={getValues('title')}
        img={getValues('img')}
      />
    </div>
    </>
  );
}

export default App;
