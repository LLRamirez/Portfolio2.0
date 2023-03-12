import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import marked from 'marked'
import { marked } from 'marked';
import Link from 'next/link'


export default function PostPage({frontmatter: {
    title, date, cover_image
}, slug, content}){
    return ( 
    <div className='p-8 flex justify-center bg-gray-900 yahGreen'>
    <div className=''>
        <div className='pb-6 text-blue'>
            <a href={`/`} className='btn btn-back pb-6'>Go Back</a>
        </div>
        <div className='card card-page'>
            <h1 className='text-2xl'>{title}</h1>
            <div className='post-date pb-6 text-sm'>Posted on {date}</div>
            <img src={cover_image} alt='cover-image' />
            <div className='pt-6'>
            <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
            </div>
        </div>
    </div>
  </div>
  )
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({

        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps({ params: { slug }}){

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data:frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}