import Promotion from './Promotion';
import Pickup from './Pickup';
import Option from './Option';
import Collection from './Collection';

const Landing = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-center mx-auto mt-[166px] mb-[144px]">
      <Promotion />
      <Pickup />
      <Collection />
      <Option/>
    </div>
  );
};

export default Landing;