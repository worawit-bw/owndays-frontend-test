import Promotion from './Promotion';
import Pickup from './Pickup';
import Option from './Option';
import Collection from './Collection';
import Budget from './Budget';
import Products from './Products';

const Landing = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-center mx-auto mt-[120px] sm:mt-[140px] mb-0 md:mt-[166px]">
      <Promotion />
      <Pickup />
      <Collection />
      <Budget/>
      <Products/>
      <Option/>
    </div>
  );
};

export default Landing;