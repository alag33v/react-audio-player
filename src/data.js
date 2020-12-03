import {v4 as uuidv4} from 'uuid'

function chillHop() {
  return [
    {
      name: "Les Mouvements d'Hiver",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/d2898bc0ef36b5d67d6793062d588d208a90421c-1024x1024.jpg",
      artist: "L'Indécis, sadtoi",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10351",
      color: ["#DB9AB9", "#F4C5B1"],
      id: uuidv4(),
      active: true
    },
    {
      name: "Yesterdays",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "xander.",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10333",
      color: ["#DBC5D2", "#1D404C"],
      id: uuidv4(),
      active: false
    },
    {
      name: "Going Back",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      color: ["#343539", "#283964"],
      id: uuidv4(),
      active: false
    },
    {
      name: "Magenta Forever",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      artist: "Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10458",
      color: ["#8E54A3", "#90B3E9"],
      id: uuidv4(),
      active: false
    },
    {
      name: "Beaver Creek",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Zenith",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9927",
      color: ["#83A07D", "#8CD0B4"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    }
  ];
}

export default chillHop