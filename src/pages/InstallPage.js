import './PageStyle/GrafiskPage.css'; 
import './PageStyle/InstallPage.css'; 

import '../pages/PageStyle/Global.css';
import pwatit from '../assets/misc/pwatitle.png'
import downApple from '../assets/misc/bit.png'
import downAndroid from '../assets/misc/bot.png'
import pho from '../assets/Profilering/sdPhone.png';
import brave from '../assets/icons/brave.png';
import safari from '../assets/icons/safari.png';
import chrome from '../assets/icons/chrome.png';
import opera from '../assets/icons/opera.png';
import samsung from '../assets/icons/samsung.png';
import add from '../assets/icons/add.png';
import divider from '../assets/Profilering/divider.png';

import goHere from '../assets/Profilering/sdGohere.png';


const LastNed = () => {

  return (
    <div className="container">
      <h1 className="hero-header-sub"> - Last ned - </h1>

      <div className="bg-container">
        <img src={pho} alt="background" className="bg-image" />
      </div>

  
  
 

      <div className='gapper'></div>


        
      <div className="sd-container">
      <img src={goHere} alt="source" className="sd-image" />

      <img src={pwatit} alt="problem" className="sd-image" />
        <img src={downApple} alt="problem" className="sd-image" />

        <img src={downAndroid} alt="logo" className="sd-image" />
        <div className='browser-tit'>Last ned fra enhver nettleser</div>
              <div className="browser-icon-container">
       
        <img src={chrome} alt="problem" className="browser-icon" />
        <img src={safari} alt="logo" className="browser-icon" />
        <img src={brave} alt="text" className="browser-icon" />
        <img src={opera} alt="logo" className="browser-icon" />
        <img src={samsung} alt="text" className="browser-icon" />
        <img src={add} alt="text" className="browser-icon" />

      </div>
      </div>

      <div className='bottom-spacer'>
      </div>
    </div>
  );
};

export default LastNed;
