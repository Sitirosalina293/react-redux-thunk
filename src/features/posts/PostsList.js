import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostsSlice";
import Spinners from '../../component/spiner';

const PostsList = () => {
    const allPosts = useSelector((state) => state.posts.entities)
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.posts.loading)

    const doFetchPosts = () => {
        dispatch(fetchPosts())
    }

    return(
        <div className="container">
            <h1 className="fw-bold">POST</h1>
            <button className="btn btn-success" onClick={ doFetchPosts }>Get Post</button>
            <table className="table table-striped mt-4">
                <thead className="table-dark">
                    <tr>
                        <th className="title">Title</th>
                        <th className="content">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPosts.map((post =>(
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
            <div>
                {loading && <Spinners/>}
            </div>
        </div>
    )
}
export default PostsList