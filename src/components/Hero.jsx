import profile1 from '../assets/profile_1.png'
import profile2 from '../assets/profile_2.png'
import rizz from '../assets/rizz.gif'
import cvFile from '../assets/CV_Sidqi.pdf'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Hi, I’m <br />
          <span>Muhammad Sidqi Gufron</span>
        </h1>

        <h2>Web & App Developer</h2>

        <p>
          An Informatics student at Universitas Multimedia Nusantara with a
          strong interest in Web and Mobile Application Development. I enjoy
          building modern, user-friendly applications using web and mobile
          technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href={cvFile}
            className="btn-outline"
            download
            target="_blank"
            rel="noopener noreferrer">
            Download CV
          </a>
          
        </div>
      </div>

      <div className="hero-image">
        <img src={profile1} alt="Muhammad Sidqi Gufron" />
      </div>
    </section>
  )
}

export default Hero