
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ReactTab.css'
import { useEffect } from 'react';
import WebDeveloper from './WebDeveloper';
import DigitalMarketCard from './DigitalMarketCard';
import GraphicsCard from './GraphicsCard';



const ReactTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [webTab, setWebTab] = useState([])
    const [digitalTab, setDigitalTab] = useState([])
    const [graphicsTab, setGraphicsTab] = useState([])

    // web development
    useEffect(() => {
        fetch('https://mart-place-server.vercel.app/jobDetails/Web%20Development')
            .then(res => res.json())
            .then(data => setWebTab(data))
    }, [])

    // digital marketing
    useEffect(() => {
        fetch('https://mart-place-server.vercel.app/jobDetails/Digital%20Marketing')
            .then(res => res.json())
            .then(data => setDigitalTab(data))
    }, [])

    // graphics design
    useEffect(() => {
        fetch('https://mart-place-server.vercel.app/jobDetails/Graphics%20Design')
            .then(res => res.json())
            .then(data => setGraphicsTab(data))
    }, [])
    // console.log(webTab)
    // console.log(digitalTab)
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab> <span className='text-2xl font-bold '>Web Development</span></Tab>
                <Tab><span className='text-2xl font-bold'>Digital Marketing</span></Tab>
                <Tab><span className='text-2xl font-bold'>Graphics Design</span></Tab>
            </TabList>
            <TabPanel>
                <div className='grid  mx-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        webTab.map(tab => <WebDeveloper
                            key={tab._id} tab={tab}
                        ></WebDeveloper>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid mx-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                    {
                        digitalTab.map(tab => <DigitalMarketCard
                            key={tab._id} tab={tab}
                        ></DigitalMarketCard>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid  mx-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                    {
                        graphicsTab.map(tab => <GraphicsCard
                            key={tab._id} tab={tab}
                        ></GraphicsCard>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default ReactTab;