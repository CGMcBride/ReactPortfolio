import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from "reactstrap";
import "./style.css";

export default function Navbarsection(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="secondary" light expand="md">
				<NavbarBrand href="/">Conner McBride</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink className="textColor" href="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="textColor" href="/portfolio">
								Portfolio
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="textColor" href="/contact">
								Contact
							</NavLink>
						</NavItem>
						{/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
					</Nav>
					<NavbarText>
						{/* <a href="mailto:connermcbride@ymail.com">connermcbride@ymail.com</a> */}
						<div className="socialIcons">
							<a href="https://www.linkedin.com/in/conner-mcbride"
								target="_blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin fa-3x pr-2"></i>
							</a>
							<a href="https://github.com/CGMcBride" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-github fa-3x"></i>
							</a>
						</div>
					</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}
