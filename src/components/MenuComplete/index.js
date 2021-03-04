import React, { useState } from 'react';

import MenuIcon from './MenuIcon/index';
import Menu from './Menu/index';
import StyledMenuComplete from './MenuComplete.style';

const MenuComplete = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenuComplete>
      <div>
        <MenuIcon open={open} setOpen={setOpen} alt="Twitter Icon" />
      </div>
      <div>
        {open && <Menu open={open} setOpen={setOpen} />}
      </div>
    </StyledMenuComplete>
  );
};

export default MenuComplete;
