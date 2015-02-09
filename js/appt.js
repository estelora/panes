//just has data, doesn't do anything with it
//doesn't save it either, just holds
function Appointment(spec) {
  return {
    title: spec.title,
    street: spec.street,
    city: spec.city,
    date: spec.date,
    time: spec.time
  };
}