import '../styleFolder/Hardware.css'
import '../styleFolder/LoadingAnim.css'
import useFetch from '../hooks/useFetch';

function Hardware() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/hard-wares') //Here goes the server link

    //toLocaleDateString you get the format of date you want ex en-GB
    function getMyDate(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale, { day:'2-digit'});
    }

    function getMyYear(value, locale = 'en-GB') {
        return new Date(value).toLocaleDateString(locale, { year:'numeric'});
    }

    function getMyMonth(value, locale= 'en-DB') {
        return new Date(value).toLocaleDateString(locale,{ month:'short' });
    }

    if(loading){
        return (
            <div className='hardware'>
                <div className='loading'>
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
        );
    }

    if(error){
        return (
            <div className='hardware'>
                <div className='hardwarecontent'>
                    <h1 style={{color:'#CCCCCC'}}>Something went wrong...</h1>
                </div>
            </div>
        );
    }

    return ( 
        <div className='hardware'>
            <div className='hardwarecontent'>
                <div className='search'>
                    <input type='text' placeholder='Search...' required />
                </div>
                <div className='articles'>
                    {data.map(frontData => (
                        <div key={frontData.id} className="panel">
                            <div className='date'>
                                <h1>{getMyDate(frontData.attributes.Date)}</h1>
                                <p>{getMyMonth(frontData.attributes.Date)}{getMyYear(frontData.attributes.Date)}</p>
                            </div>
                            <p className='description'>{frontData.attributes.Description}</p>
                        </div>
                    ))}
                </div>            
            </div>  
        </div>
     );
}

export default Hardware;