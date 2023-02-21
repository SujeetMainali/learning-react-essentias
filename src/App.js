import './App.css';
import {Link, Outlet} from 'react-router-dom';

function Home(){
    return(
        <div>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <h1>
                this is my home page
            </h1>
        </div>
    )
}

export function About(){
    return(
        <div>
            <nav>
                <Link to = "/">Home</Link>
            </nav>
            <h1>this is about us page</h1>
            <Outlet/>
        </div>
    )
}

export function History() {
    return(
        <div>
            <h1>history</h1>
        </div>
    )
}

export function App(){
  return (
    <Home />
  )
}



