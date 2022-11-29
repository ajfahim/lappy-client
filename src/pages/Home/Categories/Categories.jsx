
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../../components/shared/Loading/Loading';
import Category from './Category/Category';

const getCategories = async () => {
    const res = await axios.get("http://localhost:5000/categories")
    return res.data;
}

const Categories = () => {

    // const [categories, setCategories] = useState([]);
    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    // const getData = async () => {
    //     const result = await axios.get('../../../../public/data/category.json');
    //     console.log(result)
    //     return result
    // }

    // useEffect(() => {

    //     fetch("data/category.json")
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h5 className='text-primary font-bold text-3xl mt-10 mb-5'>Shop by Category</h5>
                <Link className='link link-accent' to='/categories'>See All</Link>
            </div>
            {
                isLoading ?
                    <Loading></Loading>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-4 mx-auto items-center'>
                        {categories?.map(category => <Category key={category._id} category={category}></Category>).slice(0, 4)}
                    </div>
            }

        </div>
    );
};

export default Categories;