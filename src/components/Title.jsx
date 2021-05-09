import React, { useState } from 'react';

export default function Title() {
  console.log('Title');
  
  const [title, setTitle] = useState('Make own title');

  return (
    <>
      <h2>{title}</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} />
    </>);
}