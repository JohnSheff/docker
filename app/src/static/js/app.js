function App() {
    const { Container, Row, Col } = ReactBootstrap;
    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <DownloadIcon />
                </Col>
            </Row>
        </Container>
    );
}

function DownloadIcon (){
    const [link,setLink]=React.useState('')
    return(
        <div>
            <input placeholder={'укажите сайт от куда скачать Favicon иконку'} onBlur={(e)=>{setLink(e.target.value)}}/>
            <button onClick={()=>{
                window.location.href=`${link}/favicon.ico`
            }}>скачать иконку с сайта</button>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
