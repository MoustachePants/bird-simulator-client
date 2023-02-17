import { useMapEvents } from "react-leaflet";

const MapEvents = (props) => {
  const map = useMapEvents({
    contextmenu: (event) => {
      props.onContextMenu({
        isOpen: true,
        position: event.latlng,
      });
    },
    click: () => {
      props.onDeSelect(null);
    },
  });
  return null;
};

export default MapEvents;
