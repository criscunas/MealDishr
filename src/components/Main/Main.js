

export default function Main({meal: {name, instructions, link, ingredients }}) {

  const ytEmbed = link.replace("watch?v=", "embed/")

  // console.log(ytEmbed)
    return(
        <>
        <header>
            <h1 className="dish-name">{name}</h1>
        </header>
        <div className="wrapper">
        
        
        <div className="video-ingridients">
            <h3 className="ingridients__title">Ingridients</h3>
            <ul className="ingridient">
              {
                ingredients.map((ing, i)=> (
                  <li key={i} className="ingridient__item">
                    <span className="ingridient__name">{ing.name}</span>: 
                    <span className="ingrident__amount">{" "}{ing.amount}</span></li>
                ))
              }
            </ul>

        </div>
            <div className="description">

            <div className="youtube-video">
                <iframe id="ytplayer" type="text/html"
                    src= {`${ytEmbed}`}
                    frameBorder="0">
                    </iframe>
            </div>
                        <h2 className="description__title">Description</h2>
            {instructions.split("\\r\\n").map((ele, i) => {
              // console.log("para", ele)
                return (
                    <p key={i} className = "description__text">{ele}</p>
                )
            })}
        </div>       
        </div>
        </>
    ) 
}