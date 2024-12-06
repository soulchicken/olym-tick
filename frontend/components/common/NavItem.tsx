interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};

export default NavItem;
