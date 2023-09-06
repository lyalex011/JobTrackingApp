import Hero from "../copmonents/Hero";

function Welcome({user,setUser}) {
    return ( 
        <div >
            <Hero user={user} setUser={setUser}/>
        </div>
     );
}

export default Welcome;