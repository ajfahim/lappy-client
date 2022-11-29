import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const ProductCard = ({ product }) => {
    const { _id, picture, name, originalPrice, sellingPrice, condition, description, location, yearsOfUse, createdAt, userId } = product;

    const { user } = useContext(AuthContext)
    console.log("sfsfssad: ", user)

    const getUserData = async () => {
        if (user) {
            const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
            console.log("userData: ", res)
            return res.data
        }

    }

    const { data: userData } = useQuery({
        queryKey: ["users"],
        queryFn: getUserData
    })
    return (
        <>
            <div className="card bg-base-100 shadow-xl max-w-lg">
                <figure className='max-h-96 min-h-[24rem] bg-white'><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    {/* fetch user name using userId after implementing user table in database 
                ** isVerified (blue tick) should be in users collection
                ** add blue tick if user is verified    
                */}
                    <p className='text-gray-500'>Seller: <span> {userData?.name}</span></p>
                    <p className='text-gray-500'>Location: <span> {location}</span></p>
                    <p className='text-gray-500'>Used for: <span> {yearsOfUse}</span></p>
                    <p className='text-gray-500'>Post Date: <span> {createdAt}</span></p>
                    <p className='text-gray-500'>Original Price: <span>${originalPrice}</span></p>
                    <p className='text-gray-500'>condition: <span> {condition}</span></p>
                    <div className='min-h-16'>
                        {description?.length > 100
                            ?
                            <p>{description.slice(0, 99)}...</p>
                            :
                            <p>{description}</p>
                        }
                    </div>
                    <div className="card-actions justify-between     items-center">
                        <span className='text-5xl font-bold text-primary'>${sellingPrice}</span>
                        <div>
                            <Link to={`/products/${_id}`}><button className="btn btn-sm btn-accent">See Details</button></Link>
                            <button className="ml-1 btn btn-sm btn-neutral">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductCard;