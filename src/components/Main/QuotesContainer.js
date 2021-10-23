import React from 'react';

function QuotesContainer(props) {
  return (
      <article className={`container ${props.isDarkTheme && 'container_theme_dark'} main__container`}>
        <h2 className="container__title container__title_font-size-s">Цитата дня</h2>
        <div className="fact">
          <p className={`container__paragraph ${props.isDarkTheme && 'container__paragraph_theme_dark'}`}>{props.quote.body}</p>
        </div>
      </article>
  );
}

export default QuotesContainer;