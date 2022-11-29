import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ChangeStatus from './ChangeStatusModal/ChangeStatus';
import DeleteModal from './DeleteModal/DeleteModal';




const MyLaptops = () => {


    const { user } = useContext(AuthContext);
    const [laptop, setLaptop] = useState(null);



    const postAdvertisedData = async (data) => {
        let postData = {}
        if (data?.isAdvertised) {
            postData = { isAdvertised: false }
        }
        else {
            postData = { isAdvertised: true }
        }
        const res = await axios.put(`https://lappy-server.vercel.app/products/${data._id}`, postData);

        return res.data;
    }
    const addToAdvertisedDb = (advertisedData) => {
        mutation.mutate(advertisedData);
    }

    const queryClient = useQueryClient()

    const mutation = useMutation(
        {
            mutationFn: postAdvertisedData,

            onSuccess: (data) => {
                toast.success("Data added successfully");
                queryClient.invalidateQueries({ queryKey: ["laptops"], data })
            }
        }
    )

    const getLaptopData = async () => {
        const res = await axios.get(`https://lappy-server.vercel.app/products/user/${user?.email}`);


        return res.data
    }


    const { data: laptops, isLoading: isLaptopLoading } = useQuery({
        queryKey: ["laptops"],
        queryFn: getLaptopData,
    })

    return (
        <>
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
                                                <div className=" w-16">
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
                                            {laptop.status}
                                        </td>
                                        <td>
                                            <>
                                                {
                                                    (laptop?.isAdvertised ?
                                                        <button onClick={() => addToAdvertisedDb(laptop)} className='btn btn-secondary btn-xs'>Remove from Advertised</button>
                                                        :
                                                        <button onClick={() => addToAdvertisedDb(laptop)} className='btn btn-primary btn-xs'>Advertise</button>)
                                                }
                                                <label onClick={() => setLaptop(laptop)} htmlFor="edit-product-modal" className="ml-1 btn btn-accent btn-xs">change status</label>
                                                <label onClick={() => setLaptop(laptop)} htmlFor="delete-modal" className="ml-1 btn btn-error btn-xs">Delete</label>
                                            </>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ChangeStatus laptop={laptop}></ChangeStatus>
            <DeleteModal laptop={laptop}></DeleteModal>
        </>

    );
};

export default MyLaptops;