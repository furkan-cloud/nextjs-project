import React from "react";
import EventItem from "./event-item";
import classes from "./evet-list.module.css"

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}> 
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
