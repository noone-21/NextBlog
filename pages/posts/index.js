import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";

export default function AllPostsPage(props) {

    return <Fragment>
        <Head>
            <title>All Posts | Danish's Blogs </title>
            <meta name="description" content="Browse All Programming and Web Development related blog posts." />
        </Head>
        <AllPosts posts={props.posts} />
    </Fragment>

}

export const getStaticProps = () => {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        },
        // revalidate : 3000
    }
}