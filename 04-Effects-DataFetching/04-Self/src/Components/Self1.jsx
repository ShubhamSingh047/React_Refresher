import Logo from "./Logo";
import Counter from "./Counter";
import Scroll from "./Scroll";
import Reset from "./Reset";

const Self1 = ({ count, setCount }) => {
  return (
    <>
      <Logo />
      <Counter count={count} setCount={setCount} />
      <Scroll value={count} setValue={setCount} />
      <Reset setCounts={setCount} />
    </>
  );
};

export default Self1;
