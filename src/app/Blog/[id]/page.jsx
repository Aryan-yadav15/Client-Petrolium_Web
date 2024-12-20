import React from 'react';
import { ChevronLeft, Calendar, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { blogs } from '@/app/lib/blog';
import Image from 'next/image';

const BlogPost = ({ params }) => {
  const { id } = params;
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <ChevronLeft size={16} />
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" >
        <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" />
        </div>
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-30">
        <Card className="mb-8 animate-slide-up shadow-xl">
          <CardContent className="p-8">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <Avatar className="h-12 w-12">
                <AvatarImage src={blog.author?.avatar} />
                <AvatarFallback>
                  {blog.author?.name?.charAt(0) || 'A'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{blog.author?.name || 'Anonymous'}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date || 'No date'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime || '5 min read'}
                  </span>
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="outline" size="sm" className="flex gap-1">
                  <Share2 size={16} />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex gap-1">
                  <BookmarkPlus size={16} />
                  Save
                </Button>
              </div>
            </div>

            {/* Tags */}
            {blog.tags && (
              <div className="flex gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-xl leading-relaxed mb-8 text-gray-700">
              {blog.description}
            </p>

            {/* Content Sections */}
            {blog.subheaders?.map((subheader, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {subheader.title}
                </h2>
              </div>
            ))}

            {/* Paragraphs */}
            {blog.paragraphs?.map((paragraph, index) => (
              <div key={index} className="mb-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  {paragraph.text}
                  {paragraph.buttonText && (
                    <Button
                      variant="link"
                      id={paragraph.buttonId}
                      className="px-2 h-auto"
                    >
                      {paragraph.buttonText}
                    </Button>
                  )}
                  {paragraph.link && (
                    <a
                      href={paragraph.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      {paragraph.link.text}
                    </a>
                  )}
                </p>
              </div>
            ))}

            {/* Content List */}
            {blog.content && (
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <ul className="space-y-4">
                  {blog.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">
                        {item.text}
                        {item.buttonText && (
                          <Button
                            variant="link"
                            id={item.buttonId}
                            className="px-2 h-auto"
                          >
                            {item.buttonText}
                          </Button>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return blogs.map(blog => ({
    id: blog.id.toString(),
  }));
}

export default BlogPost;