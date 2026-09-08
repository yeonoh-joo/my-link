import Image from "next/image";

export default function Home() {
  const profile = {
    name: "주연오",
    engName: "Yeonoh Joo",
    role: "Software Developer",
    tagline: "문제를 정의하고 코드로 가치를 만드는 개발자",
    bio: "새로운 기술을 탐구하고 사용자에게 유의미한 경험을 제공하는 소프트웨어를 만듭니다. Next.js와 최신 AI 도구를 활용한 효율적인 개발 흐름에 관심이 많습니다.",
    avatarUrl: "https://avatars.githubusercontent.com/u/188141192?v=4",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    links: [
      {
        title: "GitHub 저장소 둘러보기",
        url: "https://github.com/yeonoh-joo",
        icon: "💻",
        subtitle: "@yeonoh-joo",
      },
      {
        title: "이메일로 연락하기",
        url: "mailto:jooyeonoh3526777@gmail.com",
        icon: "✉️",
        subtitle: "jooyeonoh3526777@gmail.com",
      },
      {
        title: "개발 블로그 (준비 중)",
        url: "#",
        icon: "📝",
        subtitle: "학습 기록 및 기술 아카이브",
      },
      {
        title: "포트폴리오 (준비 중)",
        url: "#",
        icon: "🚀",
        subtitle: "진행했던 프로젝트 모음",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-16 px-4 flex flex-col items-center justify-center font-sans">
      <main className="w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col items-center text-center">
        {/* 프로필 이미지 영역 */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={100}
            height={100}
            className="relative rounded-full border-2 border-white dark:border-zinc-800 object-cover shadow-sm"
            priority
          />
        </div>

        {/* 이름 및 직무 */}
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          {profile.name}
          <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
            ({profile.engName})
          </span>
        </h1>
        <span className="mt-1 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/60 rounded-full border border-blue-200 dark:border-blue-800/50">
          {profile.role}
        </span>

        {/* 한 줄 슬로건 & 소개글 */}
        <p className="mt-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
          &ldquo;{profile.tagline}&rdquo;
        </p>
        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs">
          {profile.bio}
        </p>

        {/* 기술 스택 태그 */}
        <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-xs">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 링크 목록 */}
        <div className="mt-6 w-full flex flex-col gap-3">
          {profile.links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full p-3.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 rounded-2xl flex items-center justify-between transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] group shadow-sm hover:shadow"
            >
              <div className="flex items-center gap-3 text-left">
                <span className="text-xl p-1.5 bg-white dark:bg-zinc-700 rounded-xl shadow-xs">
                  {link.icon}
                </span>
                <div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {link.subtitle}
                  </div>
                </div>
              </div>
              <span className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-transform text-xs">
                →
              </span>
            </a>
          ))}
        </div>

        {/* 푸터 */}
        <footer className="mt-8 text-[11px] text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
