import React from "react";

function Box_1(size) {

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
    <div className={`relative border-0`} style={{width:size.w,height:size.w, transform:type(size.type)}}>
   <div className="absolute top-0 w-[65.5%] h-[1px] bg-white"></div>
   <div className="absolute top-0 h-full w-[1px] bg-white"></div>
   <div className="absolute bottom-0 w-full h-[1px] bg-white"></div>
   <div className="absolute bottom-0 right-0 h-1/2 w-[1px] bg-white"></div>
   <div className="absolute bottom-[50%] right-0 h-[60.5%] w-[1px] bg-white -rotate-[35deg] transform origin-bottom-right"></div>
   </div>
  );
}

export default Box_1;