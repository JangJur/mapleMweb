import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './App.css';
import BoxComp from './BoxComp.jsx';
import InputField from "./InputField";

function App() {
  const[allImgNameArr, setAllImgNameArr] = useState([]);
  const[img, setImg] = useState('');

  const { getValues, watch, control } = useForm({
    defaultValues: {
      searchParam: ''
    }
  });

  useEffect(() => {
    const images = importAll(require.context('../public/img', false, /\.(png|jpe?g|svg)$/));
    let dataArr = [];

    images.forEach(function (data) {
    let tmp = data.default.split('/');
    tmp = tmp[4].split('.')[0];

      dataArr.push( {
        value: `${process.env.PUBLIC_URL}/img/${ tmp }.jpg`,
        label: tmp.split('_').join(' ')
      });
    });

    setAllImgNameArr(dataArr);
  }, []);

  const searchParamPoint = watch('searchParam');

  useEffect(() => {
    let key = getValues('searchParam');

    setImg(key);
  }, [searchParamPoint]);

  function importAll(r) {
    return r.keys().map(r);
  }

  return (
    <>
    <div className="App">

      <div>
        <h1>Ledya's Notes</h1>
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginBottom: '5px', height: 'fit-content' }}>
        <InputField name="searchParam" label="검색어" control={control} options={allImgNameArr} />
      </div>

      <BoxComp img={img} />
    </div>
    </>
  );
}

export default App;
