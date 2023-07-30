import styles from '../styles/page.module.css';
import BrutalDiv from './components/brutal-div';
import BrutalBtn from './components/brutal-btn';
import BrutalInput from './components/brutal-input';
import carPic from "/public/images/car.jpg";

export default function Index() {
  
  return (
    <div className="max-w-screen-lg mx-auto">
      <BrutalDiv imageSrc={carPic} className=' w-auto inline-block'>
        <p>Subscribe to my news letters</p>
        <BrutalInput />
        <BrutalBtn>Click me</BrutalBtn>
      </BrutalDiv>
    </div>
  );
}
