import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
    return (
        <section>
            <div className="greetings-div">
                <h1 className="home-h1">Welcome to DnD Stories</h1>
            </div>
            <div className="content-box">
                <div className="text-content">
                    <h2 className="home-h2">Are you ready</h2>
                    <h2 className="home-h2">to start your adventure?</h2>
                    <p className="home-p"> Greetings, brave adventurers and storytellers alike! Step into a realm where imagination knows no bounds,
                        and your Dungeons & Dragons journey takes on a personalized touch. We extend a heartfelt welcome to our haven
                        of creativity, where bespoke DnD scenarios come to life.
                    </p>
                    <Link to="/users/register" className="button">CREATE AN ACCOUNT</Link>
                </div>
            </div>
        </section>

    )
}

export default Home;

/*<div className="media-spot">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/DQkavouryYc" >
                    </iframe>
                </div>*/