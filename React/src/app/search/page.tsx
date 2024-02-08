"use client"

import Link from 'next/link';
import { Result } from '../models/search-result.model';
import SearchResult from '../components/SearchResult';
import style from "./page.module.css";
import { useState } from 'react';
import { searchOmdb } from '../services/omdbService';
import { useDispatch, useSelector } from "react-redux";
import { clearPreviousSearch, updateSearch } from '../redux/slices/searchSlice';


export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useSelector((state: any) => state.search);
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  async function handleSubmit(e: any) {
    e.preventDefault();
    searchOmdb(searchTerm).then((result: any) => {
      setShowAlert(false);
      if(result.Search){
        dispatch(clearPreviousSearch());
      result.Search.map((movie: any) => {
        dispatch(updateSearch(movie))
      })
      } else {
        setAlert(result.Error);
        setShowAlert(true);
      }
    })
  }


  return (
    <div>
      <main>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.searchArea}>
            <input
              type="text"
              className={style.searchBar}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={style.searchButton} onClick={handleSubmit}>
              <span className="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </form>
        {showAlert &&
                <div className={style.alertBox}>
                    <span className="material-symbols-outlined">
                        warning
                    </span>
                    {alert}
                </div>
            }
      </main>
      <div className='collection'>
      {searchResults.map((result: Result) => (
        <SearchResult data={result} />
      ))}
      </div>
    </div>
  )
}