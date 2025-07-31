class Cohort {
    constructor(cohortCode,
        startDate,
        technology,
        trainerName,
        coachName,
        currentStatus) {
        this.cohortCode = cohortCode;
        this.coachName = coachName;
        this.trainerName = trainerName;
        this.technology = technology;
        this.startDate = startDate;
        this.currentStatus = currentStatus;
    }
}

const CohortsData = [
    new Cohort('JSFSE25B01', '05-Mar-2025', 'JavaScript FSD', 'Anita Sharma', 'Rahul Mehta', 'Ongoing'),
    new Cohort('PYFSE24A03', '12-Jan-2024', 'Python FSD', 'Dr. Kavya Rao', 'Sneha Nair', 'Completed'),
    new Cohort('RJFSE25B02', '01-Jul-2025', 'ReactJS FSD', 'Sameer Khan', 'Arvind Iyer', 'Scheduled'),
    new Cohort('MLFSE23C07', '18-Sep-2023', 'Machine Learning', 'Meera Thomas', 'Ishaan Verma', 'Ongoing'),
    new Cohort('JAVAFSE24D10', '28-Apr-2024', 'Java FSD', 'Ravi Krishnan', 'Aarav Desai', 'Completed'),
    new Cohort('NETFSE25A02', '10-Feb-2025', '.NET FSD', 'Divya Menon', 'Vikram Reddy', 'Scheduled'),
    new Cohort('DSFSE23B08', '03-Oct-2023', 'Data Science', 'Shalini Bose', 'Rehan Qureshi', 'Ongoing')
];

export { Cohort, CohortsData };
