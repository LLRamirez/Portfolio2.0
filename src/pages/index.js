import React from "react";
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Photography from "../components/Photography";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils';
import Post from "@/components/Post";


export default function App({posts}) {

  console.log('posts MMMM', posts)

  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      <About/>
      <Projects/>
      <Skills/>
      <Photography/>
     
      <div className="posts">
      <div>
          <p className="sm:text-3xl text-2xl font-medium text-white text-center mb-4 pt-8">Blog</p>
        </div>
      <div>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        </div>
      </div>

      <Contact/>
    </main>
  );
}

export async function getStaticProps(){
  

  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
  
  
    console.log('filesss', files)

    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
        'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}