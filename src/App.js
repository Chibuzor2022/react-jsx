import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "./product.js";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import { BsGlobe2 } from "react-icons/bs";

import {
	Row,
	Col,
	Button,
	Navbar,
	Nav,
	Card,
	Container,
} from "react-bootstrap";

// prompt to receive the name input
const yourName = prompt("Please enter your first name");

function App() {
	return (
		<>
			<div className="App">
				{/* Navbar */}
				<Navbar bg="dark" variant="dark" expand="lg">
					<Container>
						<Navbar.Brand href="#home">ES</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#products">Products</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				{/* Heading */}
				<Container>
					<h1 className="text-center mb-4">Welcome to Emma Stores</h1>

					{/* Card */}
					<Row>
						<Col md={12}>
							{/* <Col md={4}> */}
							<Card className="mb-4">
								<Card.Img variant="top" src={product.image} />
								<Card.Img variant="top" />
								<Card.Body>
									<Card.Title>
										<Name />
									</Card.Title>
									<Card.Text>
										<Description />
									</Card.Text>
									<Button className="px-4" variant="secondary">
										$<Price />
									</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			{/* This is a div containing the response to the prompt*/}
			<Container>
				<p> Hello {yourName || "there"} </p>
				{yourName && (
					<div>
						<p>
							{" "}
							You are welcome to our Website <BsGlobe2 />
						</p>
						<img src="/images/Welcome.jpg" alt="" />
					</div>
				)}
			</Container>
		</>
	);
}

export default App;
