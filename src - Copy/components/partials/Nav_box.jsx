import React from 'react'
import { useState } from "react";
function Nav_box(info) {
  const [w, setW] = useState(info.width);
  const [h, setH] = useState(61);


  return (
    <div className="Group3 " style={{ width: 207 + "px", height: h + "px", position: 'relative' }}>
      <h1 className="absolute whitespace-nowrap text-2xl heading top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{info.text}</h1>
      <div className="Line1" style={{ width: w - 41.88 + "px", height: '0px', left: '26.76px', top: 0, position: 'absolute', background: '#100F0F', border: `3px ${info.color} solid` }}></div>
      <div className="Line2" style={{ width: w - 171.78 + "px", height: '0px', left: '30.76px', top: '4px', position: 'absolute', transform: 'rotate(135deg)', transformOrigin: '0 0', background: 'green', border: `3px ${info.color} solid` }}></div>
      <div className="Line3" style={{ width: w - 168.94 + "px", height: '0px', left: '7.70px', top: '24.94px', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: '#100F0F', border: `3px ${info.color} solid` }}></div>
      <div className="Line4" style={{ width: w - 24.23 + "px", height: '0px', left: '2px', top: '58px', position: 'absolute', background: '#100F0F', border: `3px ${info.color} solid` }}></div>
      <div className="Line5" style={{ width: w - 176.35 + "px", height: '0px', left: '178px', top: '60px', position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#100F0F', border: `3px ${info.color} solid` }}></div>
      <div className="Line6" style={{ width: w - 176.24 + "px", height: '0px', left: '198px', top: '42.90px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#100F0F', border: `3px ${info.color} solid` }}></div>
      <div className="Line7" style={{ width: w - 190.32 + "px", height: '0px', left: '192px', top: '0px', position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', background: '#100F0F', border: `3px ${info.color} solid` }}></div>
    </div>

  )
}

export default Nav_box