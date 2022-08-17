import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "First event",
  },
  {
    start: moment().toDate(),
    end: moment().add(3, "hours").toDate(),
    title: "Second event",
  },
];

function AppCalendar() {
  const handleClickEvent = (event: { title: string }) => {
    alert(`${event.title} was clicked`);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleClickEvent}
      />
    </div>
  );
}

export default AppCalendar;
