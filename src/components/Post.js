import Link from 'next/link'
import Image from 'next/image'

export default function Post({post}) {
    return (
        <div className='card'>
        
            <Image src={post.frontmatter.cover_image} width={500} height={200} alt='cover image'/>
        
            <div className='post-date'>Posted on {post.frontmatter.date}</div>
            
            <h3>{post.frontmatter.title}</h3>
            
            <p>{post.frontmatter.excerpt}</p>
            
            <Link href={`/blog/${post.slug}`}
                
            />
        
    </div>

    )
}