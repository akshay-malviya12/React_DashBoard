import React from 'react';
import { Table, Container } from 'react-bootstrap';

const SalesTable = () => {
  const salesData = [
    { id: 1, product: 'Laptop', region: 'North', units: 120, revenue: 96000 },
    { id: 2, product: 'Smartphone', region: 'South', units: 200, revenue: 110000 },
    { id: 3, product: 'Tablet', region: 'East', units: 150, revenue: 75000 },
    { id: 4, product: 'Monitor', region: 'West', units: 80, revenue: 40000 },
  ];

  return (
    <Container fluid className="my-4">
      <h4 className="mb-3">Sales Report</h4>
      <div className="table-responsive">
        <Table striped bordered hover responsive="md">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Region</th>
              <th>Units Sold</th>
              <th>Revenue ($)</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product}</td>
                <td>{item.region}</td>
                <td>{item.units}</td>
                <td>{item.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default SalesTable;
