import "./About.css"

const About = () => {
    return (
        <section className="about-section">

            <div className="about-text">
                <h1 className="about-h1">By Game masters for Game masters</h1>
                <p className="about-p">Welcome to DND stories, where storytelling meets adventure! We are passionate about creating unforgettable experiences for Dungeon Masters and their gaming groups in the vast realms of Dungeons & Dragons.</p>

            </div>
            <h1 className="team-h1">Meet the team!</h1>
            <div className="about-card-holder">
                
                <div className="card-container-about">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZEucVqvlhR008vW6LrmiTLaPusSqAH4W5PlR7tmuXl0NTe4O3VKEz5uYrIxFS10sd4M&usqp=CAU" 
                    alt="" 
                    className="card-img"/>
                    <h1 className="card-title-about">Liam Emberforge</h1>
                    <p className="role">Community Bard</p>
                    <p className="card-description">Heart and soul, fostering camaraderie among D&D enthusiasts.</p>
                </div>
                <div className="card-container-about">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjmv17ojit1vJBB-LtzZx5FkaPfttQ1sJt4sNriy83Ha6ziJpiLsISfpQm0u-lOcGLHg&usqp=CAU" 
                    alt="" 
                    className="card-img"/>
                    <h1 className="card-title-about">Gideon Stoneshield</h1>
                    <p className="role">Tech-savvy Webmaster</p>
                    <p className="card-description">Graphic designer conjuring visually stunning D&D magic.</p>
                </div>
                <div className="card-container-about">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziJ01cM5F19iipbdwu7vp28oV_6-df49NBA&usqp=CAU" 
                    alt="" 
                    className="card-img"/>
                    <h1 className="card-title-about">Elena Darkmoon</h1>
                    <p className="role">Dungeon Master Extraordinaire</p>
                    <p className="card-description">Creative storyteller weaving unforgettable D&D adventures.</p>
                </div>
            </div>
        </section>
    )
}

export default About;