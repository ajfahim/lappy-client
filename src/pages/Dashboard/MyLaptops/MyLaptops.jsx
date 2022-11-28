import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const MyLaptops = () => {

    const { user } = useContext(AuthContext);


    const getLaptopData = async () => {
        const res = await axios.get(`http://localhost:5000/products/${user?.email}`);
        return res.data
    }


    const { data: laptops, isLoading: isLaptopLoading } = useQuery({
        queryKey: ["laptops"],
        queryFn: getLaptopData
    })


    const postAdvertisedData = async (data) => {
        const res = await axios.put(`http://localhost:5000/products/${data._id}`, { isAdvertised: true });
        return res.data;
    }

    const mutation = useMutation(
        {
            mutationFn: postAdvertisedData,
            onSuccess: () => {
                toast.success("Data added successfully");
                QueryClient.invalidateQueries({ queryKey: ['laptops'] })

            }

        }

    )

    const addToAdvertisedDb = (advertisedData) => {
        mutation.mutate(advertisedData)
    }

    return (
        <div className='mt-10'>
            <h3 className='text-xl font-bold text-primary mb-10'>My Laptops</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Original Price</th>
                            <th>Selling Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLaptopLoading ? <Loading></Loading>
                                :
                                laptops.map(laptop => <tr className='text-center' key={laptop._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={laptop.picture} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {laptop.name}
                                    </td>
                                    <td>
                                        $ {laptop.originalPrice}
                                    </td>
                                    <td>
                                        $ {laptop.sellingPrice}
                                    </td>
                                    <td>
                                        <select className="select select-bordered w-1/2 max-w-xs">

                                            <option>listed</option>
                                            <option>booked</option>
                                            <option>sold</option>

                                        </select>
                                    </td>
                                    <td>
                                        <div className=''>
                                            {
                                                laptop?.isAdvertised ?
                                                    <p className='text-green-500'>Advertised</p>
                                                    :
                                                    <button onClick={() => addToAdvertisedDb(laptop)} className='btn btn-primary btn-xs'>Advertise</button>
                                            }

                                            <button className='ml-1 btn btn-error btn-xs'>Delete</button>
                                        </div>
                                    </td>
                                </tr>)
                        }



                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyLaptops;