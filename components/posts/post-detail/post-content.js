import PostHeader from "./post-header";
import classes from './post-content.module.css'
import Image from "next/image"

import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import atomDark  from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js  from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css  from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)


export default function PostContent(props) {

  const { title, image, date, excerpt, content, slug, isFeatured } = props.postData


  const imagePath = `/images/posts/${slug}/${image}`

  const MarkdownComponents = {
    p: (paragraph) => {
      const { node } = paragraph;
  
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return <div className={classes.image} >
          <Image
            src={`/images/posts/${slug}/${image.properties.src}`}
            alt={image.alt}
            width={600}
            height={300} />
        </div>
      }
  
      return <p>{paragraph.children}</p>;
    },
    code(props) {
      const {children, className, node, ...rest} = props
      const match = /language-(\w+)/.exec(className || '')
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          language={match[1]}
          style={atomDark}
        />
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      )
    }
  }

  return <article className={classes.content} >
    <PostHeader title={title} image={imagePath} />
    <ReactMarkdown components={MarkdownComponents} >
      {content}
    </ReactMarkdown>
  </article>
}
