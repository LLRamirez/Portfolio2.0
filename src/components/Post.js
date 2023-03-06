import Link from 'next/link'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';


export default function Post({post}) {
    return (
        <div className=''>
           <div className='container px-5 py-10 mx-auto'>
    <div className='pb-4'>
        <h3 className='font-semibold text-2xl'>{post.frontmatter.title}</h3>
        <div>
            <Image src={post.frontmatter.cover_image} width={500} height={500} alt='cover image'/>
            </div>

        <div className='flex-col text-left pt-2'>
            <div className='post-date'>Posted on {post.frontmatter.date}</div>
            <p>{post.frontmatter.excerpt}</p>
            
            <div className='mt-2'>
                <a href={`/blog/${post.slug}`} className="font-bold rounded" variant="primary">Read More</a>
            </div>
        </div>
    </div>
</div>
</div>
    )
}