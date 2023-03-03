import React from 'react';

export const SinglePage = ({ page, setPage }) => {
  return (
    <>
      <button onClick={() => setPage(null)}>Back to Wiki List</button>
      <h2>{page.title}</h2>
      <p>Author: {page.author}</p>
      <p>Date: {page.createdAt}</p>
      <p>Tags: {page.tags}</p>
      <p>{page.content}</p>
    </>
  );
};

