import { useState, React } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import playAlert from 'alert-sound-notify';
import './bell.mp3';


function App() {

  const [prisma, setPrisma] = useState('');

  const [numeros, setNumeros] = useState([]);



  function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    if (hor < 10) {
      hor = "0" + hor;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (seg < 10) {
      seg = "0" + seg;
    }

    var horas = hor + ":" + min + ":" + seg;
    document.getElementById("rel").value = horas;
  }

  function chamaPrisma(e) {
    e.preventDefault();

    if (prisma) {

      setNumeros([...numeros, h, "Prisma  " + prisma])
      setPrisma('')
      var ultimo = prisma
      document.getElementById("p").value = ultimo;

      toast.success("Prisma  " + prisma)

      
      playAlert('glass')
      //playAlert('submarine')
    }


  }



  var dia = new Date();
  var hora = dia.getHours();
  var minuto = dia.getMinutes();
  var h = hora + ":" + minuto;

  var timer = setInterval(relogio, 1000);

  return (
    <div className='prisma'>
      <h1 className='h1'>CHAMA PRISMA</h1>

      <form onSubmit={chamaPrisma} className='inseriPrisma'>
        <label>Prisma</label><br />
        <input placeholder='Número do Prisma' value={prisma} onChange={(e) => setPrisma(e.target.value)} />
      </form>

      <table>
        <tr>
          <th>
            <div className='numero'><input type="text" id="p"></input></div>
            <div className='relogio'><input type="text" id="rel"></input></div>
          </th>
          <th>
            <ul >
              {numeros.map(numero => (
                <li key={numero} > {numero}
                </li>

              ))}
            </ul>
          </th>
        </tr>
      </table>
      <ToastContainer />
    </div>


  );
}

export default App;
