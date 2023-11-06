
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ReactTab.css'
import { useEffect } from 'react';
import WebDeveloper from './WebDeveloper';



const ReactTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [webTab, setWebTab]= useState([])
    const [digitalTab, setDigitalTab]= useState([])
    const [graphicsTab, setGraphicsTab]= useState([])

    // web development
    useEffect(()=>{
        fetch('http://localhost:5000/jobs/Web%20Development')
        .then(res=>res.json())
        .then(data=>setWebTab(data))
    },[])

    // digital marketing
    useEffect(()=>{
        fetch('http://localhost:5000/jobs/Digital%20Marketing')
        .then(res=>res.json())
        .then(data=>setDigitalTab(data))
    },[])

    // graphics design
    useEffect(()=>{
        fetch('http://localhost:5000/jobs/Graphics%20Design')
        .then(res=>res.json())
        .then(data=>setGraphicsTab(data))
    },[])
    console.log(webTab)
    console.log(digitalTab)
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab> <span className='text-2xl font-bold '>Web Development</span></Tab>
                <Tab><span className='text-2xl font-bold'>Digital Marketing</span></Tab>
                <Tab><span className='text-2xl font-bold'>Graphics Design</span></Tab>
            </TabList>
            <TabPanel>
                {
                    webTab.map(tab=><WebDeveloper 
                        key={tab._id} tab={tab}
                        ></WebDeveloper>)
                }
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