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
							<NavLink className="textColor" href="#">
								Portfolio
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="textColor" href="#">
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
						<a href="mailto:connermcbride@ymail.com">connermcbride@ymail.com</a>
					</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
}
