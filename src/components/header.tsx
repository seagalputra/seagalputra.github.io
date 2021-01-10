import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

type MenuItem = {
  id: number
  name: string
  to: string
}

const menus: Array<MenuItem> = [
  { id: 1, name: "About", to: "/about" },
  { id: 2, name: "Projects", to: "/projects" },
  { id: 3, name: "Today I Learn", to: "/learns" },
]

const Header = ({ siteTitle }) => (
  <nav className="my-10">
    <div className="max-w-screen-lg my-auto mx-auto flex flex-row items-center justify-between">
      <p className="m-0 text-xl font-bold">
        <Link to="/">{siteTitle}</Link>
      </p>

      <div className="flex flex-row items-center justify-between gap-4">
        {menus.map(({ id, name, to }) => (
          <p key={id} className="m-0 hover:underline">
            <Link to={to}>{name}</Link>
          </p>
        ))}
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
