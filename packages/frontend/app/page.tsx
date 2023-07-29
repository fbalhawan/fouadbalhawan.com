import styles from '../styles/page.module.css';
import BrutalDiv from './components/brutal-div';
import BrutalBtn from './components/brutal-btn';

export default function Index() {
  const onMouseEnter = function(){
    console.log("mouse in");
  }
  console.log('home re-rending')
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* <BrutalBtn>Click me</BrutalBtn> */}
      <BrutalDiv className=' w-auto inline-block' hoverable={false}>
        <p>BLA BLA BLA</p>
        <BrutalBtn>Click me</BrutalBtn>
      </BrutalDiv>
    </div>
  );
}
