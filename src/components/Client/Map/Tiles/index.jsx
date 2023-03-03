import { TileLayer } from "react-leaflet";

const Tiles = ({ selectedTile }) => {
  return (
    <>
      {selectedTile === "Water Color" && (
        <TileLayer // ! if I upload online I should add the attribution!
          // attribution='Index tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Index data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
          ext="jpg"
        />
      )}
      {selectedTile === "Satellite" && (
        <TileLayer // ! if I upload online I should add the attribution!
          // attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      )}
    </>
  );
};

export default Tiles;
