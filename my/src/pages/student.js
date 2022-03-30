import { useEffect, useState } from "react"
/**
 * useState -> digunakan untuk mendefinisikan state
 * useEffect -> sebuah fungsi yang dijalankan (dieksekusi) ketika
 * komponennya telah ditampilkan
 *
 */
import { Modal } from "bootstrap";


export default function Student(props){
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setID] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    let [editID, setEditID] = useState("true")

    useEffect(() => {
        // inisiasi data array students
        let arrayStudents =[
            {id: 1, name: `Zila`, birthdate: `22 Agustus 2004`},
            {id: 2, name: `Dhea`, birthdate: `14 Oktober 2004`}
        ]
        setStudents(arrayStudents)

        // inisiasi state modalStudent
        setModalStudent(new Modal(document.getElementById(`modal_student`)))

    }, [])

    // function addStudent
    let addStudent = () => {
        // open modal
        modalStudent.show()

        // reset isi dari setiap inputan
        setID(0)
        setName("")
        setBirthdate("")
        setAction("insert")
        setEditID(true)
    }

    // function saveStudent
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...students]
            // add new data
            temp.push(newData)
            // store to students again
            setStudents(temp)
        }else if (action === `edit`) {
            // store data students to temp
            let temp = [...students]

            // find index of selected data by ID
            let index = temp.findIndex(item => item.id === id )

            // update data based on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to students from temp
            setStudents(temp)
        }
    }

    let editStudent = item => {
        // open modal
        modalStudent.show()
        setID(item.id)
        setName(item.name)
        setBirthdate(item.birthdate)
        setAction(`edit`)
        setEditID(false)
    }

    let deleteStudent = item => {
        if(window.confirm(`Are you sure want to delete this data?`)){
            // store array students to temp
            let temp = [...students]

            // find index of selected data by ID
            let index = temp.findIndex(sis => sis.id === item.id)

            // delete data from array based on founded index
            temp.splice(index, 1)

            // restore ke array students 
            setStudents(temp)
        }

    }

    return(
        <div>
            <div className="card col-10">
                <div className="card-header bg-info">
                    <h3 className="text-white" align="center">List of My Students</h3>
                </div>
                <div className="card-body">
                    {/* 
                      .map() -> fungsi dari array untuk scanning setiap data dalam array
                    */}
                    {students.map(item => (
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
                            <div className="col-2">
                                <small>Action</small> <br />
                                {/* edit button */}
                                <button className="btn btn-primary mx-1"
                                onClick={() => editStudent(item)}>
                                    Edit
                                </button>

                                {/* delete button */}
                                <button className="btn btn-danger mx-1"
                                onClick={() => deleteStudent(item)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* button add data */}
                    <button className="btn btn-info text-white"
                    onClick={() => addStudent()}>
                        Add
                    </button>

                    {/**create dropdown using name */}
                    <select>
                      {students.map(item => (
                        <option value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>

                    {/**create Display Radio */}
                     {students.map(item => (
                       <div>
                         <input type={`radio`} name={`name`}
                         value={item.id}/>
                         <label>{item.name} Tgl: {item.birthdate}</label>
                       </div>
                     ))}

                    {/* modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/* input for ID, Nama, Birthdate*/}
                                    ID 
                                    <input type={`number`}
                                        className="form-control mb-2" 
                                        value={id}
                                        onChange={ev => setID(ev.target.value)}
                                        readOnly={!editID} />
                                        {/* saat add student, editID = true 
                                            oleh karena itu readOnly harus bernilai false

                                            saat edit student editID = false
                                            oleh karena itu readOnly harus bernilai true
                                        */}

                                    Name
                                    <input type={`text`}
                                        className="form-control mb-2" 
                                        value={name}
                                        onChange={ev => setName(ev.target.value)}/>

                                    Birthdate
                                    <input type={`text`}
                                        className="form-control mb-2" 
                                        value={birthdate}
                                        onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn btn-success"
                                    onClick={() => saveStudent()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of modal */}
                </div>
            </div>
        </div>
    )
}