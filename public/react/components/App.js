import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { SinglePage } from './SinglePage';
import apiURL from '../api';



export const App = () => {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(null);

  async function fetchPages() {
		console.log
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log('Oh no an error!', err);
    }
  }

  async function fetchSinglePage(slug) {
    try {
      const response = await fetch(`${apiURL}/wiki/${slug}`);
      const pageData = await response.json();
      setPage(pageData);
    } catch (err) {
      console.log('Oh no an error!', err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {page ? (
        <SinglePage page={page} setPage={setPage} />
      ) : (
        <PagesList pages={pages} fetchSinglePage={fetchSinglePage} />
      )}
    </main>
  );
};
