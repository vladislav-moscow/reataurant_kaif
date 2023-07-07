import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import { images } from '../../constants'
import Topbar from '../../components/Topbar/Topbar'
import MenuItemMain from '../../components/Menuitem/MenuItemMain'
import axios from 'axios'
import { Footer } from '../../container'

const Snacks = () => {
  const [data, setData] = useState([]);
  const [snacks, setSnacks] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/titleMenu").then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/breakfast").then((res) => {
      setSnacks(res.data);
    });
  }, []);
  return (
    <div className="app__menu">
        <Navbar />
        <div className="app__menu-topbar">
          <div className="topbar__video">
            <div className="topbar__videoBackground">
              <video preload="auto" playsInline autoPlay muted>
                <source src={images.video} type="video/mp4" />
              </video>
            </div>
          </div>
          <Topbar data={data} />
          <div className="menuItem__cart">
            {snacks.map((item) => (
            <MenuItemMain data={item} key={item.id}/>
          ))}
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default Snacks