import React from 'react';
import { render, screen } from '@testing-library/react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
  const testCohort = CohortData[0];

  test('should create the component', () => {
    render(<CohortDetails cohort={testCohort} />);
    expect(screen.getByText(testCohort.code)).toBeInTheDocument();
  });

  test('should initialize the props', () => {
    render(<CohortDetails cohort={testCohort} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent(testCohort.code);
  });

  test('should display cohort code in h3', () => {
    render(<CohortDetails cohort={testCohort} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(testCohort.code);
  });

  test('should always render same html (snapshot test)', () => {
    const { asFragment } = render(<CohortDetails cohort={testCohort} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
