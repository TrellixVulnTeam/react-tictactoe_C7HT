import React from 'react';

const SideBarMenu = React.forwardRef((props, ref) => {
    return (

       
        <div className={`w-[300px] bg-gray-300 shadow-md fixed transition-all top-0 left-0 bottom-0 z-2
            ${props.show? "":"-translate-x-full"}`    
        }
            ref={ref}
        >

        </div>

        
    );
});

export default SideBarMenu;