import React, {
    useState,
    useEffect
} from 'react';
import ModalGame from './ModalGame';


const Chrono = (props) => {
    const [startTime, setStartTime] = useState(0);
    const [currentTimeMs, setCurrentTimeMs] = useState(0);
    //Modal
    let [modal, setModal] = useState(false);
    

    useEffect(() => {
        setStartTime(new Date());
    }, []);

    useEffect(() => {
       const interval = setInterval(() => {
            if (props.currentNumber !== 'DONE!') {
                setCurrentTimeMs(new Date());
            }else{
                setModal(true);
                return;
            }
        }, 1);
        return () => clearInterval(interval);
    }, [props.currentNumber]);

    let actualTime = ''
    function convertMS(milliseconds) {
        let m, s, ms;
        ms = '' + milliseconds % 1000;
        s = Math.floor(milliseconds / 1000);
        m = '' + Math.floor(s / 60);
        s = '' + s % 60;
        actualTime = `${ m.padStart(2, '0')}:${s.padStart(2, '0')}:${ms.padStart(3, '0')}`;
        return actualTime;
    }

    return ( 
        currentTimeMs !== 0 && 
        <div className="col-12 col-md-6">
            <div className="row justifyCenter">
                {modal === true && <ModalGame actualTime={`${convertMS(currentTimeMs-startTime)}`} modalState={modal}/>}
                <p> {
                `${convertMS(currentTimeMs-startTime)}`
                } </p>
            </div>
        </div>
    );
};

export default Chrono;
