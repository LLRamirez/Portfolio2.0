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

  return (
    <main class="font-link text-gray-400 bg-gray-900 body-font overflow-hidden">
      <About/>
      <Projects/>
      <Skills/>
     
      <div className="yahGreen m-auto flex flex-col items-cemter">
        <div>
          <div>
              <p className="sm:text-3xl text-xl font-medium text-white text-center mb-4 pt-8">Wax On | Wax 0ff</p>
          </div>
          <div className="rounded p-1">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
    </div>
      
      <Photography/>
      <Contact/>
    </main>
  );
}

export async function getStaticProps(){
  
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {

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