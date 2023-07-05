import './Card.css';

function Card({info}) {

  return (
    <div className='moreInfo_container'>
      {info.map(({title,moreDes,example1,example2,example3,example4,example5,example6,example7}) => {
        return (
          <>
          <div className='firstInfo_container'>
          <div className='title_container'>
            <h2>{title}</h2>
          </div>
          <div className='desc_container'>
            <p>{moreDes}</p>
          </div>
          </div>
          <div className='examples_container'>
            <h3>Ejemplos</h3>
            <p>{example1}</p>
            <p>{example2}</p>
            <p>{example3}</p>
            <p>{example4}</p>
            <p>{example5}</p>
            <p>{example6}</p>
            <p>{example7}</p>
          </div>
          </>
        );
      })}
    </div>
  );

    }
    
export default Card;

