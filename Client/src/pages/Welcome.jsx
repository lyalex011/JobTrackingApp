import Hero from "../copmonents/Hero";

function Welcome({user}) {
    return ( 
        <div >
            <Hero user={user}/>
        </div>
     );
}

export default Welcome;