function Employe(props){
    return (
        <div className="row">
            {/* bagian gambar */}
            <div className="col-3">
                {/* load image */}
                <img className="img img-rounded" 
                src= {props.image} alt="Gambar" 
                style={{width: `10rem`}}/>
            </div>

            {/* bagian kedua */}
            <div className="col-4" align="left">
                <small className="text-info"> Nama </small>
                <h5>{props.name}</h5>

                <small className="text-info"> Tanggal Lahir </small>
                <h5>{props.birthday}</h5>

                <small className="text-info"> Gender </small>
                <h5>{props.gender}</h5>
            </div>

            {/* bagian ketiga */}
            <div className="col-4" align="left">
                <small className="text-info"> Email </small>
                <h5>{props.email}</h5>

                <small className="text-info"> Phone </small>
                <h5>{props.contact}</h5>

                <small className="text-info"> Divisi </small>
                <h5>{props.divisi}</h5>
            </div>
        </div>
    )
}
export default Employe;