import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacksCount, drinksCount }) { // Assuming you pass these counts as props
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            {/* Displaying the counts of snacks and drinks */}
            <p>We have a total of {snacksCount} snacks available.</p>
            <p>And a total of {drinksCount} drinks available.</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
