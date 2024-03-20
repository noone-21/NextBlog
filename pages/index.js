import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from '../lib/posts-utils'
import Head from "next/head";

export default function HomePage(props) {

    return <Fragment>
        <Head>
            <title>Danish's Blogs</title>
            <meta name="description" content="Explore latest Blogs about Web Development and it's Frameworks like ReactJs and NextJs" />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
    </Fragment>

}

export const getStaticProps = ()=>{
    const featuredPosts = getFeaturedPosts()

    return {
        props : {
            posts: featuredPosts
        },
        // revalidate : 3000
    }
}