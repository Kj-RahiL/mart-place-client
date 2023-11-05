
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ReactTab.css'



const ReactTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab> <span className='text-2xl font-bold '>Web Development</span></Tab>
                <Tab><span className='text-2xl font-bold'>Digital Marketing</span></Tab>
                <Tab><span className='text-2xl font-bold'>Graphics Design</span></Tab>
            </TabList>
            <TabPanel>
                <h2 className=''>hello there</h2>
            </TabPanel>
           <TabPanel>
                <h3>hi moye</h3>
            </TabPanel>
            <TabPanel>
                <h3>hello world</h3>
            </TabPanel>
        </Tabs>
    );
};

export default ReactTab;