import '../styleFolder/Software.css'
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Software() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/soft-wares') //Here goes the server link

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
            <div className='software'>
                <Loading />
            </div>
        );
    }

    if(error){
        return (
            <div className='software'> 
                <Error />
            </div>
        );
    }

    return ( 
        <div className='software'>
            <div className='softwarecontent'>
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

export default Software;