import React from "react";
import "./Card.css";
import mapIcon from "../../assets/map.png";

export const Card = ({
  banner,
  logo,
  title,
  ubicación,
  horario,
  labelLink,
  link,
}) => {
  const getScheduleStatus = () => {
    const now = new Date();
    const [startHour, startMinute] = horario.inicio.split(":").map(Number);
    const [endHour, endMinute] = horario.fin.split(":").map(Number);

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const currentTime = currentHour * 60 + currentMinute;
    const startTime = startHour * 60 + startMinute;
    const endTime = endHour * 60 + endMinute;

    if (currentTime >= startTime && currentTime < endTime) {
      if (endTime - currentTime <= 60) {
        return "Cierra pronto";
      }
      return "Abierto";
    }
    return "Cerrado";
  };

  const status = getScheduleStatus();

  return (
    <div className="card">
      <header style={{ backgroundImage: `url(${banner})` }}>
        <img src={logo} alt={`${title} logo`} className="card-header-logo" />
      </header>

      <main>
        <h2 className="card-title">{title}</h2>
        <p className="card-location">
          <img
            src={mapIcon}
            alt="Location icon"
            className="card-location-icon"
          />{" "}
          {ubicación}
        </p>
        <div className="card-schedule-status">
          <div className="card-schedule">
            <span className="card-schedule-day">Horario {horario.dia}</span>
            <span className="card-schedule-time">
              {horario.inicio} a {horario.fin}
            </span>
          </div>
          <div
            className={`card-status card-current-status status-${status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            <p>{status}</p>
          </div>
        </div>
      </main>
      <footer>
        <hr />
        <div className="card-link-container">
          <a href={link} className="card-link">
            {labelLink}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Card;
