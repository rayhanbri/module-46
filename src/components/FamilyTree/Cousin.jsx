
import Speical from './Speical';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Cousin = ({name,asset}) => {
  
  return (
    <div>
      <h3>{name}</h3>
      {
        name == 'tom tom' && <Speical asset={asset}></Speical>
      }
      {
        name == 'jo jo jo' && <Friend> </Friend>
      }
      
    </div>
  );
};

export default Cousin;