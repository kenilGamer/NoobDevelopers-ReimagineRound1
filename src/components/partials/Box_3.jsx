import React from "react";

function Box_3(size) {

  function find_h(size) {
    var number = parseInt(size.w);
    var yy = size.w.split(number.toString());
    var find = number / 2 + yy[1];
    return find;

  }

  function type(type) {
    //type_1 b_r;
    //type_2 b_l;
    //type_3 t_r;
    //type_4 t_l;
    var type_ = {
      type_1: "rotateX(180deg)",
      type_2: "rotate(-180deg)",
      type_3: "rotate(0deg)",
      type_4: "rotateY(180deg)",

      //type_2: "rotate(180deg)",
      //type_3:"rotate(180deg)",
      //type_4:"rotate(0deg)",
      //type_5:"rotateY(180deg)",
      /// type_6:"rotate(-180deg)",
    }
    return type_[type];
  }

  //alert(type("type_2"))

  return (
    // <div className={`relative w-[${"30vw"}] h-[${"15vw"}]  bg-emerald-700 border-0`}>
    // <div className={`relative w-[${"30vw"}] h-[${"15vw"}] bg-emerald-700 border-0`}>
    <div className={`relative border-0`} style={{width:size.w,height:find_h(size), transform:type(size.type),top:size.t,left:size.l}}>
         <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <polygon className="fill-black" points="20,60 380,60 380,140 20,140" />
          <polyline className="stroke-[#999d9c] " points="20,60 60,20 340,20 380,60 380,140 340,180 60,180 20,140 20,60" strokeWidth="8" />
          <polyline className="stroke-lightgreen" points="20,60 60,20 340,20 380,60" strokeWidth="8" />
        </svg>
   </div>
  );
}

export default Box_3;