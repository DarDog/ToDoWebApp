import React from 'react';
import clock from "../../images/clock.svg";
import calendar from "../../images/calendar.svg";
import { monthList } from "../../utils/constans";

function CurrentDate() {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0)
  const [hours, setHours] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState(0);
  const [milliseconds, setMilliseconds] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
      setDay(date.getDate());
      setMonth(monthList[date.getMonth()]);
      setYear(date.getFullYear());
    });
  }, [milliseconds]);

  return (
      <article className="container main__container">
        <h2 className="container__title container__title_font-size-s">Такс такс такс</h2>
        <div className="date">
          <ul className="list container__list list_flex_row">
            <li className="container__item container__item_flex_column">
              <p className="date__name">На часах у нас</p>
              <div className="date__types">
                <img src={clock} alt="часы" className="date__type-image"/>
                <p className="date__type"><span className="hour">{hours < 10 ? `0${hours}` : hours}</span>:<span
                    className="minute">{minutes < 10 ? `0${minutes}` : minutes}</span>:<span
                    className="second">{seconds < 10 ? `0${seconds}` : seconds}</span>
                </p>
              </div>
            </li>
            <li className="container__item container__item_flex_column">
              <p className="date__name">А сегодня у нас</p>
              <div className="date__types">
                <img src={calendar} alt="Календарь" className="date__type-image"/>
                <p className="date__type"><span className="day">{day}</span> <span
                    className="month">{month} </span>
                  <span className="year">{year}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
  );
}



export default CurrentDate;