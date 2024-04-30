// Calendario.jsx

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ptLocale from '@fullcalendar/core/locales/pt-br'; 
import "./index.css";
import "./calendario.css";

function Calendario() {
  const [popoverContent, setPopoverContent] = useState(null);
  const [events, setEvents] = useState([]);

  const handleEventMount = (info) => {
    const form = document.createElement("form");
    form.innerHTML = `
      <label for="title">Título</label>
      <input type="text" id="title" name="title" required /><br />
      <label for="description">Descrição</label>
      <textarea id="description" name="description"></textarea><br />
      <label for="start">Início</label>
      <input type="datetime-local" id="start" name="start" required /><br />
      <label for="end">Fim</label>
      <input type="datetime-local" id="end" name="end" required /><br />
      <button type="submit">Salvar</button>
    `;

    form.id = "popover-form";

    info.el.setAttribute("data-bs-content", form.outerHTML);
    info.el.setAttribute("data-bs-html", "true");
    info.el.setAttribute("data-bs-toggle", "popover");
    info.el.setAttribute("data-bs-trigger", "click");
    info.el.setAttribute("data-bs-placement", "auto");

    info.el.addEventListener("shown.bs.popover", () => {
      const popover = bootstrap.Popover.getInstance(info.el);
      setPopoverContent(popover);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEvent = {
      title: formData.get("title"),
      description: formData.get("description"), 
      start: formData.get("start"),
      end: formData.get("end"),
    };

    console.log("Novo evento:", newEvent);

    setEvents([...events, newEvent]);

    if (popoverContent) {
      popoverContent.hide();
    }
  };

  const handleEventMouseEnter = (info) => {
    const description = info.event.extendedProps.description;
    if (description) {
      info.el.setAttribute("data-bs-content", description);
  
      let popover = bootstrap.Popover.getInstance(info.el);
      if (!popover) {
        popover = new bootstrap.Popover(info.el, {
          trigger: "hover",
          container: "body",
          boundary: "viewport",
          html: true,
        });
      }
  
      // Atualiza e mostra o popover
      popover.update();
      popover.show();
    }
  };
  
  const handleDayCellContent = (arg) => {
    return { html: '<div class="cell-content">' + arg.dayNumberText + '</div>' };
  };

  return (
    <div className="calendario-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"91.2vh"}
        eventDidMount={handleEventMount}
        eventMouseEnter={handleEventMouseEnter} // Adiciona o evento mouse enter
        timeZone={"GMT-3"}
        dayCellContent={handleDayCellContent} // Utiliza a função handleDayCellContent
        events={events}
        locales={[ptLocale]}
        locale="pt-br"
      />

      <details>
        <summary className="summary">Criar Eventos</summary>        
            <div className="formulario-container">
              <form className="popover-form" onSubmit={handleSubmit}>
                <label className="popover__label" htmlFor="title">Título</label>
                <input className="popover__input-title" type="text" id="title" name="title" required /><br />
                <label className="popover__label"  htmlFor="description">Descrição:</label>
                <textarea className="popover__input-descricao" id="description" name="description"></textarea><br />
                <label className="popover__label"  htmlFor="start">Início</label>
                <input className="popover__input" type="datetime-local" id="start" name="start" required /><br />
                <label className="popover__label"  htmlFor="end">Fim</label>
                <input className="popover__input" type="datetime-local" id="end" name="end" required /><br />
                <button className="popover__button" type="submit">Salvar</button>
              </form>
            </div>
      </details>
    </div>
  );
}

export default Calendario;
