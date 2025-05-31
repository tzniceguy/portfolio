import {
  SiNextdotjs,
  SiDjango,
  SiSqlite,
  SiVercel,
  SiMarkdown,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

export default function Page() {
  return (
      <main className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="my-16 pb-12">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg blur opacity-20"></div>
            <div className="relative  rounded-lg p-8 shadow-sm border ">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 capitalize">
                About
              </h1>
              <p className="text-xl leading-relaxed">
                Hi there! I am <span className="font-semibold">Joe</span>, a software developer from Tanzania who loves to
                build things with modern  technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Who Am I Section */}
        <section className="pb-16">
          <div className="bg-gradient-to-br rounded-xl p-8 shadow-sm border ">
            <h2 className="text-3xl font-bold mb-8 capitalize flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
              Who Am I
            </h2>

            <div className="leading-relaxed space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg">
                  I am a full-stack engineer from Tanzania, specializing in TypeScript
                  and Python development. My journey in programming began in 2019 as a
                  self-taught developer, learning from amazing educators on YouTube like{" "}
                  <a
                      href="https://www.youtube.com/@CoreySchafer"
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 underline decoration-orange-200 hover:decoration-orange-400"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Corey Schafer
                  </a>
                  ,{" "}
                  <a
                      href="https://www.youtube.com/@TraversyMedia"
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 underline decoration-orange-200 hover:decoration-orange-400"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Traversy Media
                  </a>
                  ,{" "}
                  <a
                      href="https://www.youtube.com/@programmingwithmosh"
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 underline decoration-orange-200 hover:decoration-orange-400"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Codewithmosh
                  </a>
                  ,{" "}
                  <a
                      href="https://www.youtube.com/@developedbyed"
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 underline decoration-orange-200 hover:decoration-orange-400"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    DevelopedByEd
                  </a>
                  , and{" "}
                  <a
                      href="https://www.youtube.com/@NetNinja"
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 underline decoration-orange-200 hover:decoration-orange-400"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    NetNinja
                  </a>
                  .
                </p>
              </div>

              {/* Technical Skills */}
              <div className="rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Building web applications with Next.js",
                    "Developing mobile applications with React Native (Expo)",
                    "Creating backend systems with Django, Elysia and NestJS",
                    "Writing clean, maintainable code in TypeScript and Python",
                    "Management of cloud infrastructure",
                    "Linux systems and Docker containerization"
                  ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg ">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{skill}</span>
                      </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="rounded-lg p-6 shadow-sm border ">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-6 h-6  rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                  Non-Technical Expertise
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Effective communication",
                    "Problem-solving",
                    "Teamwork",
                    "Time management"
                  ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 p-3  rounded-lg">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="pb-16">
          <div className=" rounded-xl p-8 shadow-sm border">
            <h2 className="text-3xl font-bold mb-8 capitalize flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              About This Site
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Framework", value: "Next.js", icon: SiNextdotjs, color: "#374151" },
                { label: "Backend", value: "Django", icon: SiDjango, color: "#059669" },
                { label: "Database", value: "SQLite", icon: SiSqlite, color: "#0369a1" },
                { label: "Deployment", value: "Vercel", icon: SiVercel, color: "#7c3aed" },
                { label: "Content", value: "Markdown", icon: SiMarkdown, color: "#dc2626" },
                { label: "Styling", value: "TailwindCSS", icon: SiTailwindcss, color: "#0891b2" },
              ].map((item) => (
                  <div
                      key={item.label}
                      className="e rounded-lg p-6 shadow-sm border  hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2  rounded-lg group-hover:bg-gray-100 transition-colors duration-200">
                        <item.icon color={item.color} size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-medium opacity-70">{item.label}</div>
                        <div className="text-lg font-semibold">{item.value}</div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
