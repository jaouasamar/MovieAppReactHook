
import { useState } from "react";
import AddMovie from "./AddMovie/AddMovie";
import "./App.css";
import Search from "./Search/Search";
import MovieList from "./MovieList/MovieList";
import RatingComponent from "./Rating/RatingComponent";
import MenuBar from "./Menu/Menu";
import {BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Info from "./Info/Info";


function App() {
  const movies = [
    {
      id: Math.random(),
      title: "Spider-Man: No Way Home",
      description:
        "Pour la première fois dans l’histoire cinématographique de Spider-Man, l’identité du héros sympa du quartier est révélée, et ses responsabilités de super héros entrent en conflit avec sa vie privée, mettant ainsi en danger ses proches. Quand il demande de l’aide à Doctor Strange pour rétablir les choses et garder son secret, le sort ouvre une brèche dans leur monde, libérant les méchants les plus puissants ayant jamais combattu un Spider-Man dans tous les univers confondus. A présent, Peter va devoir affronter son plus grand défi, qui altèrera non seulement son futur, mais aussi celui du multivers.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sDYuyvhY0FUGs0MIHGKE6H8ETJZ.jpg",
      rating:4,
      categorie: "Familial",
      date: "December 2021",
      trailer:"https://www.youtube.com/embed/JfVOs4VSpmA"
      
    },
    {
      id: Math.random(),
      title: "Clifford",
      description:
        "Emily a du mal à s'intégrer au sein de son école. Par hasard, elle découvre un petit chiot rouge qu'elle nomme Clifford. Par magie, ce dernier subit une poussée de croissance et devient un chien gigantesque qui va attirer l’attention de généticiens cupides...",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fTQF4IZnY3bd8RM0dMzywJW3ot7.jpg",
      rating:4,
      categorie: "Familial",
      date: "November 2021",
      trailer:"https://www.youtube.com/embed/eGrlio69L1g"
    },
    {
      id: Math.random(),
      title: "Encanto, la fantastique famille Madrigal",
      description:
        "Une comédie musicale centrée sur une jeune fille et sa famille en Colombie, qui ont tous des pouvoirs magiques sauf elle.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dW5Ws2eBLtd3Rske6wraxzyX13m.jpg",
      rating:2,
      categorie: "Familial",
      date: "November 2021",
      trailer:"https://www.youtube.com/embed/CaimKeDcudo"
    },

    {
      id: Math.random(),
      title: "Shang-Chi et la Légende des Dix Anneaux",
      description:
        "Shang-Chi va devoir affronter un passé qu’il pensait avoir laissé derrière lui lorsqu’il est pris dans la toile de la mystérieuse organisation des dix anneaux.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rHcCQVVnHVXWKTYRW5IFrigcKX8.jpg",
      rating:4,
      categorie: "Action",
      date: "September 2021",
      trailer:"https://www.youtube.com/embed/PD3rUCBFDlI&t=27s"
    },
    {
      id: Math.random(),
      title: "SWAT Mission Demo",
      description:
        "It started as a peaceful night. Then he heard the birds suddenly stop singing.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nBEVcGyHNYCdkqel77P3Zpgk2lm.jpg",
      rating:5,
      categorie: "Action",
      trailer:"https://www.youtube.com/embed/upMDS0-Bvok"
    },
    {
      id: Math.random(),
      title: "REPLICA",
      description: "Story of a lone scientist and his cloning experiment.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bS7iANNhhoV0YfkRd4BkuvbFNx2.jpg",
      rating:5,
      categorie: "Sciences-Fiction",
      trailer:"https://www.youtube.com/embed/CQopGH4qMEI"
    },
    {
      id: Math.random(),
      title: "45 Days: The Fight for a Nation",
      description:
        "A feature documentary presented and directed by former Royal Marines Commando Emile Ghessen. The documentary tells the story of the 2020 war between Armenia and Azerbaijan over the disputed region of Nagorno Karabakh. In the fall of 2020, Armenia and Azerbaijan fought a brutal bloody war. Azerbaijan won, decisively. The feature documentary 45 Days: The Fight for a Nation tells the story of this conflict, from the Armenian perspective, focusing on the human cost of war and its impact on the large Armenian diaspora.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8U22ET1hQ3h8jTXvtL82wYihEd.jpg",
      rating:5,
      categorie: "Sciences-Fiction",
      date: "December 2021",
      trailer:"https://www.youtube.com/embed/0DI3TB9jVDM"
    },
    {
      id: Math.random(),
      title: "Spider-Man 3",
      description:
        "Peter Parker a retrouvé un équilibre de vie et il veut se marier avec Mary Jane. Pendant une nuit au parc, alors que Peter et Mary Jane sont ensemble, une petite météorite tombe tout près du lieu où ils se trouvent, et une particule s'en échappe, libérant, en éclatant, une matière visqueuse, la Venom, qui s'attache à la mobylette de Peter. Pendant ce temps, Flint Marko s'échappe de la prison où il était détenu pour cambriolage afin d'aller revoir sa fillette qui lui manque terriblement, mais dont il n'a pas le droit de s'approcher à cause de l'injonction d'éloignement obtenue contre lui par son ex-femme ; pendant sa fuite, il tombe dans un accélérateur de particules, qui fond son corps avec le sable et il devient l’Homme-Sable. Le meilleur ami de Peter, Harry Osborn, veut venger la mort de son père, et, croyant que Spider-Man est la cause de cette mort, l'attaque.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
      rating:3,
      categorie: "Action",
      date: "Mars 2017",
      trailer:"https://www.youtube.com/embed/qK7nMGNlHgk"
    },
    {
      id: Math.random(),
      title: "SpidDemon Slayer : Kimetsu no Yaiba - Le film : Le train de l'Infinier-Man 3",
      description:
        "Le groupe de Tanjirô a terminé son entraînement de récupération au domaine des papillons et embarque à présent en vue de sa prochaine mission à bord du train de l'infini, d'où quarante personnes ont disparu en peu de temps. Tanjirô et Nezuko, accompagnés de Zen'itsu et Inosuke, s'allient à l'un des plus puissants épéistes de l'armée des pourfendeurs de démons, le Pilier de la Flamme Kyôjurô Rengoku, afin de contrer le démon qui a engagé le train de l'Infini sur une voie funeste.",
      posterURL:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3fTjxkrp23AWyRbMKaujz5wrNDM.jpg",
      rating:3,
      categorie: "Action",
      date: "October 2020",
      trailer:"https://www.youtube.com/embed/InLnfJmCcIQ"
    },
    {
      id: Math.random(),
      title: "Bordertown : Du sang sur les murs ",
      description:
        "Une inscription en lettres de sang, un sondage en ligne et un infâme tueur en série plongent le détective Kari Sorjonen dans l'affaire la plus difficile de sa carrière.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtmfXeeECuYNuKSFUlR61ka94QR.jpg",
      rating:3,
      categorie: "Crime",
      date: "October 2021",
      trailer:"https://www.youtube.com/embed/KmYOk8zNCIo"
    },
    {
      id: Math.random(),
      title: "Baby boss 2 : Une affaire de famille ",
      description:
        "Tim Templeton et son petit frère Ted, le fameux Baby Boss sont devenus adultes, ils vivent chacun de leur côté, Tim est devenu un père de famille rangé et Ted est à la tête d’un important fond spéculatif. Mais l’arrivée d’un nouveau Baby Boss, avec une toute nouvelle approche et une stratégie innovante, est sur le point de rassembler les frères ennemis… et inspirer un nouveau modèle dans les affaires familiales. Tim et sa femme Carole vivent en banlieue où il s’occupe du foyer pendant qu’elle fait bouillir la marmite. Ils ont deux enfants : Tabitha, une petite fille de 7 ans à l’intelligence remarquable et Tina, leur adorable nouveau-née. Tabitha, première de sa classe dans une école pour surdoués, adule son oncle Ted et rêve de marcher sur ses pas, ce qui inquiète beaucoup Tim qui craint qu’elle ne passe à côté de son enfance à force de travailler si dur.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q7UGnFFUeJbf7R6CT1mMRTDCXI1.jpg",
      rating:4,
      categorie: "Familial",
      date: "July 2021",
      trailer:"https://www.youtube.com/embed/lQhxytDkqyw"
    },
    {
      id: Math.random(),
      title: "Le Journal d'un Dégonflé ",
      description:
        "Nouveau volet dans la saga du Journal d'un Dégonflé, cette fois-ci en film d'animation pour la plateforme Disney+.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fC2DjFRi1m7mR0cFL4uMSJuQ0Ps.jpg",
      rating:4,
      categorie: "Comedie",
      date: "December 2021",
      trailer:"https://www.youtube.com/embed/Fbr2ENcAk8k"
    }



  ];
  const [listMovies, setListMovies] = useState(movies);

  const [searchValue, setSearchValue] = useState("");
  const [rate, setRate] = useState(1);

  const handleAdd = (newMovie) =>{setListMovies([...listMovies,newMovie])}

  const handleSearch = (e) => {setSearchValue(e.target.value)}
  const handleRating = (e) => {setRate(e.target.value)}
  const handleRemove=(idMovie)=>{setListMovies(listMovies.filter(movie=>movie.id!==idMovie))};
  
  return (
    <Router>
    
      {/* <MenuBar/>
      <Search searchValue={searchValue} handleSearch={handleSearch}/>
      <RatingComponent  rate={rate} handleRating={handleRating}/>
      <MovieList  handleRemove={handleRemove} movies={listMovies .filter(
          (movie) =>
            movie.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= rate
        )}
      />
      
      <AddMovie handleAdd={handleAdd} movies={listMovies} /> */}
     
   <Routes>
  
  <Route path="/" element={ <div>
  <MenuBar/>
      <Search searchValue={searchValue} handleSearch={handleSearch}/>
      <RatingComponent  rate={rate} handleRating={handleRating}/>
      <MovieList  handleRemove={handleRemove} movies={listMovies .filter(
          (movie) =>
            movie.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()) &&
            movie.rating >= rate
        )}
      />
  
      <AddMovie handleAdd={handleAdd} movies={listMovies} />
      </div>}/>
  <Route path="/info/:title" element={<Info movies={listMovies}/>}/>

  

</Routes>
     </Router>
      
 
  );
}

export default App;
