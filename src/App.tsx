// 버튼에 버튼 속성 주고, 계산 기능 구현하기

import React, {useState} from 'react';

import logo from './img/Logo_SADA.png';

import './App.css';



function App() {
    let [calcNum, setcalcNum] = useState(0.0);
    let [nowCalc, setnowCalc] = useState(0);  //0, 1, 2, 3, 4, 5, 6, 7 +, -, *, /, >>, <<, &, |, ^, log
    let nowNumber = 1

    function plus() {
        setnowCalc(0)
    }
    function minus() {
        setnowCalc(1)
    }
    function times() {
        setnowCalc(2)
    }
    function divide() {
        setnowCalc(3)
    }
    function rightShift() {
        setnowCalc(4)
    }
    function leftShift() {
        setnowCalc(5)
    }
    function and() {
        setnowCalc(6)
    }
    function or() {
        setnowCalc(7)
    }
    function power() {
        setnowCalc(8)
    }
    function log() {
        setnowCalc(9)
    }
    function zero() {
        nowNumber = 0
        calc()
    }
    function one() {
        nowNumber = 1
        calc()
    }
    function two() {
        nowNumber = 2
        calc()
    }
    function three() {
        nowNumber = 3
        calc()
    }
    function four() {
        nowNumber = 4
        calc()
    }
    function five() {
        nowNumber = 5
        calc()
    }
    function six() {
        nowNumber = 6
        calc()
    }
    function seven() {
        nowNumber = 7
        calc()
    }
    function eight() {
        nowNumber = 8
        calc()
    }
    function nine() {
        nowNumber = 9
        calc()
    }

    function allclear() {
        setcalcNum(0.0)
    }


    function calc() {
        if (calcNum === 0) {
            setcalcNum(nowNumber)
        }else {
            if (nowCalc === 0) {
                setcalcNum(calcNum + nowNumber)
            } else if (nowCalc === 1) {
                setcalcNum(calcNum - nowNumber)
            } else if (nowCalc === 2) {
                setcalcNum(calcNum * nowNumber)
            } else if (nowCalc === 3) {
                setcalcNum(calcNum / nowNumber)
            } else if (nowCalc === 4) {
                setcalcNum(calcNum >> 1)
            } else if (nowCalc === 5) {
                setcalcNum(calcNum << nowNumber)
            } else if (nowCalc === 6) {
                setcalcNum(calcNum & nowNumber)
            } else if (nowCalc === 7) {
                setcalcNum(calcNum | nowNumber)
            } else if (nowCalc === 8) {
                setcalcNum(calcNum ** nowNumber)
            }
            // else if (nowCalc === 9) {
            //     setcalcNum(calcNum nowNumber)
            // }
        }
        if (calcNum <= -1E+100) {
            setcalcNum(calcNum * 10 ** 100)
        }else if (calcNum >= 1E+100) {
            setcalcNum(calcNum / 10 ** 100)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt={"Logo_SADA"} height='50' style={{marginRight: '3vh'}} />
                <p>
                    전화번호 입력하기
                </p>
            </header>

            <div className="App-body" id={'column-just'}>
                <div className="calculator">
                    <p className='calc-output'>
                        {calcNum.toExponential(9).toString()}
                    </p>
                    <div className='calc-body' id={'column-just'}>
                        <div className='calc-shortbutton-line' id={'row-just'}>
                            <button className='calc-shortbutton' id={'row-just'} onClick={rightShift}>
                                {'>>'}
                            </button>
                            <button className='calc-shortbutton' id={'row-just'} onClick={leftShift}>
                                {'<<'}
                            </button>
                            <button className='calc-shortbutton' id={'row-just'} onClick={and}>
                                &
                            </button>
                            <button className='calc-shortbutton' id={'row-just'} onClick={or}>
                                |
                            </button>
                            <button className='calc-shortbutton' id={'row-just'} style={{backgroundColor:"red", fontSize:"15pt", color: 'white'}} onClick={allclear}>
                                AC
                            </button>
                        </div>
                        <div className='calc-button-line' id={'row-just'}>
                            <button className='calc-button' id={'row-just'} onClick={one}>
                                1
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={two}>
                                2
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={three}>
                                3
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={plus}>
                                +
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={minus}>
                                -
                            </button>

                        </div>
                        <div className='calc-button-line' id={'row-just'}>
                            <button className='calc-button' id={'row-just'} onClick={four}>
                                4
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={five}>
                                5
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={six}>
                                6
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={times}>
                                ×
                            </button>
                            <button className='calc-button' id={'row-just'} onClick={divide}>
                                ÷
                            </button>
                        </div>
                        <div className={'calc-45button'} id={'row-just'}>
                            <div className='calc-45button-lines' id={'column-just'}>
                                <div className='calc-45button-line' id={'row-just'}>
                                    <button className='calc-button' id={'row-just'} onClick={seven}>
                                        7
                                    </button>
                                    <button className='calc-button' id={'row-just'} onClick={eight}>
                                        8
                                    </button>
                                    <button className='calc-button' id={'row-just'} onClick={nine}>
                                        9
                                    </button>
                                    <button className='calc-button' id={'row-just'} onClick={power}>
                                        ^
                                    </button>
                                </div>
                                <div className='calc-45button-line' id={'row-just'}>
                                    <button className='calc-rowlongbutton' id={'row-just'} onClick={zero}>
                                        0
                                    </button>
                                    <button className='calc-button' id={'row-just'} style={{fontSize:'12pt'}} onClick={log}>
                                        log
                                    </button>
                                </div>
                            </div>
                            <button className='calc-enter-button' id={'row-just'}>
                                =
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        calcNum >= 0 ?
                        '0' + (calcNum.toExponential(9).toString()[0]) +
                        (calcNum.toExponential(9).toString()[2]) +
                        (calcNum.toExponential(9).toString()[3]) +
                        (calcNum.toExponential(9).toString()[4]) +
                        (calcNum.toExponential(9).toString()[5]) +
                        (calcNum.toExponential(9).toString()[6]) +
                        (calcNum.toExponential(9).toString()[7]) +
                        (calcNum.toExponential(9).toString()[8]) +
                        (calcNum.toExponential(9).toString()[9]) +
                        (calcNum.toExponential(9).toString()[10]):
                            '0' + (calcNum.toExponential(9).toString()[1]) +
                            (calcNum.toExponential(9).toString()[3]) +
                            (calcNum.toExponential(9).toString()[4]) +
                            (calcNum.toExponential(9).toString()[5]) +
                            (calcNum.toExponential(9).toString()[6]) +
                            (calcNum.toExponential(9).toString()[7]) +
                            (calcNum.toExponential(9).toString()[8]) +
                            (calcNum.toExponential(9).toString()[9]) +
                            (calcNum.toExponential(9).toString()[10]) +
                            (calcNum.toExponential(9).toString()[11])
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
