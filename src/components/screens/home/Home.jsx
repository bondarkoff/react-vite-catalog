import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import { CarService } from '../../../services/car.service.js';
import { useQuery } from '@tanstack/react-query';
import Header from '../../ui/Header';
import Catalog from '../../ui/Catalog';

function Home() {
    const { data, isLoading } = useQuery(['cars'], () => CarService.getAll());

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <h1>Cars Catalog</h1>
                    <Header />
                </div>
                <CreateCarForm />
                <Catalog data={data} />
            </div>
        </div>
    );
}

export default Home;
