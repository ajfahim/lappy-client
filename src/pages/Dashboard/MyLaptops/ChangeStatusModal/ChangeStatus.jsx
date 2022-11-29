import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import React, { useState } from 'react';

import toast from 'react-hot-toast';





const ChangeStatus = ({ laptop }) => {


    const [statusData, setStatusData] = useState("")

    const changeStatusData = async (data) => {

        const res = await axios.put(`http://localhost:5000/products/${laptop._id}`, { status: data });
        return res.data;
    }
    const handleChangeStatus = () => {
        mutation.mutate(statusData);
    }

    const queryClient = useQueryClient()

    const mutation = useMutation(
        {
            mutationFn: changeStatusData,

            onSuccess: (data) => {
                toast.success("Data added successfully");
                queryClient.invalidateQueries({ queryKey: ["laptops"], data })
            }
        }
    )




    const options = [
        {
            id: 1,
            name: "listed"
        },
        {
            id: 2,
            name: "booked"
        },
        {
            id: 3,
            name: "sold"
        }

    ]
    console.log(statusData)
    return (
        <div>
            <input type="checkbox" id="edit-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h4 className="text-xl mb-3">Change Status</h4>
                    <select onChange={(event) => setStatusData(event.target.value)} className="select select-bordered w-full max-w-xs">
                        {
                            options.map(option => <option
                                key={option.id}
                                value={option.name}
                            >{option.name}
                            </option>)
                        }


                    </select>
                    <button onClick={handleChangeStatus} className='btn btn-primary ml-3'>Submit</button>
                    <div className="modal-action">
                        <label htmlFor="edit-product-modal" className="btn btn-error">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeStatus;