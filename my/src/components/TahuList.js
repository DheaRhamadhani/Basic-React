export default function TahuList(props) {
  return (
    <div className=" row m-2 p-4" style={{ border: `1px solid black` }}>
      <div className="col-lg-3 p-2">
        <div className="rounded order border-dark p-2" style={{ border: `1px solid black` }}>
          <h6 align="center">Tanggal</h6>
          <h6 align="center">{props.tanggal}</h6>
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className=" rounded border border-dark p-2 bg-info " style={{ border: `1px solid black` }}>
          <h6 align="center">Stock Awal</h6>
          <h6 align="center">{props.stokAwal}Kg</h6>
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className=" rounded border border-dark p-2" style={{ background: "#77d98c", border: `1px solid black` }}>
          <h6 align="center">Stock Awal</h6>
          <h6 align="center">{props.terjual}Kg</h6>
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className=" rounded border border-dark p-2 bg-danger text-white " style={{ border: `1px solid black` }}>
          <h6 align="center">Rusak</h6>
          <h6 align="center">{props.rusak}Kg</h6>
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className=" rounded border border-dark p-2" style={{ background: "#9ea39f", border: `1px solid black` }}>
          <h6 align="center">Keuntungan</h6>
          <h6 align="center">{props.keuntungan}Kg</h6>
        </div>
      </div>
      <div className="card bg-light col-lg-6 p-2">
          <div className="card-body">
              <small>Presentase</small>
              <div className="progress">
            <div className="progress-bar bg-info" role="progress" style={{ width: `${props.progress}%` }} aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100">
              {`${props.progress}`}
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}
