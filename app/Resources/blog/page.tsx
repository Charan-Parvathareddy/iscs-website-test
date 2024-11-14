"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { blogPosts } from '@/lib/blog-data';
import type { BlogPost } from '@/lib/blog-data';

const BlogCard = ({ post }: { post: BlogPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              ref={containerRef}
              className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
            >
              <button
                className="absolute top-4 right-4 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5 text-white dark:text-black" />
              </button>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <div className="mt-6 prose dark:prose-invert">
                  <p>{post.excerpt}</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    asChild
                    className="bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
                  >
                    <Link href={`/Resources/blog/${post.id}`}>
                      Read Full Article
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <Button onClick={() => setIsOpen(true)}>
            Know More
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}