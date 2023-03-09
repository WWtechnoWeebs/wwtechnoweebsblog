import '../styleFolder/HomePage.css';
import turtle2 from '../assets/turtle_dance.mp4'

function HomePage() {
    return ( 
        <div className='HomePage'>
            <div className='content'>
                <p className='info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Fringilla ut morbi tincidunt augue interdum velit euismod. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. 
                Cursus in hac habitasse platea dictumst quisque. Quis varius quam quisque id diam vel quam elementum. 
                Nunc scelerisque viverra mauris in aliquam sem. Tristique senectus et netus et malesuada fames ac turpis egestas. 
                Mauris augue neque gravida in. Ultrices vitae auctor eu augue ut lectus. Enim lobortis scelerisque fermentum dui faucibus.
                Morbi quis commodo odio aenean sed. Dictumst quisque sagittis purus sit. Placerat orci nulla pellentesque dignissim enim sit.
                Aenean et tortor at risus viverra. Urna condimentum mattis pellentesque id. Urna et pharetra pharetra massa massa. Maecenas sed enim ut sem viverra aliquet eget sit.
                Ut aliquam purus sit amet. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Id consectetur purus ut faucibus pulvinar. 
                Urna duis convallis convallis tellus id. Et malesuada fames ac turpis. Amet aliquam id diam maecenas ultricies.
                </p>
            </div>
            <video id="videoBG" autoPlay muted loop>
                <source src={turtle2} type="video/mp4"/>
            </video>
        </div>
     );
}

export default HomePage;