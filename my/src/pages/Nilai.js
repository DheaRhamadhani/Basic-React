import { useEffect, useState } from "react";

export default function Nilai(props) {
  let [nilai, setNilaii] = useState([]);

  // inisiasi state book
  useEffect(() => {
    let arrNilai = [
      {
        id: 1,
        name: `Aira Johnson`,
        math: 80,
        english: 90,
        chemistry: 70,
      },
      {
        id: 2,
        name: `Scarlette Mahatam`,
        math: 40,
        english: 80,
        chemistry: 79,
      },
      {
        id: 3,
        name: `Michael Oka Wahyu`,
        math: 50,
        english: 87,
        chemistry: 60,
      },
      {
        id: 4,
        name: `Mama Zile`,
        math: 70,
        english: 78,
        chemistry: 80,
      },
      {
        id: 5,
        name: `Essa Adila Rahman`,
        math: 50,
        english: 80,
        chemistry: 56,
      },
    ];

    setNilaii(arrNilai);
  }, []);

  let hitung = (math, english, chemistry) =>{
    let hasil = (math+english+chemistry)/3;
    return hasil
  }

  let status =(kkm) =>{
    if(kkm >= 75){
      return(
        <h6>
          <span className="badge rounded-pill bg-success">Passed</span>
        </h6>
      )
    }else if(kkm <= 74){
      return (
        <h6>
          <span className="badge rounded-pill bg-danger">Try Again</span>
        </h6>
      )
    }
  }

  return (
    <div>
        <h3 align= "center" class="bg-light text-dark">List Nilai</h3>
      <table className="table table-warning table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nama</th>
            <th scope="col">Math</th>
            <th scope="col">English</th>
            <th scope="col">Chemistry</th>
            <th scope="col">KKM</th>
            <th scope="col">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {nilai.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.math}</td>
              <td>{item.english}</td>
              <td>{item.chemistry}</td>
              <td>{hitung(item.math, item.english, item.chemistry).toFixed()}</td>
              <td>{status(hitung(item.math, item.english, item.chemistry))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
