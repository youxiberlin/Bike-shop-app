import Bike from '../models/bike'

const BIKES = [
  new Bike(
    1,
    "VRC Evo mat black",
    "road",
    890.50,
    {
      51: 0,
      53: 2,
      55: 0,
      57: 1,
      58: 0,
    },
    [
      "https://images.internetstores.de/products/1225449/02/372fe5/votec-vrc-evo-black-matte-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1225449/01/70c935/votec-vrc-evo-black-matte-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1225449/01/0184bc/votec-vrc-evo-black-matte-3.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    2,
    "Loft 7D EQ Damen seafoam",
    "city",
    230.50,
    {
      51: 1,
      53: 2,
      55: 0,
      57: 0,
      58: 0,
    },
    [
      "https://images.internetstores.de/products/1076423/02/9f4678/electra-loft-7d-eq-damen-seafoam-7.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1076423/02/b3220d/electra-loft-7d-eq-damen-seafoam-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1076423/01/84e570/electra-loft-7d-eq-damen-seafoam-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    3,
    "Townie Path Go! Damen matte rosewood",
    "e-bike",
    1240.00,
    {
      51: 0,
      53: 0,
      55: 0,
      57: 1,
      58: 1,
    },
    [
      "https://images.internetstores.de/products/1076534/02/7bf09e/electra-townie-path-go-5i-275-damen-matte-rosewood-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1076534/02/3623bc/electra-townie-path-go-5i-275-damen-matte-rosewood-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1076534/02/0703ff/electra-townie-path-go-5i-275-damen-matte-rosewood-3.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    4,
    "Bear Peak Power 2.0 black/black",
    "mountain",
    660.50,
    {
      51: 0,
      53: 2,
      55: 0,
      57: 0,
      58: 0,
    },
    [
      "https://images.internetstores.de/products/1005968/02/9beee7/serious-bear-peak-power-20-black-black-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1005968/02/ade296/serious-bear-peak-power-20-black-black-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1005968/02/c1f3f3/serious-bear-peak-power-20-black-black-3.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    5,
    "Gravix Pro mantis",
    "road",
    1799.50,
    {
      51: 0,
      53: 0,
      55: 1,
      57: 1,
      58: 1,
    },
    [
      "https://images.internetstores.de/products/1281882/02/842d91/serious-gravix-pro-mantis-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1281882/02/4ce818/serious-gravix-pro-mantis-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1281882/02/151eb7/serious-gravix-pro-mantis-3.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    6,
    "Rockville Disc white/pink",
    "mountain",
    760.50,
    {
      51: 1,
      53: 0,
      55: 0,
      57: 1,
      58: 0,
    },
    [
      "https://images.internetstores.de/products/1132004/02/67e335/serious-rockville-275-disc-white-pink-7.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1132004/02/1a29d1/serious-rockville-275-disc-white-pink-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1132004/01/dc001d/serious-rockville-275-disc-white-pink-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    7,
    "Fenix SL Disc 105 red",
    "road",
    2490.50,
    {
      51: 1,
      53: 0,
      55: 0,
      57: 1,
      58: 1,
    },
    [
      "https://images.internetstores.de/products/1368804/02/678b72/ridley-bikes-fenix-sl-disc-105-red-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1368804/02/145031/ridley-bikes-fenix-sl-disc-105-red-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1368804/02/77f797/ridley-bikes-fenix-sl-disc-105-red-3.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
  new Bike(
    8,
    "Detroit EQ Wave berry",
    "city",
    340.50,
    {
      51: 0,
      53: 1,
      55: 0,
      57: 2,
      58: 1, 
    },
    [
      "https://images.internetstores.de/products/1124297/02/04ffc9/ortler-detroit-eq-damen-berry-7.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1124297/02/91a7a0/ortler-detroit-eq-damen-berry-1.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613",
      "https://images.internetstores.de/products/1124297/01/890527/ortler-detroit-eq-damen-berry-2.jpg?forceSize=true&forceAspectRatio=true&useTrim=true&size=613x613"
    ]
  ),
]

export default BIKES;
