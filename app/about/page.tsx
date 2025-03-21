// app/about/page.js
"use client"; // Added if you plan client-side features later

import {
  SiNextdotjs,
  SiDjango,
  SiSqlite,
  SiVercel,
  SiMarkdown,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons"; // Switched to your preferred package

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto">
      {" "}
      {/* Added max-width for consistency */}
      <section className="my-12 pb-8 border-b border-gray-200">
        <h1 className="text-3xl font-bold mb-4 capitalize">about</h1>
        <p className="text-lg leading-relaxed">
          Hi there! I am Joe, a software developer from Tanzania who loves to
          build things with modern web technologies.
        </p>
      </section>
      <section className="pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold mb-4 capitalize">who am i</h2>
        <div className=" leading-relaxed space-y-4">
          {" "}
          <p>
            I am a full-stack engineer from Tanzania, specializing in TypeScript
            and Python development. My journey in programming began in 2019 as a
            self-taught developer, learning from amazing educators on YouTube
            like{" "}
            <a
              href="https://www.youtube.com/@CoreySchafer"
              className="text-orange-600 hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Corey Schafer
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@TraversyMedia"
              className="text-orange-600 hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Traversy Media
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@programmingwithmosh"
              className="text-orange-600 hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codewithmosh
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@developedbyed"
              className="text-orange-600 hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevelopedByEd
            </a>
            , and{" "}
            <a
              href="https://www.youtube.com/@NetNinja"
              className="text-orange-600 hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              NetNinja
            </a>
            .
          </p>
          <div className="mt-4">
            <p>My technical expertise includes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Building web applications with Next.js</li>
              <li>Developing mobile applications with React Native (Expo)</li>
              <li>Database management</li>
              <li>Linux systems and Docker containerization</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>My non-technical expertise includes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Effective communication</li>
              <li>Problem-solving</li>
              <li>Teamwork</li>
              <li>Time management</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-12 pb-8">
        <h2 className="text-2xl font-bold mb-4 capitalize">About This Site</h2>
        <ul className="space-y-3">
          {[
            { label: "Framework", value: "Next.js", icon: SiNextdotjs },
            { label: "Backend", value: "Django", icon: SiDjango },
            { label: "Database", value: "SQLite", icon: SiSqlite },
            { label: "Deployment", value: "Vercel, Deploy.tz", icon: SiVercel },
            { label: "Content", value: "Markdown", icon: SiMarkdown },
            { label: "Styling", value: "TailwindCSS", icon: SiTailwindcss },
          ].map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className="font-medium w-24">{item.label}:</span>
              <div className="flex items-center gap-2">
                <span>{item.value}</span>
                <item.icon color="#6B7280" size={20} />{" "}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
