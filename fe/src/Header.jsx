import * as Icons from './assets'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="header-icon">
          <Icons.SidebarIcon />
        </div>
      </div >
      <div className="pill">
        <Icons.ShareIcon />
      </div>
    </header >
  );
}
