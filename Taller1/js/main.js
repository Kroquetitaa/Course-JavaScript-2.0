
const perimeterSquare = side => side * 4;
const areaSquare = side => side * side;
const PI = Math.PI;
const perimeterTriangle = (firstSide, SecondSide, base) => firstSide + SecondSide + base;
const areaTriangle = ( base, height) => ( base * height) / 2;
const diameterCircle = radio => radio * 2;
const perimeterCircle = radio => diameterCircle( radio ) * 2;
const areaCircle = radio => Math.pow(radio,2) * PI;

const calculatePerimeterSquare = () => {
    const input = document.getElementById('inputSquare');
    const value = input.value;
    const perimeter = perimeterSquare( value );
    document.getElementById('result').textContent = `El perimetro de ${ value } es: ${ perimeter }`;
    input.value = '';
}

const calculateAreaSquare = () => {
    const input = document.getElementById('inputSquare');
    const value = input.value;
    const area = areaSquare( value );
    document.getElementById('resultSquare').textContent = `El area de ${ value } es: ${ area }`;
    input.value = '';
}

const calculatePerimeterTriangle = () => {
    const inputSide = document.getElementById('inputSidesTriangle');
    const inputBase = document.getElementById('inputBaseTriangle');
    const valueSide = parseInt( inputSide.value);
    const valueBase = parseInt( inputBase.value );

    const perimeter = perimeterTriangle( valueSide, valueSide, valueBase)
    document.getElementById('resultTriangle').textContent = `El perimetro de ${ valueSide } con base ${ valueBase } es: ${ perimeter }`;;
    inputSide.value = '';
    inputBase.value = '';
}

const calculateAreaTriangle = () => {
    const inputSide = document.getElementById('inputSidesTriangle');
    const inputBase = document.getElementById('inputBaseTriangle');
    const valueSide = parseInt( inputSide.value);
    const valueBase = parseInt( inputBase.value );

    const area = areaTriangle( valueSide, valueSide, valueBase)
    document.getElementById('resultTriangle').textContent = `El area de ${ valueSide } con base ${ valueBase } es: ${ area }`;;
    inputSide.value = '';
    inputBase.value = '';
}

const calculatePerimeterCircle = () => {
    const inputRadio = document.getElementById('inputRadioCircle');
    const valueRadio = parseInt(inputRadio.value);

    const perimeter = perimeterCircle( valueRadio );
    document.getElementById('resultCircle').textContent = `El perimetro de ${ valueRadio } es: ${ perimeter }`;
    inputRadio.value = '';
}

const calculateAreaCircle = () =>{
    const inputRadio = document.getElementById('inputRadioCircle');
    const valueRadio = parseInt(inputRadio.value);

    const area = areaCircle( valueRadio );
    document.getElementById('resultCircle').textContent = `El area de ${ valueRadio } es: ${ area }`;
    inputRadio.value = '';
}

const calculateDiameterCircle = () => {
    const inputRadio = document.getElementById('InputRadioCirculo');
    const valueRadio = parseInt(inputRadio.value);

    const diameter = diameterCircle( valueRadio );
    document.getElementById('resultCircle').textContent = `El diametro de ${ valueRadio } es: ${ diameter }`;
    inputRadio.value = '';
}