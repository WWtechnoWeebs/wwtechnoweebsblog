import '../styleFolder/HomePage.css';
import turtle from '../assets/turtles.mp4'

function HomePage() {
    return ( 
        <div className='HomePage'>
            <div className='content'>
                <p className='info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi tincidunt<br/>
                augue interdum velit euismod. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Cursus in hac habitasse platea dictumst quisque. Quis varius quam <br/>
                quisque id diam vel quam elementum. Nunc scelerisque viverra mauris in aliquam sem. Tristique senectus et netus et malesuada fames ac turpis egestas. Mauris augue <br/>
                neque gravida in. Ultrices vitae auctor eu augue ut lectus. Enim lobortis scelerisque fermentum dui faucibus. Morbi quis commodo odio aenean sed. Dictumst quisque <br/>
                sagittis purus sit. Placerat orci nulla pellentesque dignissim enim sit.<br/>
                Aenean et tortor at risus viverra. Urna condimentum mattis pellentesque id. Urna et pharetra pharetra massa massa. Maecenas sed enim ut sem viverra aliquet eget sit. <br/>
                Ut aliquam purus sit amet. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Id consectetur purus ut faucibus pulvinar. Urna duis convallis <br/>
                convallis tellus id. Et malesuada fames ac turpis. Amet aliquam id diam maecenas ultricies.<br/>
                </p>
            </div>
           
                <div className='gif'>
                    <video src={turtle}  loop autoPlay muted/>
                </div>
            
        </div>
     );
}

export default HomePage;