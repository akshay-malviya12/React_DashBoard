import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import PieChart from './chart';
import BarChart from "./chartbar";
import LineChart from "./linechart";
import SalesTable from "./salesTable";

function Dashboard() {
  return (
    <Container fluid className="p-3">
      <h2 className="mb-4 text-center text-md-start responsive-text">Dashboard Overview</h2>

      {/* Summary Cards */}
      <Row className="g-3">
        <Col xs={10} lg={4} md={6} sm={12}>
          <Card className="h-100 w-100  mx-auto">
            <Card.Body className="py-2 px-3 responsive-text">
              <Card.Title className="responsive-text">Users</Card.Title>
              <Card.Text className="">1200 Active Users</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} lg={4} md={6} sm={12}>
          <Card className="h-100 w-100 mx-auto">
            <Card.Body className="py-2 px-3 responsive-text">
              <Card.Title>Sales</Card.Title>
              <Card.Text>$45,000 Revenue</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} lg={4} md={12} sm={12}>
          <Card className="h-100 w-100 mx-auto">
            <Card.Body className="py-2 px-3 responsive-text">
              <Card.Title className="fs-5">Performance</Card.Title>
              <Card.Text className="fs-6">85% Efficiency</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Chart Cards */}
      <Row className="g-3 mt-3">
        <Col xs={10} lg={4} md={6} sm={12}>
          <Card className="h-100 w-100 mx-auto">
            <Card.Body className="py-2 px-3 responsive-text">
              <Card.Title className="fs-5">Pie Chart Example</Card.Title>
              <div style={{ height: '25vh' }}>
                <PieChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} lg={4} md={6} sm={12}>
          <Card className="h-100 w-100 mx-auto">
            <Card.Body className="py-2 px-3 responsive-text">
              <Card.Title className="fs-5">Sales Overview</Card.Title>
              <div style={{ height: '25vh' }}>
                <BarChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} lg={4} md={12} sm={12}>
          <Card className="h-100 w-100 mx-auto">
            <Card.Body className="py-2 px-3 responsive-text">
              <Card.Title className="fs-5">Profit Trend</Card.Title>
              <div style={{ height: '25vh' }}>
                <LineChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   {/*  Show data in tables  */}
            {/* <Row className="g-3 mt-3">
        <Col xs={10} lg={4} md={6} sm={12}>
        <SalesTable/>
        </Col>
      </Row> */}
 


    </Container>
  );
}

export default Dashboard;
