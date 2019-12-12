import React from 'react';

export default function QuoteCard({ text, author }) {
  return (
    <div className="quote-card">
      <p>{text}</p>
      <h5>{author}</h5>
    </div>
  );
}
