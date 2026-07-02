import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

function LocationPicker({ setLat, setLng, setLocation }) {
  useMapEvents({
    click(e) {
      setLat(e.latlng.lat);
      setLng(e.latlng.lng);

      setLocation(
        `Lat: ${e.latlng.lat.toFixed(4)}, Lng: ${e.latlng.lng.toFixed(4)}`,
      );
    },
  });

  return null;
}

function EventsForm({ onAddEvent, editingEvent, onUpdateEvent, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  // Whenever the user clicks "Edit" on an event, sync the form inputs with that event's data

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title || "");
      setDate(editingEvent.date || "");
      setLocation(editingEvent.location || "");
      setDesc(editingEvent.desc || "");
      setLat(editingEvent.lat || null);
      setLng(editingEvent.lug || null);
    } else {
      // Clear form if not editing
      setTitle("");
      setDate("");
      setLocation("");
      setDesc("");
      setLat(null);
      setLng(null);
    }
  }, [editingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      id: editingEvent ? editingEvent.id : Date.now(),
      title,
      date,
      location,
      desc,
      lat,
      lng,
    };

    if (editingEvent) {
      // if we are editing, update the existing event
      onUpdateEvent(eventData);
    } else {
      // if we are not editing, create a brand new event
      onAddEvent(eventData);
    }

    // Reset form field
    setTitle("");
    setDate("");
    setLocation("");
    setDesc("");
    setLat(null);
    setLng(null);
  };

  return (
    <div className="bg-[#091839] h-100% p-5 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="lg:w-200 md:w-full text-white flex flex-col justify-center  space-y-4 p-4 border rounded"
      >
        <h3 className="text-2xl text-center font-serif bg-[#1146b9] p-2 rounded">
          {editingEvent ? "Edit Event" : "Create New Event"}
        </h3>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          required
          className="p-4 placeholder:text-white"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="p-4"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
          className="p-4 placeholder:text-white"
        />

        <div className="h-80 w-full rounded overflow-hidden">
          <MapContainer
            center={[6.5244, 3.3792]}
            zoom={12}
            className="h-full w-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationPicker
              setLat={setLat}
              setLng={setLng}
              setLocation={setLocation}
            />

            {lat && lng && <Marker position={[lat, lng]} />}
          </MapContainer>
        </div>

        <div className=" text-sm text-gray-300">
          {lat && lng ? (
            <p>
              📍 Selected: {lat.toFixed(4)}, {lng.toFixed(4)}
            </p>
          ) : (
            <p>Click on the map to set location</p>
          )}
        </div>

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="h-40 p-4 placeholder:text-white"
        />

        <div className="flex gap-2 justify-center items-center">
          <button
            className="bg-amber-400  py-2 px-4 rounded shadow-lg hover:bg-amber-300 transition-all duration-100 "
            type="submit"
          >
            {editingEvent ? "Save Changes" : "Create Event"}
          </button>

          {editingEvent && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EventsForm;
