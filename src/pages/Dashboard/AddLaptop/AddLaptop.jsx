import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { format } from 'date-fns';

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/shared/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { imageUpload } from "../../../utils/imageUploader"



const getCategories = async () => {
    const res = await axios.get("http://localhost:5000/categories")
    return res.data;
}

const postLaptopData = async (data) => {
    const res = await axios.post("http://localhost:5000/products", data)
    return res.data
}

const AddLaptop = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    const mutation = useMutation(
        {
            mutationFn: postLaptopData,
            onSuccess: () => {
                toast.success("Data added successfully");
                navigate('dashboard/my-products')
            }

        }

    )


    const handleAddLaptop = async (data) => {
        const used = data.usedFor + " " + data.years;
        const image = data.productImg[0];
        const imageURL = await imageUpload(image)
        console.log(used)
        const laptopData = {
            name: data.title,
            originalPrice: data.originalPrice,
            sellingPrice: data.sellingPrice,
            condition: data.condition,
            description: data.description,
            categoryId: data.category,
            location: data.location,
            yearsOfUse: used,
            createdAt: format(new Date(), "PP"),
            userEmail: user?.email,
            picture: imageURL,
            status: "listed",
            isVerified: false
        }
        console.log(laptopData)
        mutation.mutate(laptopData)
    }

    return (
        <div>
            <div className="hero my-20">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-5xl mb-5'>Add a Laptop</h2>

                        <form onSubmit={handleSubmit(handleAddLaptop)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: "Title is Required", })} name='title' className="input input-bordered" />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.title && errors.title?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category </span>
                                </label>

                                <select className="select select-bordered"
                                    {...register("category", {
                                        required: "This field is Required",

                                    })}
                                >
                                    {
                                        isLoading ? <Loading></Loading>
                                            :
                                            categories?.map(category => <option
                                                key={category._id}
                                                value={category._id}>
                                                {category.name}</option>)
                                    }



                                </select>

                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.category && errors.category?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="number" {...register("originalPrice", {
                                    required: "Original price is Required",
                                    pattern: { value: /[0-9]/g, message: "must be a number" }
                                })}
                                    name='originalPrice' className="input input-bordered"
                                />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.originalPrice && errors.originalPrice?.message
                                    }
                                </span>
                            </label>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Selling Price</span>
                                </label>
                                <input type="number" {...register("sellingPrice", {
                                    required: "Selling price is Required",
                                    pattern: { value: /[0-9]/g, message: "must be a number" }
                                })}
                                    name='sellingPrice' className="input input-bordered"
                                />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.sellingPrice && errors.sellingPrice?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Used for: </span>
                                </label>
                                <div className='flex justify-between'>
                                    <input type="number" {...register("usedFor", {
                                        required: "This field is Required",
                                        pattern: { value: /[0-9]/g, message: "must be a number" }
                                    })}
                                        name='usedFor' className="input input-bordered w-3/5"
                                    />
                                    <select className="select select-bordered w-1/3"
                                        {...register("years", {
                                            required: "This field is Required",

                                        })}
                                    >

                                        <option value="Years">Years</option>
                                        <option value="Months">Months</option>
                                        <option value="Days">Days</option>
                                    </select>
                                </div>
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.usedFor && errors.usedFor?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Condition </span>
                                </label>

                                <select className="select select-bordered"
                                    {...register("condition", {
                                        required: "This field is Required",

                                    })}
                                >

                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Damaged">Damaged</option>
                                </select>

                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.condition && errors.condition?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" {...register("location", { required: "Location is Required", })} name='location' className="input input-bordered" />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.location && errors.location?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description", { required: "Description is Required", })} name='description' className="textarea textarea-bordered h-24" />
                            </div>
                            <label className="label">
                                <span className="label-text text-red-500">
                                    {
                                        errors.description && errors.description?.message
                                    }
                                </span>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input required type="file" {...register("productImg")} placeholder="Product Image" name='productImg' className="file-input file-input-bordered " />

                            </div>

                            <div className="form-control mt-10">
                                <button className="btn btn-accent">Add Laptop</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLaptop;