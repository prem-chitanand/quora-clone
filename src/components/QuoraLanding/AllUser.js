import React from 'react'
import './AllUsers.css'
import Header from './Header'

function AllSpaces() {
    return (<>
        <Header />
        <div className = 'allUser'>
            <div className = 'allUser-container'>
                <img width = {250} src = 'https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_darkmode.png-26-3fb93e1da358eb6e.png' alt = ''/>
                <h4>Build your new following feed</h4>
                <p>Follow some Spaces to start discovering stories in you feed</p>
            </div>
            <div className = 'allUser-content'>
                <h3>Discover Spaces</h3>
                <div className = 'allUser-space'>
                    <p>Spaces you might like</p>
                </div>
                <div className = 'allUsers'>
                    <div className = 'allUserStrip'>
                        <img src = 'https://cdn.britannica.com/09/75509-050-86D8CBBF/Albert-Einstein.jpg' alt ='' />
                        <div className = 'content'>
                        <p>Einstein</p>
                        
                            
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87inI3ILZivRCxG3tYJc8mYJkJBEuUieIWg&usqp=CAU' alt ='' />
                        <div className = 'content'>
                            <p>Newton</p>
                            
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://qphs.fs.quoracdn.net/main-thumb-ti-1586937-100-eacomyyoiwvapnorsknliswmngvehjly.jpeg' alt ='' />
                        <div className = 'content'>
                            <p>The Intelligent Investor</p>
                            
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://qphs.fs.quoracdn.net/main-thumb-ti-1584606-100-sjkcfqlnozgrkematzadgnjkhmrgrntm.jpeg' alt ='' />
                        <div className = 'content'>
                            <p>Spiritual Thought</p>
                            
                        </div>
                    </div>
                    <div className = 'allUserStrip'>
                        <img src = 'https://qphs.fs.quoracdn.net/main-thumb-ti-1932347-100-zmrqrduiusnaxdjolxgirondyjupjrke.jpeg' alt ='' />
                        <div className = 'content'>
                            <p>Laughter Society</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AllSpaces
