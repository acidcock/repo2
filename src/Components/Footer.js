import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import {BsBootstrapFill} from 'react-icons/bs'
import {SiApache} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiLinode} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {ImHtmlFive} from 'react-icons/im'


export function Foot() {
    return (
        <>
            <Container className='mt-3' fluid>
                <div className="d-flex justify-content-center" style={{backgroundColor: '#3A9188'}}>
                    <h6 className="text-center mx-2 mt-3" style={{fontSize:10}}>Nerd Arcadia Developement</h6>
                    <BsBootstrapFill className="d-flex mx-auto" size="50px"/>
                    <SiApache className="d-flex mx-auto" size="50px"/>
                    <SiMysql className="d-flex mx-auto" size="50px"/>
                    <RiReactjsLine className="d-flex mx-auto" size="50px"/>
                    <SiCss3 className="d-flex mx-auto" size="50px"/>
                    <ImHtmlFive className="d-flex mx-auto" size="50px"/>
                    <SiJavascript className="d-flex mx-auto" size="50px"/>
                    <SiLinode className="d-flex mx-auto" size="50px"/>
                </div>
            </Container>
        </>
    )
}