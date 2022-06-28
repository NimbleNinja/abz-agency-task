import React from 'react';
import Button from '../../../components/Button';
import './test-assigment.scss';

const TestAssigment = () => {
  return (
    <article className="assigment">
      <div className="container">
        <div className="assigment__content">
          <h2 className="assigment__title title">
            Test assignment for front-end developer
          </h2>
          <p className="assigment__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button content="Sing up" />
        </div>
      </div>
    </article>
  );
};

export default TestAssigment;
