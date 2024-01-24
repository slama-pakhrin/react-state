import TabButton from "./TabButton";
import TabContents from "./TabContents";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){

  const [tabName, setTabName] = useState('');
  
  function HandleTab(newTab){
    setTabName(newTab);
  }

  let TabContent = "Please select one from the above";

  if(tabName){
    TabContent = <TabContents {...EXAMPLES[tabName]}/>
  }
    
    return (
        <Section title="Examples" id="examples">
          <Tabs
            navs={ 
          <>
            <TabButton isSelected={tabName === 'components'} onClick={() => HandleTab('components')}>Components</TabButton>
            <TabButton isSelected={tabName === 'jsx'} onClick={() => HandleTab('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabName === 'props'} onClick={() => HandleTab('props')}>Props</TabButton>
            <TabButton isSelected={tabName === 'state'} onClick={() => HandleTab('state')}>State</TabButton>
          </>
         }> 
          {TabContent}
          </Tabs>
        </Section>
    )
}