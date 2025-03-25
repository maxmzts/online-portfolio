import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import BackToTop from './components/BackToTop/BackToTop';

function Home() {
return (
<main className="Home">
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <BackToTop/>
</main>
);
}

export default Home;
  