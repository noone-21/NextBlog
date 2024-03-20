import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero(){
    return <section className={classes.hero} >
        <div className={classes.image} >
            <Image src='/images/site/danish.jpg' alt='an image showing Danish' height={300} width={300} />
        </div>
        <h1>Hi, I'm Danish</h1>
        <p>I Blog about Web Development and Frontend Frameworks like Reactjs and Angular Js.</p>
    </section>
    
}