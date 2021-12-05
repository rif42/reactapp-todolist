import { useState } from "react";
import Form from "./components/Form";
import Jadwal from './components/jadwal.json'
import HarryPotter from './components/HarryPotter';

function App() {
  const [nama, setNama] = useState("skilvul");
  const [kelas, setKelas] = useState(12);
  const [domisili, setDomisili] = useState("Jakarta");

  const [formEkskul, setFormEkskul] = useState("");
  const [ekskul, setEkskul] = useState(["Basket", "futsal"]);

  const hari = ['senin', 'selasa', 'rabu']

  console.log(Jadwal)

  const jadwalFilter = Jadwal.filter( (item) => item.hari.includes("senin"))

  console.log(jadwalFilter)
  // const [murid, setMurid] = useState({
  //   nama: "skilvul",
  //   kelas: 12
  // })

  const handleChangeMurid = () => {
    console.log("test");
    setNama("Samsung");
  };
  return (
    <div>
      <HarryPotter />
      <h1>{nama}</h1>
      <h1>{kelas}</h1>

      <button onClick={() => setKelas(kelas + 1)}>Naik kelas</button>
      <button onClick={handleChangeMurid}>Ganti Nama</button>
      <Form domisili={domisili} setDomisili={setDomisili} />
      <p>{domisili}</p>

      <h1>List Ekskul</h1>
      <input
        type="text"
        value={formEkskul}
        onChange={(event) => setFormEkskul(event.target.value)}
      />

      <button
        onClick={() => setEkskul([...ekskul, formEkskul], setFormEkskul(""))}
      >
        Add Ekskul
      </button>
      {ekskul.map((item, key) => (
        <ul key={key}>
          <li>{item}</li>
        </ul>
      ))}

      {/* <div>
      <h1>Jadwal semua hari</h1>
      {Jadwal.map((item, key) => (
        <ul key={key}>
          <li>{item.hari}</li>
        </ul>
      ))}
      </div>
      <div>
        <h1>Jadwal hari senin</h1> */}
        {/* {names.filter(name => name.includes('J')).map(filteredName => (
          <li>
            {filteredName}
          </li>
        ))} */}

        {/* {
          hari.filter(item => item.includes('senin')).map(filteredHari => (
            <li>
              {filteredHari}
            </li>
          ))
        } */}

       {/* {
         jadwalFilter.map((item, key) => (
          <ul key={key}>
            <li>{item.hari}</li>
            <li>{item.tanggal}</li>
          </ul>
      ))
       }
      </div> */}
    </div>
  );
}

export default App;