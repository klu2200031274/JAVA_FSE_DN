const CohortDetails = ({ cohort }) => {
  return (
    <div>
      <h3>{cohort.code}</h3>
      <p>{cohort.name}</p>
    </div>
  );
};
export default CohortDetails;
