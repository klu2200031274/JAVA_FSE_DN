import { useParams } from 'react-router-dom';
import trainersMock from './trainersmock';

function TrainerDetail() {
    const { id } = useParams();
    const trainer = trainersMock.find(t => t.trainerId === id);

    if (!trainer) {
        return <div>Trainer not found</div>;
    }

    return (
        <div>
            <h2>Trainers Details</h2>
            <h3>{trainer.name} ({trainer.technology})</h3>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <ul>
                {trainer.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default TrainerDetail;