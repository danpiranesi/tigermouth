import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon height={25} width={25}/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent bg-primaryText rounded-sm pr-2 pl-2 pb-2 pt-2" sideOffset={11}>
          <DropdownMenu.Item className="DropdownMenuItem text-secondaryText">
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem  text-secondaryText">
            Provide Feedback
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem  text-secondaryText">
            About TigerMouth
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem  text-secondaryText">
            Privacy Policy
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow fill-primaryText" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;