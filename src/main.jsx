import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Books from './Books'

let books = {
  seriesName: "Dragons in Our Midst",
  author: "Bryan Davis",
  booksInSeries: [
    {title: "Raising Dragons", year: 2004, synopsis: "A boy learns of his dragon past; a girl has known hers for years. They combine their faith, courage, and love to overcome an evil slayer who seeks to bring an end to dragon heritage, forever.<br></br>The kids at school call Billy \"Dragon Breath\" for good reason. His breath is bad! It isn't the normal, morning-mouth bad; it's the hot-as-fire, \"don't-you-dare-get-near-me\" bad. Trouble erupts when his hot breath sets off the fire sprinklers in the boys' restroom in school, and his parents learn that they've kept their secret for too long.<br></br>Billy finally discovers the secret. His father was once a dragon! Now that's a piece of news a guy doesn't deal with every day! Billy feels betrayed, alien, lost. When the dragon slayer traps him on a cold mountaintop in West Virginia, Billy learns to battle with weapons of steel and spirit while relying on a power he doesn't understand, a power that helps him learn to trust again.<br></br>Bonnie, an orphan, tries to find a home, someone to love her, even though she feels like a freak because of a body feature that she calls a deformity. But this unusual feature becomes a life-saving attribute as she discovers that her love for others and her faith in a creator hold the answers she's looking for."},
    {title: "The Candlestone", year: 2004, synopsis: "The Candlestone continues to follow Billy Bannister, Bonnie Silver, and their friends where Raising Dragons left off.<br></br>Billy and Bonnie wonder about a number of unsolved mysteries. What was the strange book that the dragon slayers used to summon a dragon? Where is the magnificent sword that seemed to disintegrate the evil Devin? And what happened to The Candlestone, that strange gem, always absorbing light and with it the powers of dragons or dragon children within its sphere of influence?<br></br>The Candlestone not only absorbs light, it captures and holds encoded light, including transluminated humans, people who have been transformed into light energy by Excalibur, King Arthur’s great sword. When Bonnie enters the stone herself, she learns that many disembodied souls have fallen prey to the gems powers, but no one has ever escaped."},
    {title: "Circles of Seven", year: 2005, synopsis: "In Circles of Seven, using their dragon traits and the wisdom they gained through their earlier adventures, Billy and Bonnie explore a multi-dimensional domain of evil. In this realm, they navigate seven perilous worlds, each one manifested in a circular plane of existence that leads them deeper into the domain of a powerful enemy.<br></br>The seventh circle holds a group of prisoners, captives of the evil mistress of the circles, and Billy has to find a way to set them free and give them new life. When tragedy strikes along the way, Billy has to face the most difficult decision of his life, whether to forsake Bonnie to rescue the prisoners or to find a way to save her, his best friend in the world."},
    {title: "Tears of a Dragon", year: 2005, synopsis: "A vicious evil has been unleashed on the earth that only dragons can defeat. With Billy's father, the great Clefspeare, missing, Billy and Bonnie must lead the dragons into war against the watchers- demonic beings as old as the earth itself. Masters at the art of deception, the watcher use the deadliest of weapons against humankind. A remnant of wise dragons-the friends of the dragons-unite in the struggle against the watchers. With heart-stopping action, the final battle between dragons and their enemies come to a climax. But in order to win the war, at least one of the dragons must die. As the story ends, Billy and Bonnie are faced with the greatest decision of their lives. Will they keep the dragon traits that cost them so much danger and heartache or will they turn to normal human life and end the slayers' lust for their blood forever?"},
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>My Favorite Books</h1>
    { books ? (
      <div style= {{
        padding: "2px 20px",
        margin: "20px",
        backgroundColor: "firebrick",
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: "3px",
        borderRadius: "10px",
        color: "white"

      }}>
        <h2>{books.seriesName} by {books.author}</h2>
        {books.booksInSeries.map( b=> (
          <Books key={b.title} bookTitle={b.title} year={b.year} synopsis={b.synopsis}></Books>
        ))}
      </div>
    ) : (<h2>Books not Found</h2>)
    }
  </React.StrictMode>,
)
