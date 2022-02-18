import { createContext, useReducer } from "react"
import GithubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {

    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //Fetch All Users
    // const fetchUsers = async () => {
    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}/users`)
    //     const data = await response.json()
    //     // setUsers(data)
    //     // setLoading(false)
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,
    //     })
    // }

    //Search Users
    const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text
        })

        setLoading()
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        // const data = await response.json()
        const { items } = await response.json()
        // setUsers(data)
        // setLoading(false)
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    //Search Single User
    const getUser = async (login) => {

        setLoading()
        const response = await fetch(`${GITHUB_URL}/users?${login}`)
        // const data = await response.json()

        if (response.status === 404) {

            window.location = '/notfound'
        } else {

            const data = await response.json()
            // setUsers(data)
            // setLoading(false)
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }

    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            searchUsers,
            clearUsers,
            getUser,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext