import React from "react";
import Link from 'next/link'


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark special-color-dark topMenuHorizontal sticky-top">
        <button
          className="navbar-toggler d-block d-md-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarLeft"
          aria-controls="#navbarLeft"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="topMenu">
          <ul className="navbar-nav mr-auto left">
            <li className="nav-item">
              <a href="/" className="nav-link home-icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </a>
            </li>
            <Link href="/nodejs">
            <li className="nav-item">
              <a className="nav-link">
                Node JS
              </a>
            </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ASP.NET Core
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                MVC
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                IoC{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web API
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                C#
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TypeScript
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Angular
              </a>
            </li>
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle no-caret"
                id="navbarDropdownMenuLink1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div
                className="dropdown-menu mega-menu v-2 row z-depth-1 special-color"
                aria-labelledby="navbarDropdownMenuLink1"
              >
                <a className="close text-white">&#10005; </a>
                <div className="row mx-md-4 mx-1">
                  <div className="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4 mt-4 mb-4">
                    <h6 className="sub-title text-white">.NET Tutorials</h6>
                    <ul className="caret-style pl-0">
                      <li className="">
                        <a className="menu-item" href="#">
                          ASP.NET Core
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          ASP.NET MVC
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          IoC{" "}
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          web api
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          C#
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          LINQ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4  mt-4 mb-4">
                    <h6 className="sub-title text-white">Client Side</h6>

                    <ul className="caret-style pl-0">
                      <li className="">
                        <a className="menu-item" href="#">
                          TypeScript
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          Angular 11
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          AngularJS 1
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          Node.js
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          D3.js
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          jQuery
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          JavaScript{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4 mt-4 mb-4">
                    <h6 className="sub-title text-white">Server Side</h6>

                    <ul className="caret-style pl-0">
                      <li className="">
                        <a className="menu-item" href="#">
                          Python
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          SQL
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          Sass
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          Https
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xl-3 sub-menu my-xl-4 mt-4 mb-4">
                    <h6 className="sub-title  text-white">Skill Tests</h6>
                    <ul className="caret-style pl-0">
                      <li className="">
                        <a className="menu-item" href="#">
                          ASP.NET Core
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="/#">
                          ASP.NET MVC
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          LINQ
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          C#
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          web api
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          IoC{" "}
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          TypeScript
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          AngularJS
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          Node.js
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          {" "}
                          jQuery{" "}
                        </a>
                      </li>
                      <li className="">
                        <a className="menu-item" href="#">
                          JavaScript
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav nav-flex right ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Articles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tests
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
