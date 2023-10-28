import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import {getDogs, reset} from '../features/dogs/dogSlice'
import DogItem from '../components/DogItem'


function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
  const { dogs, isLoading, isError, message } = useSelector(
    (state) => state.dogs
  )


    useEffect(() => {
        if(isError){
            console.log(message)
        }

        if(!user){
            navigate('/login')
        }

        dispatch(getDogs())
        return() => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])
    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Your dogs</p>
            </section>
            <section className="content">
                    <div className="dog">
                        {dogs.map((dogs) => (
                            <DogItem key={dogs._id} dog={dogs}/>
                        ))}
                    </div>
            </section>
        </>
    )
}

export default Dashboard
