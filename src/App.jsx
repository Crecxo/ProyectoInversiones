import { useState, useEffect } from 'react';

import inv1 from './assets/renta-fija-y-renta-variable.jpg';
import inv2 from './assets/5fc7603685a7f35b210f24dd_renta-fija-renta-variable-vivus.jpg';
import inv3 from './assets/bolsa-valores-main.jpg';
import inv4 from './assets/Invertir-en-divisas-extranjeras-1.jpg';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/carrito/Card';


import './App.css'


const data = [
  {
    title: 'Renta variable',
    descripcion: 'implica comprar acciones de una empresa y, por lo tanto, tener una participación en la propiedad de dicha empresa.',
    img: inv1,
    moreDesc: "La renta variable es una forma de inversion  financiera  en la que los inversores adquieren una participación o acción en una empresa (el tener una accion es lo equivalente a tener un titulo lo cual significa a tener una pequeña parte de la empresa por accion, a mayor numeros de acciones mayor sera lo que te pertence del capital social de la empresa. ) ,lo que les confiere la propiedad parcial de la misma. A diferencia de la renta fija, en la renta variable no hay pagos de intereses o devolución de capital garantizados lo cual conlleva  a que se podria no ganar nada o en el peor de los casos perder mas que lo invertido.",
    example1: "1. Elige una corredora de bolsa: Para invertir en renta variable necesitarás una corredora de bolsa que te permita comprar y vender acciones. Investiga diferentes corredoras y elige una que se ajuste a tus necesidades.",
    example2: "2. Abre una cuenta de inversión: Una vez que hayas elegido tu corredora, abre una cuenta de inversión con ellos. La mayoría de las corredoras te permiten abrir una cuenta en línea y el proceso es bastante sencillo.",
    example3: "3. Investiga las empresas: Una vez que tengas tu cuenta, investiga las empresas que te interesan y haz un seguimiento de su rendimiento en el mercado. Puedes usar herramientas en línea para hacer esto.",
    example4: "4. Compra acciones: Cuando encuentres una empresa cuyas acciones te gusten, compra las acciones a través de tu corredora de bolsa. Puedes elegir cuántas acciones quieres comprar y a qué precio.",
    example5: "5. Sigue tus inversiones: Una vez que hayas comprado tus acciones, asegúrate de seguir su rendimiento y hacer ajustes si es necesario. Recuerda que invertir en renta variable puede ser arriesgado, así que siempre es importante estar informado y tomar decisiones informadas."
  },
  {
    title: 'Renta fija',
    descripcion: 'Este tipo de inversión es popular debido a que el riesgo es mínimo, aunque su principal desventaja es que el margen de ganancias también es bajo',
    img: inv2,
    moreDesc: "La renta fija es  una clase de activo financiero en la que los la persona prestan dinero a una entidad( ya sea un gobierno, una empresa o una institución financiera) a cambio de un pago de intereses periódico y la devolución del capital prestado en una fecha de vencimiento acordada, normalmente la devolucion del pago es de 8 meses hasta 1 año, este tipo de acciones son normalmente seguras  ya que la devolucion del dinero se asegura por leyes y normas del pais, al ser seguras la ganancias no sera de una grande cantidad como serian otras formas de inversion.",
    example1: "1. Elige un instrumento de renta fija: La renta fija incluye bonos, certificados de depósito (CD), notas del Tesoro y otros instrumentos similares. Investiga los diferentes tipos de instrumentos y elige el que se ajuste a tus necesidades y objetivos.",
    example2: "2. Investiga las opciones disponibles: Una vez que hayas elegido el tipo de instrumento de renta fija, investiga las diferentes opciones disponibles en el mercado. Compara las tasas de interés, plazos y calificaciones crediticias para tomar una decisión informada.",
    example3: "3. Abre una cuenta o adquiere el instrumento: Dependiendo del tipo de instrumento que elijas, deberás abrir una cuenta con un banco, corredor o institución financiera para adquirirlo. Sigue los procedimientos establecidos por la entidad correspondiente.",
    example4: "4. Realiza la inversión: Una vez que hayas abierto tu cuenta o adquirido el instrumento, realiza la inversión. Esto implica transferir fondos a tu cuenta o comprar directamente el instrumento de renta fija.",
    example5: "5. Monitorea y recibe pagos: A medida que pasa el tiempo, monitorea tus inversiones en renta fija y asegúrate de recibir los pagos acordados. Los pagos pueden ser intereses periódicos o pagos al vencimiento del instrumento."
  },
  {
    title: 'Rolsa de valores',
    descripcion: 'carácter privado ofrece la posibilidad de comprar y vender acciones de empresas, donde no es necesario ser el dueño para poder invertir.',
    img: inv3,
    moreDesc: "La bolsa de valores es una organización pública o privada que brinda a  sus miembros la capicidad de que estos realicen acciones de compra y venta de bonos (activo financiero como un título,acciones de empresas , entre otros en los  que se puede comprar y vender), tales como acciones de sociedades o compañías anónimas, bonos públicos(aquellos que pertenzen al estado) o privados(empresas como coca cola,adidas,etc).",
    example1: "1. Elige un corredor de bolsa: Para invertir en la bolsa necesitarás un corredor de bolsa que te permita comprar y vender acciones. Investiga diferentes corredores y elige uno que se ajuste a tus necesidades.",
    example2: "2. Abre una cuenta de inversión: Una vez que hayas elegido tu corredor, abre una cuenta de inversión con ellos. La mayoría de los corredores te permiten abrir una cuenta en línea y el proceso es bastante sencillo.",
    example3: "3. Investiga las acciones: Una vez que tengas tu cuenta, investiga las acciones que te interesan y haz un seguimiento de su rendimiento en el mercado. Puedes usar herramientas en línea para hacer esto.",
    example4: "4. Compra acciones: Cuando encuentres una acción que te guste, compra las acciones a través de tu corredor de bolsa. Puedes elegir cuántas acciones quieres comprar y a qué precio.",
    example5: "5. Sigue tus inversiones: Una vez que hayas comprado tus acciones, asegúrate de seguir su rendimiento y hacer ajustes si es necesario. Recuerda que invertir en la bolsa puede ser arriesgado, así que siempre es importante estar informado y tomar decisiones informadas."
    
  },
  {
    title: 'Inversion de divisas',
    descripcion: 'El objetivo es obtener ganancias a través de la fluctuación del tipo de cambio entre dos monedas diferentes.',
    img: inv4,
    moreDesc: "La inversión de divisas o  también llamada  como inversión en divisas extranjeras o forex (abreviatura de foreign exchange), se refiere a la compra y venta de monedas de diferentes países( como el dolar, euro, yen,yuan;etc) con el objetivo de obtener ganancias mediante la especulación sobre si esa moneda sube o pierda valor. Un ejemplo de esto seria comprar dolares con pesos ya que el dolar ira subiendo su valor y asi generar ganacias.",
    example1: "1. Elige una plataforma de trading de divisas: Para invertir en divisas, necesitarás una plataforma de trading que te permita acceder al mercado de forex. Investiga diferentes plataformas y elige una confiable y regulada.",
    example2: "2. Abre una cuenta de trading: Una vez que hayas elegido tu plataforma, abre una cuenta de trading con ellos. Completa los formularios requeridos y verifica tu identidad.",
    example3: "3. Aprende sobre los pares de divisas: Familiarízate con los diferentes pares de divisas disponibles para operar. Por ejemplo, EUR/USD (euro/dólar estadounidense) es uno de los pares más populares.",
    example4: "4. Analiza el mercado: Utiliza herramientas de análisis técnico y fundamental para evaluar las tendencias del mercado y tomar decisiones informadas sobre cuándo comprar o vender.",
    example5: "5. Realiza operaciones: Utiliza la plataforma de trading para ejecutar tus operaciones. Puedes comprar una divisa si crees que su valor aumentará en comparación con otra divisa, o venderla si crees que disminuirá.",
    example6: "6. Administra el riesgo: Establece límites de pérdida y toma ganancias para controlar el riesgo. Utiliza órdenes stop-loss y take-profit para cerrar automáticamente tus operaciones cuando alcancen ciertos niveles.",
    example7: "7. Sigue el mercado: Monitorea regularmente tus posiciones abiertas y mantente actualizado sobre las noticias económicas y políticas que puedan afectar los tipos de cambio."
  }
]

function App() {

  const [info, saveInfo] = useState([]);


  function renderInfo(title, desc, img, moreDesc,example1,example2,example3,example4,example5,example6,example7) {
    saveInfo([{
    title: title,
    Image: img,
    desc: desc,
    moreDes: moreDesc,
    example1: example1,
    example2: example2,
    example3: example3,
    example4: example4,
    example5: example5,
    example6: example6,
    example7: example7
    }])
    console.log(info)
  }

  useEffect(()=> {

  }, [info])

  return (
    <>
      <Header/>
      <div className='firstTitle_container'>
      <h1>Tipos de inversiones</h1>
      </div>
      <div className="container_main">
        <div className="inv_container">
          {data.map((item, index)=> {
            return (
              <div className='card' key={index}>
                <img src={item.img} alt="img"/>
                <h3>{item.title}</h3>
                <p>{item.descripcion}</p>
                <button 
                onClick={()=>renderInfo(
                  item.title, 
                  item.descripcion, 
                  item.img,
                  item.moreDesc,
                  item.example1,
                  item.example2,
                  item.example3,
                  item.example4,
                  item.example5,
                  item.example6,
                  item.example7)}>
                  Mostrar informacion
                </button>
              </div>
            )
          })}
        </div> 
      </div>
      <div className='prueba'>
      <Card info={info}/>
      </div>
      
      <Footer />
    </>
  )
}

export default App 



