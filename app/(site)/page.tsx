import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Project } from "@/types/Project";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-6xl font-extrabold ">
        Greetings, everyone! <br />
        I&apos;m{" "}
        <span className="bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent ">
          Oleh
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Welcome to my portfolio website! Here are my latest projects
      </p>
      <h2 className="mt-24 font-bold text-grey-700 text-3xl">My projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 mr-5 mb-2 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={3000}
                height={3000}
                className="object-cover rounded-lg border border-gray-500 max-h-projectImage"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
