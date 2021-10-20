import React from 'react';

function QuotesContainer(props) {
  console.log(props.quote)
  return (
      <article className="container main__container">
        <h2 className="container__title container__title_font-size-s">Цитата дня</h2>
        <div className="fact">
          <p className="container__paragraph">{props.quote.body}</p>
        </div>
      </article>
  );
}

export default QuotesContainer;