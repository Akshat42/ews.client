
import classes from "./hero.module.css";
import HeroBg from "../../assets/images/programs-hero-bg.png";
import MobHeroBg from "../../assets/images/mob-hero-bg.png";
import HeroTopImage from "../../assets/images/corporate-sustainability-programs.png";
import Duration from "../../assets/images/duration.png";
import Image from "next/image";

const Hero: React.FC = () => {
   
return (
<div>
<div className={classes.desktopContainer}> 
    <Image src={HeroBg} alt="Hero bg" className={classes.bgImage}/>
    <Image src={HeroTopImage} alt="HeroTopImage" className={classes.topImage}/>
    <h2 className={classes.heading}>Corporate<br/>Sustainability<br/>Programs</h2>
    <Image src={Duration} alt="Hero Duration" className={classes.durationImg}/>
              </div>

              <div className={classes.mobileContainer}> 
    <Image src={MobHeroBg} alt="Mobile Hero bg" className={classes.mobBgImage}/>
    <div className={classes.mobContainer}>
    <h2 className={classes.headingMob}>Corporate<br/>Sustainability<br/>Programs</h2>
    <Image src={HeroTopImage} alt="HeroTopImage" className={classes.topImage2}/>
    <div className={classes.durationImgMobContainer}>
     <Image src={Duration} alt="Hero Duration" className={classes.durationImgMob}/>
     </div>
              </div>
              </div>
              </div>);
              };

export default Hero;