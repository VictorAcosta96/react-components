import CalculateAge from './components/calculate-age/CalculateAge';
import CalculateAverage from './components/calculate-average/CalculateAverage';
import CalculatePower from './components/calculate-power/CalculatePower';
import ConvertMinutesToHours from './components/convert-minutes-to-hours/ConvertMinutesToHours';
import CountWords from './components/count-words/CountWords';
import DisplayPersonInfo from './components/display-person-info/DisplayPersonInfo';
import FindLongestString from './components/find-longest-string/FindLongestString';
import FindMaximum from './components/find-maximum/FindMaximum';
import Flag from './components/flag/Flag';
import FlagsContainer from './components/flags-container/FlagsContainer';
import GenerateFullName from './components/generate-full-name/GenerateFullName';
import IsEvenOrOdd from './components/is-even-or-odd/IsEvenOrOdd';
import ReverseString from './components/reverse-string/ReverseString';
import UppercaseText from './components/uppercase-text/UppercaseText';
import WriteBookInfo from './components/write-book-info/WriteBookInfo';
import WriteGreeting from './components/write-greeting/WriteGreeting';

const personInfo = {
	name: 'victor',
	age: 28,
	occupation: 'ingeniero'
};

const App = () => {
	return (
		<>
			<h1>Curso de react.</h1>

			<FlagsContainer>
				<Flag country='colombia' image='co.svg' people={50} />
				<Flag country='canadá' image='ca.svg' people={30} />
				<Flag country='españa' image='es.svg' people={80} />
				<Flag country='portugal' image='pt.svg' people={35} />
				<Flag country='francia' image='fr.svg' people={70} />
			</FlagsContainer>
			<DisplayPersonInfo {...personInfo} />
			<GenerateFullName name='victor' lastName='acosta' />
			<WriteBookInfo
				title='El principito'
				author='Antoine de saint-Exupéry'
				year={1943}
				genre='Ciencia ficción'
			/>
			<ConvertMinutesToHours minutes={130} />
			<ReverseString sentence='El mejor curso de react 2024' />
			<IsEvenOrOdd number={8} />
			<UppercaseText>curso de react 2024 de dorian</UppercaseText>
			<WriteGreeting name='Thiago' hour={12} />
			<CalculatePower base={4} exponent={3} />
			<CountWords phrase='voy a ser muy bueno programando en javascript' />
			<CalculateAge birthDate='12/09/2013' />
			<FindMaximum numbers={[2, 26, 9, 4, 21]} />
			<CalculateAverage listNumbers={[2, 4, 6, 8]} />
			<FindLongestString wordsList={['javascript', 'node', 'react']} />
		</>
	);
};

export default App;
