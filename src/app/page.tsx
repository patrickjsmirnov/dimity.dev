import { Card } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <div className="flex flex-col items-center max-w-[670px]">
        <Card>
          <>
            <div className="flex items-center mb-6">
              <Image
                src="/avatar.png"
                width={180}
                height={180}
                alt="avatar"
                className="mr-5"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold mb-3">Dmitry Smirnov</h1>
                <p className="text-xl">Senior Frontend Engineer</p>
              </div>
            </div>
            <p>
              I am a dedicated Frontend Engineer with over 7 years of experience
              in building high-performance web applications. My expertise
              includes <span className="font-semibold">TypeScript</span>,{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Next.js</span>,{" "}
              <span className="font-semibold">Node.js</span>, and a variety of
              other modern web technologies.
            </p>
          </>
        </Card>
      </div>
    </main>
  );
}
