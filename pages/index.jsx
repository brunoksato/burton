import React,{useState} from "react";
import { useSpring, animated } from 'react-spring'

import Layout from "../components/layout";
import MenuMobile from "../components/MenuMobile";
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import Beers from "../components/Sections/Beers";
import Events from "../components/Sections/Events";

const HomePage = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const panelProps = useSpring({
    transform: panelOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
    marginTop: panelOpen ? "0px":"-44px",
    zIndex:9999,
    position:"fixed",
    top:0,
    width:"100%"
  });

  return (
    <Layout overflow={panelOpen ? "hidden" : "auto"}>
      <animated.div style={panelProps} className="panel">
        <MenuMobile open={panelOpen} close={() => setPanelOpen(a => !a)} setPanelOpen={setPanelOpen}/>
      </animated.div>
      <SEO title="Burton" />
      <Header showMenu={() => setPanelOpen(a => !a)}/>
      <Beers id="beers" />
      <Events id="events" />
    </Layout>
  );
};

export default HomePage;
