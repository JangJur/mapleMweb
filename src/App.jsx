import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import './App.css';
import BoxComp from './BoxComp.jsx';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { reset, getValues, setValue, control } = useForm({
    defaultValues: {
      searchParam: '',
      img: ``
    }
  });

  const [flag, setFlag] = useState(false);

  function dataLoad() {
    console.log('hi!');
    let key = getValues('searchParam');
    const imageUrl = `${process.env.PUBLIC_URL}/img/${ key }.jpg`;

    setValue('img', imageUrl);

    setFlag(true);
  };

  return (
    <>
    <div className="App">

      <div>
        <h1>Ledya's Notes</h1>
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px' }}>
        <Form.Label htmlFor="searchBox"></Form.Label>
        <Controller
          control={control}
          name="searchParam"
          style={{ marginRight: '5px' }}
          render={({ field: { onChange, value, ref } }) => (
            <Form.Control
              size="lg"
              type="text"
              onChange={onChange}
              value={value}
              ref={ref}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  dataLoad();
                }
              }}
            />
          )}
        />
        <Button type="button" style={{ marginRight: '3px' }} onClick={() => { reset() }} >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </Button>
        <Button type="button" onClick={() => { dataLoad() }}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>

      {flag &&
        <BoxComp
          img={getValues('img')}
        />
      }
    </div>
    </>
  );
}

export default App;
