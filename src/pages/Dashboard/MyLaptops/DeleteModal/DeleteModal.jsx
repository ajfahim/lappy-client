import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({ laptop }) => {


    const deleteLaptop = async (data) => {
        const res = await axios.delete(`https://lappy-server.vercel.app/products/${data._id}`)
        return res.data
    }
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: deleteLaptop,
        onSuccess: () => {
            toast.success(`${laptop.name} has been deleted successfully`)
            queryClient.invalidateQueries({ queryKey: ["laptops"] })
        }
    })

    const handleDelete = () => {
        mutation.mutate(laptop)
    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg">Are you sure you want to delete <span className="font-bold">{laptop?.name}</span> </h3>
                    <div className="flex justify-end mt-5">
                        <button onClick={handleDelete} className='btn btn-error'>Yes</button>
                        <label htmlFor="delete-modal" className="ml-2 btn btn-primary">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;