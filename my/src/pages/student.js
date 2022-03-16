import { useState, useEffect } from "react";
/*
 * useState -> digunakan untuk mendefisinikan state
 * useEffect -> sebuah fungsi yang dijalankan (dieksekusi) ketika
 * komponennnya telah disampaikan
 */
import { Modal } from "bootstrap";

export default function Student(props) {
  let [students, setStudents] = useState([])
  let [modalStudent, setModalStudent] = useState(null)
  let [id, setId] = useState(0)
  let [name, setName] = useState("")
  let [birthdate, setBirthdate] = useState("")
  let [action, setAction] = useState("")

  useEffect(() => {
    // inisiasi data array students
    let arrayStudents = [
      { id: 1, name: `Dhea`, birthdate: `14 oktober 2004` },
      { id: 2, name: `Zila`, birthdate: `22 Agustus 2004` },
    ]
    setStudents(arrayStudents);

    // inisiasi state ModulStudent
    setModalStudent(new Modal(document.getElementById(`modal_student`)))
  }, [])

  // function add student
  let addStudent = () => {
      // open modal
      modalStudent.show()

      //reset setiap inputan
      setId(0)
      setName("")
      setBirthdate("")
      setAction("insert")
  }

  // function saveStudent
  let saveStudent = () =>{
      // close modal
      modalStudent.hide()
      if (action === `insert`) {
          let newData= {
              id: id, name: name, birthdate: birthdate
          }

          // store array from students
          let temp = [...students]
          // add new data
          temp.push(newData)
          // store to students again
          setStudents(temp)
      }
  }

  return (
    <div>
      <div className="card col-10">
        <div className="card-header bg-warning">
          <h3 className="text-white" align="center">List of my student</h3>
        </div>
        <div className="card-body">
          {/**
           * map() -> fungsi dari array untuk scanning setiap
           * data dalam array
           */}
          {students.map((item) => (
            <div className="row" key={`key${item.id}`}>
              <div className="col-2">
                <small>ID</small>
                <h5>{item.id}</h5>
              </div>
              <div className="col-4">
                <small>Name</small>
                <h5>{item.name}</h5>
              </div>
              <div className="col-4">
                <small>Birthdate</small>
                <h5>{item.birthdate}</h5>
              </div>
            </div>
          ))}

          {/** button add data */
          <button className="btn btn-warning"
              onClick={() => addStudent()}>
              Add
              </button>}

            {/** modal component */}
            <div className="modal" id="modal_student">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Form Student</h4>
                        </div>
                        <div className="modal-body">
                            {/** input for ID,Name,Birthdate */}
                            ID
                            <input type={`number`}
                                className="form-control mb-2" 
                                value= {id}
                                onChange={ev => setId(ev.target.value)}/>

                            Name
                            <input type={`text`}
                                className="form-control mb-2" 
                                value= {name}
                                onChange={ev => setName(ev.target.value)}/>

                            Birthdate
                            <input type={`text`}
                                className="form-control mb-2" 
                                value= {birthdate}
                                onChange={ev => setBirthdate(ev.target.value)}/>

                            <button className="btn btn-info"
                                onClick={() => saveStudent()}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             {/** end of modal */}
        </div>
      </div>
    </div>
  )
}
