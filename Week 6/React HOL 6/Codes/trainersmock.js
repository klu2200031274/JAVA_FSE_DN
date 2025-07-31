import Trainer from "./trainer";

const trainersMock = [
    new Trainer(
        't-arun1',
        'Arun Mehta',
        'arun.mehta@techacademy.com',
        '9876543210',
        'Full Stack',
        ['JavaScript', 'React', 'Node.js', 'MongoDB']
    ),
    new Trainer(
        't-sneha2',
        'Sneha Iyer',
        'sneha.iyer@techacademy.com',
        '9123456789',
        'Cloud Computing',
        ['AWS', 'Azure', 'Docker', 'Kubernetes']
    ),
    new Trainer(
        't-rahul3',
        'Rahul Deshmukh',
        'rahul.d@techacademy.com',
        '9988776655',
        'Data Science',
        ['Python', 'Pandas', 'Machine Learning', 'TensorFlow']
    )
];

export default trainersMock;
