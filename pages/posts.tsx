import fetch from 'isomorphic-fetch';
import { NextPageContext } from 'next';

const posts = ({ posts }: ListProps) => {
    return (
        <div className="test">
            <table className="table">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {posts?.map( (post, i) => {
                    return (
                    <tr key={i}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export interface ListProps {
    posts: Post[] | undefined,
}

export interface Post {
    userId: number,
    id: number,
    title: string,
}


export async function getInitialProps(context: NextPageContext) {
    console.log('conxtet =========> ',context.query, context.pathname)
    if(!context.req) {
        return { posts: [] }
    }
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    return {
      props: { posts: data }, // will be passed to the page component as props
    }
}
export default posts;
