import React, { useEffect, useMemo, useState } from "react";
import apiClient from "../api"; // Importamos la instancia de Axios
import "../CSS/calendario.css";

const pad = (n) => String(n).padStart(2, "0");
const toKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const parseKey = (key) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function addMonths(date, n) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}
function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildMonthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];
  let dayCounter = 1 - startDay;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(year, month, dayCounter);
      week.push(date);
      dayCounter++;
    }
    grid.push(week);
  }
  return grid;
}

const STORAGE_KEY = "school_calendar_events_v1";

function Calendario() {
  const today = new Date();
  const [cursor, setCursor] = useState(startOfMonth(today));
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState("");

  // Carga los eventos desde el backend al iniciar
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // NOTA: Esto fallará hasta que crees el endpoint GET /api/eventos
        const response = await apiClient.get("/eventos");
        setEvents(response.data);
      } catch (error) {
        console.error("Error al cargar los eventos:", error);
      }
    };
    fetchEvents();
  }, []);

  const grid = useMemo(
    () => buildMonthMatrix(cursor.getFullYear(), cursor.getMonth()),
    [cursor]
  );
  const monthName = cursor.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  async function addEvent() {
    if (!newEvent.trim() || !selectedDate) return;
    const newEventData = {
      date: toKey(selectedDate),
      title: newEvent,
    };
    try {
      // NOTA: Esto fallará hasta que crees el endpoint POST /api/eventos
      const response = await apiClient.post("/eventos", newEventData);
      setEvents([...events, response.data]);
      setNewEvent("");
      setSelectedDate(null);
    } catch (error) {
      console.error("Error al agregar el evento:", error);
    }
  }

  function eventsOn(date) {
    const key = toKey(date);
    return events.filter((ev) => ev.date === key);
  }

  const weekDayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  return (
    <div className="calendar-app">
      <div className="calendar-header">
        <button onClick={() => setCursor(addMonths(cursor, -1))}>{"<"}</button>
        <h2>{monthName}</h2>
        <button onClick={() => setCursor(addMonths(cursor, 1))}>{">"}</button>
      </div>

      <div className="calendar-grid">
        {weekDayNames.map((d) => (
          <div key={d} className="calendar-dayname">
            {d}
          </div>
        ))}
        {grid.flat().map((date, idx) => {
          const inMonth = date.getMonth() === cursor.getMonth();
          const isToday = isSameDay(date, new Date());
          const dayEvents = eventsOn(date);
          return (
            <div
              key={idx}
              className={`calendar-cell ${inMonth ? "" : "out-month"} ${
                isToday ? "today" : ""
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <div className="day-number">{date.getDate()}</div>
              <ul className="events-list">
                {dayEvents.map((ev) => (
                  <li key={ev.id}>{ev.title}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="event-form">
          <h3>Agregar evento para {selectedDate.toLocaleDateString()}</h3>
          <input
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Título del evento"
          />
          <button onClick={addEvent}>Guardar</button>
        </div>
      )}
    </div>
  );
}

export default Calendario;
