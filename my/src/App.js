//import './App.css';
// import Test from "./components/Test";
//import Employe from "./components/Employe";
//import Accordion from './components/Accordion';
import Balok from './pages/Balok';

function App() {
  return (
    <div>
    <div className="App">

      <h3 align="center">This is my custom components</h3>
      {/* 
        nama element : h3
        attribute / properti: align
      */}
      {/* <Test name="Zila" city="Jakarta" fontColor="maroon"
      avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png">
        Zila adalah siswa XI RPL 4 absen 14
        <button>Click Here</button>
      </Test>
      <Test name="Dhea" city="Tuban" fontColor="navy"
      avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png">
        Dhea adalah siswa XI RPL 4 absen 10  
      </Test>
      <Test name="Jack" city="London" fontColor="black"
      avatar="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png ">
        Jack adalah siswa XI RPL 4 absen 40
    </Test> 
    </div> */}

    {/* <div className='accordion' id='accordion1'>
        <Accordion id="item1" header="Header 1" parent="#accoridon1">
      <Employe 
      name="Robert Pattinson"
      birthday="May 13th 1986"
      gender="Male"
      email="robert@gmail.com"
      contact="0982 765"
      divisi="Manager"
      image="https://disk.mediaindonesia.com/thumbs/1800x1200/news/2022/02/cee9e56566b67abc92f2efa940aaea38.jpg"
      />
      </Accordion>

      <Accordion id="item2" header="Header 2" parent="accoridon1">
      <Employe 
      name="Lynn Gunn"
      birthday="March 15th 1994"
      gender="Who cares"
      email="lynngunn@gmail.com"
      contact="0942 655"
      divisi="Lead Singer"
      image="https://i1.sndcdn.com/artworks-050JzwBzkBgPW84d-UDvMbg-t500x500.jpg"
      />
      </Accordion> */}

      {/* tampilkan komponen Balok*/}
      <Balok title="Lemari"/>
      <Balok title="Kotak Pensil"/>
      </div>
    </div>
      
  );
}

export default App;