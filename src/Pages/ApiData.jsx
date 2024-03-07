import React, { useEffect, useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';

const ApiData = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const { word, phonetics, meanings } = result;
  // console.log("jndfjk7887y", result, word)

  const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

  const handleClick = async () => {
    try {
      const res = await axios.get(`${api}${search}`)
      if (res && res?.status) {
        toast.success('true')
        setResult(res?.data?.[0])
        console.log("fjkguk784ryuf", res)
      } else {
        toast.error('No data found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const playAudio = () => {
    try {
      let audio = new Audio(phonetics?.[0]?.audio);
      audio?.play();
    } catch (err) {
      console.log(err)
    }
  }

  const handleKeyPress = (event) => {
    // console.log("bjhkbuy87b",event)
    if (event?.key === 'Enter') {
      handleClick();
    }
  };

  const handleReset = () => {
    setSearch('')
    setResult('')
  }

  return (
    <>
      <h3>ApiData</h3>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Search word..."
                name='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
                aria-label="Search" aria-describedby="basic-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleClick}
              >Search</button>

              <button
                disabled={!result}
                className="btn btn-outline-secondary mx-2"
                type="button"
                id="button-addon2"
                onClick={handleReset}
              >Reset</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          {word ? <h1>word: {word}</h1> : <h1>word</h1>}
        </div>
        <div>
          {meanings && <h3>{meanings?.[0]?.partOfSpeech}</h3>}
        </div>

        <div>
          <span onClick={playAudio} style={{ cursor: "pointer", border: "1px solid #000" }}>audio</span>
        </div>

        <div>
          {meanings ? <h3>meaning: {meanings?.[0]?.definitions?.[0]?.definition}</h3> : <h3>meaning</h3>}
        </div>
        {/* antonyms */}

        <div>
          {meanings ? <h3>Synonyms: {meanings?.[0]?.synonyms?.map((item, ind) => {
            return <span style={{ cursor: "pointer" }} key={ind} onClick={() => setSearch(item)}>{item}{ind !== meanings[0].synonyms.length - 1 ? ', ' : ''}</span>;
          })}</h3> : <h3>Synonyms</h3>}
        </div>

        <div>
          {meanings ? <h3>Antonyms: {meanings?.[0]?.antonyms?.map((item, ind) => {
            return <span style={{ cursor: "pointer" }} key={ind} onClick={() => setSearch(item)}>{item}{ind !== meanings[0].antonyms.length - 1 ? ', ' : ''}</span>;
          })}</h3> : <h3>Antonyms</h3>}
        </div>
      </div>
    </>

  )
}

export default ApiData