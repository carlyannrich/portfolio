import React, { useState } from 'react';

import MenuIcon from './MenuIcon/index';
import Menu from './Menu/index';
import StyledMenuComplete from './MenuComplete.style';

const MenuComplete = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenuComplete>
      <i>
        <MenuIcon open={open} setOpen={setOpen} />
      </i>
      <div>
        {open && <Menu open={open} setOpen={setOpen} />}
      </div>
    </StyledMenuComplete>
  );
};

export default MenuComplete;
