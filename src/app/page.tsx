import React from "react";
import Image from "next/image";

interface ChannelItem {
  id: string;
  number: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  tags: string[];
  themeColor: string;
  badgeBg: string;
  accentBorder: string;
  threadColor: string;
  imageSrc: string;
  popularVideo: {
    id: string;
    title: string;
  };
}

export default function Home() {
  const channels: ChannelItem[] = [
    {
      id: "mongsweets",
      number: "No. 01",
      name: "몽중다과Mongsweets",
      handle: "@mongsweets",
      url: "https://youtube.com/@mongsweets",
      description: "클레이와 레진 등으로 음식과 디저트 모형을 만드는 채널.",
      tags: ["#클레이아트", "#디저트모형", "#금손"],
      themeColor: "#DE727F",
      badgeBg: "#FDF0F2",
      accentBorder: "rgba(222, 114, 127, 0.45)",
      threadColor: "text-[#C95361]",
      imageSrc: "/images/mongsweets.jpg",
      popularVideo: {
        id: "PlvmAtd0Qyc",
        title: "Probably The Most Amazing Hot Pot You’ve Ever Seen",
      },
    },
    {
      id: "eueu_land",
      number: "No. 02",
      name: "으으냥",
      handle: "@eueu_land",
      url: "https://youtube.com/@eueu_land",
      description: "시골 마을의 길고양이와 구조한 고양이들을 돌보는 일상을 담은 채널.",
      tags: ["#시골고양이", "#고양이대식구", "#생생한동물영상"],
      themeColor: "#5E8C61",
      badgeBg: "#EEF5EF",
      accentBorder: "rgba(94, 140, 97, 0.45)",
      threadColor: "text-[#48734B]",
      imageSrc: "/images/eueu.jpg",
      popularVideo: {
        id: "HgAM1Wt7CVI",
        title: "그날 이후 모든 것이 달라졌다.",
      },
    },
    {
      id: "sanago",
      number: "No. 03",
      name: "사나고 Sanago",
      handle: "@sanago",
      url: "https://youtube.com/@sanago",
      description: "3D펜으로 캐릭터 피규어와 다양한 소품을 만드는 채널.",
      tags: ["#3D펜장인", "#고퀄리티피규어", "#금손"],
      themeColor: "#4F749B",
      badgeBg: "#EFF5FB",
      accentBorder: "rgba(79, 116, 155, 0.45)",
      threadColor: "text-[#3B5B7D]",
      imageSrc: "/images/sanago.png",
      popularVideo: {
        id: "sV6SiHEmWm4",
        title: "1/10 크기로 마인크래프트 만들기",
      },
    },
    {
      id: "miniforest",
      number: "No. 04",
      name: "Mini Forest 미니포레스트",
      handle: "@miniforest5508",
      url: "https://youtube.com/@miniforest5508",
      description: "작은 조리도구와 식재료로 실제 먹을 수 있는 미니어처 요리를 만드는 채널.",
      tags: ["#미니어쳐한옥", "#미니어쳐요리", "#정교한배경"],
      themeColor: "#8C6843",
      badgeBg: "#F9F4EC",
      accentBorder: "rgba(140, 104, 67, 0.45)",
      threadColor: "text-[#705232]",
      imageSrc: "/images/miniforest.jpg",
      popularVideo: {
        id: "7G1XdFk85lI",
        title: "가을 임산물 한 상🍂 | 미니어처 요리",
      },
    },
    {
      id: "smartmandoo",
      number: "No. 05",
      name: "교양만두",
      handle: "@smartmandoo",
      url: "https://youtube.com/@smartmandoo?si=kKCichipYhGdD5V0",
      description: "역사, 문화, 일상 속 궁금증을 그림과 이야기로 풀어내는 교양 채널.",
      tags: ["#B급교양", "#상식과역사", "#재치있는스토리"],
      themeColor: "#D97724",
      badgeBg: "#FDF5ED",
      accentBorder: "rgba(217, 119, 36, 0.45)",
      threadColor: "text-[#BA5F12]",
      imageSrc: "/images/smartmandoo.png",
      popularVideo: {
        id: "gNP-sU5baYQ",
        title: "조선시대로 회귀하면 생기는 일｜현대인이 조선에서 단 하루도 살 수 없는 이유",
      },
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* 상단: 프랑스 자수 수틀(Embroidery Hoop) 감성의 헤더 */}
      <header className="w-full text-center mb-12 sm:mb-16 relative">
        {/* 장식용 자수 바늘과 실 그래픽 */}
        <div className="flex items-center justify-center gap-2 mb-3 text-[#A89885]">
          <span className="w-10 h-px border-b border-dashed border-[#B8A995]" />
          <span className="text-xs tracking-widest uppercase font-mono px-2 py-0.5 rounded-full bg-[#F3ECE1] text-[#7A6A55] border border-[#DFD3C1]">
            Channel Archive
          </span>
          <span className="w-10 h-px border-b border-dashed border-[#B8A995]" />
        </div>

        {/* 린넨 패치에 수놓은 듯한 메인 타이틀 */}
        <div className="inline-block relative">
          {/* 모서리 자수 프렌치 너트 장식 */}
          <span className="absolute -top-3 -left-3 w-2.5 h-2.5 rounded-full bg-[#DE727F] opacity-75 shadow-sm" />
          <span className="absolute -top-3 -right-3 w-2.5 h-2.5 rounded-full bg-[#5E8C61] opacity-75 shadow-sm" />
          <span className="absolute -bottom-3 -left-3 w-2.5 h-2.5 rounded-full bg-[#4F749B] opacity-75 shadow-sm" />
          <span className="absolute -bottom-3 -right-3 w-2.5 h-2.5 rounded-full bg-[#BC7B32] opacity-75 shadow-sm" />

          <div className="bg-[#FFFDF9] px-8 sm:px-12 py-5 rounded-3xl stitch-border hoop-shadow relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2E271F] font-serif-custom flex items-center justify-center gap-3">
              <span className="text-[#DE727F] text-xl sm:text-2xl">🪡</span>
              유튜브 채널 추천
              <span className="text-[#5E8C61] text-xl sm:text-2xl">🧵</span>
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-[#6E6152] font-medium">
              특별히 엄선한 유튜브 채널 모음
            </p>
          </div>
        </div>

        {/* 상단 린넨 밑단 러닝 스티치 라인 */}
        <div className="mt-6 flex items-center justify-center gap-3 text-[#C8BCAC]">
          <svg width="180" height="12" viewBox="0 0 180 12" fill="none">
            <line x1="0" y1="6" x2="180" y2="6" stroke="#D1C5B5" strokeWidth="2" strokeDasharray="5 4" />
            <circle cx="90" cy="6" r="3" fill="#DE727F" />
            <circle cx="45" cy="6" r="2.5" fill="#5E8C61" />
            <circle cx="135" cy="6" r="2.5" fill="#4F749B" />
          </svg>
        </div>
      </header>

      {/* 메인: 4개 추천 채널 리스트 (가로로 길어진 와이드 상자 & 온전한 16:9 영상 비율) */}
      <main className="w-full flex flex-col gap-8">
        {channels.map((channel) => (
          <article
            key={channel.id}
            className="group relative bg-[#FFFDF9] rounded-3xl overflow-hidden hoop-shadow transition-all duration-300 hover:-translate-y-1 flex flex-col lg:flex-row items-stretch"
            style={{
              border: `2px dashed ${channel.accentBorder}`,
            }}
          >
            {/* 카드 상단 우측 원목 단추 장식 디테일 */}
            <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 pointer-events-none">
              <div className="w-5 h-5 rounded-full bg-[#EADDCB] border border-[#CFBFAB] flex items-center justify-center shadow-inner">
                <div className="w-2.5 h-2.5 flex flex-wrap justify-between p-0.5">
                  <span className="w-0.5 h-0.5 rounded-full bg-[#8C7A65]" />
                  <span className="w-0.5 h-0.5 rounded-full bg-[#8C7A65]" />
                  <span className="w-0.5 h-0.5 rounded-full bg-[#8C7A65]" />
                  <span className="w-0.5 h-0.5 rounded-full bg-[#8C7A65]" />
                </div>
              </div>
            </div>

            {/* 좌측 면: 채널 소개 정보 (대표 사진 + 채널명 + 설명 + 태그 + 하단 계정/버튼) */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* 상단: 대표 사진 엽서 패치 & 채널 타이틀 */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-dashed border-[#D4C7B5] bg-[#F5EFE6] shadow-xs">
                    <Image
                      src={channel.imageSrc}
                      alt={channel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="80px"
                    />
                  </div>

                  <div>
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1 border"
                      style={{
                        backgroundColor: channel.badgeBg,
                        borderColor: channel.accentBorder,
                        color: channel.themeColor,
                      }}
                    >
                      {channel.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#2A231C] font-serif-custom leading-tight">
                      {channel.name}
                    </h2>
                  </div>
                </div>

                {/* 채널 소개 문구 */}
                <p className="text-[#554A3E] text-sm sm:text-[15px] leading-relaxed mb-4 max-w-xl">
                  {channel.description}
                </p>

                {/* 자수 태그 모음 */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {channel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[#F5EFE6] text-[#695C4D] border border-[#E5DAC8] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 하단 영역: 원래 자리의 계정 아이디(@handle) + 채널 바로가기 직조 라벨 버튼 */}
              <div className="pt-4 border-t border-dashed border-[#E8DEC8] flex items-center justify-between">
                <span className="text-xs text-[#9B8C7A] font-mono">
                  {channel.handle}
                </span>

                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="patch-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-sm"
                  style={{
                    backgroundColor: channel.themeColor,
                  }}
                >
                  <span>채널 바로가기</span>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 우측 면: 스케치대로 상자의 한 쪽 면 전체를 꽉 채우는 16:9 와이드 영상 영역 */}
            <div className="w-full lg:w-[540px] xl:w-[600px] p-3 sm:p-4.5 bg-[#F7F2E9]/60 lg:border-l lg:border-dashed lg:border-[#E8DEC8] flex flex-col justify-center shrink-0">
              <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-[#665747]">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: channel.themeColor }}
                />
                <span>추천 대표 영상</span>
              </div>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-[#D8CEBE] bg-black/5 shadow-sm">
                <iframe
                  src={`https://www.youtube.com/embed/${channel.popularVideo.id}`}
                  title={channel.popularVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* 하단 푸터: 실타래와 마무리 장식 */}
      <footer className="mt-16 sm:mt-20 text-center text-xs text-[#8C7D6B] flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-[#C8BCAC]">
          <span className="w-8 h-px border-b border-dashed border-[#C8BCAC]" />
          <span>주연오의 마이링크</span>
          <span className="w-8 h-px border-b border-dashed border-[#C8BCAC]" />
        </div>
        <p className="text-[#A39583]">
          Here are some YouTube channel recommendations for you.
        </p>
      </footer>
    </div>
  );
}
