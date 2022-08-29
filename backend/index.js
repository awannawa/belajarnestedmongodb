const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Jadwal = require("./src/models/index");

mongoose.connect("mongodb://localhost:27017/belajarnesting");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Koneksi database gagal..."));

db.once("open", () => {
  console.log("Koneksi database berhasil!");
});

const app = express();
const port = 4000;

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

app.listen(port, () => {
  console.log("Server berhasil running pada port : " + port);
});

// run();
// async function run() {
//   try {
//     const jadwal = await Jadwal.create({
//       //   klinik: "Bedah",
//       jadwal: [
//         {
//           namaDokter: "Suep",
//           jamPraktek: "12.00 - 12.00",
//         },
//         {
//           namaDokter: "Suep2",
//           jamPraktek: "12.00 - 12.00",
//         },
//         {
//           namaDokter: "Suep3",
//           jamPraktek: "2.0 - 12.0",
//         },
//       ],
//     });
//   } catch (e) {
//     console.log(e.message);
//   }
// }
