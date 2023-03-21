import CarItem from '../screens/home/car-item/CarItem';
import CreateCarForm from '../screens/home/create-car-form/CreateCarForm';

const Catalog = ({ data }) => {
    return (
        <div className='wrapper'>
            {data.length ? (
                data.map(car => <CarItem car={car} key={car.id} />)
            ) : (
                <p>Theres no cars!</p>
            )}
        </div>
    );
};

export default Catalog;
