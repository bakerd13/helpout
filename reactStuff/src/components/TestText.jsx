import React, { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux';

const TestText = (props) => {
    const [name, setName] = useState('ana');
    const [nameToggle, setNameToggle] = useState(false);

    // const effect = useEffect({
    //     axios.get('/mydata').then(response => response.data)
    //         .then(data => setName(data.name)); 
    // }

    // ,[]);

    // const effect1 = useEffect({
    //     axios.get('/mydata').then(response => response.data)
    //         .then(data => setName(data.name)); 
    // }

    // ,[nameToggle]);

    const refernces = useRef();

    refernces.current.focus();

    const clickHandler = () => {
        setName('Daren')
    };

    const clickToggleHandler = () => {
        setNameToggle(!nameToggle);
    };

    return (
        <div>
            <>
            <input ref={refernces} type="text" value={name} />
            <button onClick={clickHandler}> 
                test
            </button>
            </>
        </div>
    );
}

// const mapStateToProps = (state) => 
// {

// };

// const mapDispatchToProps = (dispatch) => {
//     testDispatch: dispatch(type: 'TEST', null);
// } 

export default TestText;

{/* <route path='/compoent1' component={component1} >
    <route path='/tab1' component={tab1}
</route> */}


