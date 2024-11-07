import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const isDiabeticRetinopathy = title === "Diabetic Retinopathy Detection G-Nayana";

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link
        href={isDiabeticRetinopathy ? (href || "#") : "#"}
        className={cn("block", className, {
          "pointer-events-none": !isDiabeticRetinopathy,
        })}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none h-32 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-32 w-full object-cover object-top pointer-events-none"
          />
        )}
      </Link>
      <CardHeader className="px-2 py-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-semibold">{title}</CardTitle>
          <time className="text-xs text-muted-foreground">{dates}</time>
          <Markdown className="prose max-w-full text-xs text-muted-foreground dark:prose-invert line-clamp-2">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 py-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {links?.map((link, idx) => (
              <Link
                href={isDiabeticRetinopathy ? link?.href : "#"}
                key={idx}
                target="_blank"
                className={cn("flex items-center gap-1 px-1.5 py-0.5 text-[10px]", {
                  "opacity-50 pointer-events-none": !isDiabeticRetinopathy,
                })}
              >
                <Badge className="flex items-center gap-1">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}