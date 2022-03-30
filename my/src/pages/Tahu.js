import { useEffect, useState } from "react";
import TahuList from "../components/TahuList";

export default function Tahu(props) {
  let [tahuu, setTahuu] = useState([]);

  useEffect(() => {
    let arrayTahu = [
      {
        tanggal: `01-03-2022`,
        stokAwal: 100,
        terjual: 85,
        rusak: 5,
        hargaDasar: 3000,
        hargaJual: 4500,
        progress: 30
      },
      {
        tanggal: `04-03-2022`,
        stokAwal: 50,
        terjual: 40,
        rusak: 5,
        hargaDasar: 3500,
        hargaJual: 4500,
        progress: 20
      },
      {
        tanggal: `10-03-2022`,
        stokAwal: 70,
        terjual: 60,
        rusak: 10,
        hargaDasar: 4000,
        hargaJual: 5000,
        progress: 90
      },
    ];

    setTahuu(arrayTahu);
  },[])
 
    return (
        <div className="container-fluid">
            <h3 align="center">Tahu List</h3>
            {tahuu.map((item) => (
        <TahuList 
        key={`key-${item.tanggal}`}
        tanggal={item.tanggal}
        stokAwal={item.stokAwal}
        terjual={item.terjual}
        rusak={item.rusak}
        hargaDasar={item.hargaDasar}
        hargaJual={item.hargaJual}
        progress={item.progress}>

        </TahuList>
      ))}
        </div>
    )
}
