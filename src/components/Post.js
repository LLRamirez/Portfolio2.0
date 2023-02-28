import Link from 'next/link'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';


export default function Post({post}) {
    return (
        <div className='card pb-4'>
         <h3 className='font-semibold text-2xl'>{post.frontmatter.title}</h3>
        <div className='flex justify-center'>
            <Image src={post.frontmatter.cover_image} width={500} height={500} alt='cover image'/>
            </div>

<div className='flex-col text-left pt-2'>
            <div className='post-date'>Posted on {post.frontmatter.date}</div>
            
           
            
            <p>{post.frontmatter.excerpt}</p>
{/*             
            <Link href={`/blog/${post.slug}`}>
             Read More   
            </Link> */}
            <div className='mt-2'>
            <Button href={`/blog/${post.slug}`} className="font-bold rounded" variant="primary">Read More</Button>
            </div>
             </div>
    </div>

    )
}