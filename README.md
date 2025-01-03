# Bird Simulator Client

This client app allows you to interact with the Bird Simulator Server and control the behavior of the birds in the simulation. With a map interface, status panels for each bird, and bird's-eye view, you can observe and manage the birds in a variety of ways.
## Installation

To install the dependencies for this project, run the following command:

```bash
npm install
```

## Usage

To start the server, run the following command:

```bash
npm start
```

After starting the client, you will be able to interact with the birds in the simulation using the following interface components:

### Map Interface
The map interface allows you to view the location of all the birds in the simulation and adjust their locations. It includes the following features:

- View the location of all the birds with important properties.
- Click on each bird to select it and open the bird's status panel.
- Right-click on the map to send birds to different locations.
- Right-click on a bird to open the bird's-eye view and change its height and velocity.
- Hover on the top left menu to control map layout and entities.

### Bird Status Panel
The bird status panel displays all of the bird's properties and state, including height, velocity, and calories consumption. Use the panel to monitor the bird's behavior and adjust its settings as needed.

### Bird's-Eye View
The bird's-eye view provides a 3D rendering of North Israel from the perspective of the selected bird. Use the display to control the direction of the bird's eyes and observe its surroundings.



### Configuration

The `config.js` file is where you can change the server's settings. The following variables can be modified:

```javascript
export const intervalRate = 1000; // The client's run interval in milliseconds (should be the same as the server's)
export const runFrontInterval = true; // If false it should stop requesting data from the server. Use only for development.
export const APIURL = "http://localhost:4000/"; // The server's URL, change accordingly.
```

Modify these values as necessary to adjust the client's behavior to your needs.

## License

This project is currently private and not available under an open-source license.




