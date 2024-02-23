import React from "react";
import './footer.css'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
export default function Footer() {
    return (
        <footer className="">
            <Row >
                <Col md={{ span: 6, offset: 3 }}>
                    <strong>
                        <hr />
                        <i>&copy; {new Date().getFullYear()} All Rights Reserved</i>
                    </strong>
                </Col>
            </Row>
        </footer>
    )
}