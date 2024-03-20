import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-utils";
import Head from "next/head";

export default function PostDetailPage(props) {
    return <Fragment>
        <Head>
            <title>{props.post.title} | Danish's Blogs </title>
            <meta name="description" content={props.post.excerpt} />
        </Head>
        <PostContent postData={props.post} />
    </Fragment>
}

export function getStaticPaths() {
    const postFilenames = getPostFiles()

    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export const getStaticProps = (context) => {

    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}