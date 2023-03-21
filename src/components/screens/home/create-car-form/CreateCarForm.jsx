import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CarService } from '../../../../services/car.service';
import styles from './CreateCarForm.module.scss';

const CreateCarForm = () => {
    const [data, setData] = useState({});

    const { register, reset, handleSubmit } = useForm({
        mode: 'onChange',
    });

    const queryClient = useQueryClient();

    const { mutate } = useMutation(['create car'], data => CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('cars');
            reset();
        },
    });

    const createCar = data => {
        mutate(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input {...register('name', { required: true })} placeholder='Name' />
            <input {...register('price', { required: true })} placeholder='Price' />
            <input {...register('image', { required: true })} placeholder='Image' />
            <button className='btn'>Create</button>
        </form>
    );
};

export default CreateCarForm;
