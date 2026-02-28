import svgPaths from "./svg-hju2zymbja";
import imgEllipse18 from "figma:asset/6b95d007c278b8132369d55f7c491640aac3cde7.png";
import imgScreenshot20260225234204RemovebgPreview1 from "figma:asset/03c1c018d224ec5a01ab9f8f28a8b6410bbea367.png";

function Avatar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
        <img alt="" className="absolute block max-w-none size-full" height="48" src={imgEllipse18} width="48" />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="Text">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#04091e] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5]">Cody Fisher</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#747681] text-[12px]">
        <p className="leading-[1.6]">Owner</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center leading-[0] right-[48px] top-[24px]" data-name="Profile">
      <Avatar />
      <Text />
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]" data-name="Search">
      <div className="absolute inset-[-4.26%_-4.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7006 19.1201">
          <g id="Search">
            <circle cx="8.98951" cy="8.98951" id="Ellipse_739" r="8.23951" stroke="var(--stroke-0, #04091E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1df76100} id="Line_181" stroke="var(--stroke-0, #04091E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Name">
      <div className="relative shrink-0 size-[22px]" data-name="Search">
        <Search1 />
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747681] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Search...</p>
      </div>
    </div>
  );
}

function Command1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="command">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="command">
          <path d={svgPaths.p2b6b6f00} id="Vector" stroke="var(--stroke-0, #323B49)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Command() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Command">
      <Command1 />
      <div className="flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323b49] text-[16px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">K</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex h-[48px] items-center justify-between left-[335px] p-[16px] rounded-[12px] top-[24px] w-[412px]" data-name="Search">
      <Name />
      <Command />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[48px] top-[20px] whitespace-nowrap" data-name="Text">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#04091e] text-[24px]">
        <p className="leading-[1.3]">Maintenance</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#747681] text-[14px]">
        <p className="leading-[1.6]">Let’s check your Garage today</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-4.17%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5001 19.5">
          <g id="Group">
            <path d={svgPaths.p25ec53a0} id="Vector" stroke="var(--stroke-0, #04091E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2b4ea840} id="Vector_2" stroke="var(--stroke-0, #04091E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bg-white left-[1437px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
      <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="bell">
        <Group />
      </div>
      <div className="absolute left-[27px] size-[8px] top-[14px]" data-name="Skeleton">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2871)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2871" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
                <stop stopColor="#FCAD02" />
                <stop offset="1" stopColor="#FF0041" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute bg-white left-[1389px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
      <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="sparkle">
        <div className="absolute inset-[10.58%_10.42%_10.41%_10.41%]" data-name="sparkle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.002 18.9608">
            <path d={svgPaths.p1fafa0c0} fill="var(--fill-0, #25314C)" id="sparkle" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[28px] size-[8px] top-[14px]" data-name="Skeleton">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2871)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2871" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
                <stop stopColor="#FCAD02" />
                <stop offset="1" stopColor="#FF0041" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[96px] left-[254px] overflow-clip top-0 w-[1747px]" data-name="Header">
      <Profile />
      <div className="absolute flex h-[40px] items-center justify-center left-[938px] top-[28px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Divider" stroke="var(--stroke-0, #F5F5F5)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Search />
      <Text1 />
      <Icon />
      <Icon1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Dashboard</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="grid-web-7">
        <div className="absolute inset-[16.67%]" data-name="grid-web-7">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p2ecb09a0} fill="var(--fill-0, #D92323)" id="grid-web-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">My Vehicles</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="taxi">
        <div className="absolute inset-[9.38%]" data-name="taxi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2b700bf0} fill="var(--fill-0, #D6231F)" id="taxi" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center ml-[32px] mt-[2px] relative row-1 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Maintenance</p>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="tool">
        <div className="absolute inset-[12.5%]" data-name="tool">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9991 18">
            <path d={svgPaths.pffa8800} fill="var(--fill-0, white)" id="tool" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Bookings</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="calendar">
        <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="calendar">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.75">
            <path d={svgPaths.p1b0f4300} fill="var(--fill-0, #D72226)" id="calendar" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Settings</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="settings">
        <div className="absolute inset-[12.5%]" data-name="settings">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1c8f5000} fill="var(--fill-0, #D72324)" id="settings" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[310.078px] items-start leading-[0] left-[46px] top-[240.31px]">
      <Group4 />
      <Group5 />
      <Group3 />
      <Group2 />
      <Group1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[1134px] left-0 top-0 w-[256px]" />
      <div className="absolute bg-[#d72226] h-[62.016px] left-[30px] rounded-[10px] top-[364.34px] w-[196px]" />
      <Frame />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[51px] top-[29px]">
      <div className="absolute h-[85px] left-[75px] top-[29px] w-[106px]" data-name="Screenshot_2026-02-25_234204-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260225234204RemovebgPreview1} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Black',sans-serif] font-black justify-center leading-[0] left-[51px] text-[#db2225] text-[24px] top-[131.5px] whitespace-nowrap">
        <p className="leading-[1.3]">GEARHOUSE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px] whitespace-pre-wrap">Total Logs</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[30px] w-[81.2px]">
        <p className="leading-[36px] whitespace-pre-wrap">1,248</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container6 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#22c55e] text-[12px] w-[24.92px]">
        <p className="leading-[16px] whitespace-pre-wrap">12%</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px] whitespace-pre-wrap">Active Alerts</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#d72323] text-[30px] w-[39.19px]">
        <p className="leading-[36px] whitespace-pre-wrap">42</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] w-[42.13px]">
        <p className="leading-[16px] whitespace-pre-wrap">Critical</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px] whitespace-pre-wrap">Completed (YTD)</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[30px] w-[73px]">
        <p className="leading-[36px] whitespace-pre-wrap">1,184</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2940cd80} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px] whitespace-pre-wrap">AI-Predicted (30d)</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[30px] w-[31.61px]">
        <p className="leading-[36px] whitespace-pre-wrap">15</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p11c2d500} fill="var(--fill-0, #D72323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border" style={{ backgroundImage: "linear-gradient(165.85deg, rgb(255, 255, 255) 0%, rgb(254, 242, 242) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[21px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[97px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Search history...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[11px] pl-[41px] pr-[17px] pt-[10px] relative w-full">
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-[13.16%] content-stretch flex flex-col items-start left-[12px] top-[13.16%]" data-name="Container">
      <div className="relative shrink-0 size-[13.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[34px] items-end justify-center left-0 overflow-clip pl-[93px] pr-[9px] py-[8px] top-0 w-[120px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function Container25() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] overflow-clip pr-[28.77px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#27272a] text-[12px] w-[65.23px]">
        <p className="leading-[16px] whitespace-pre-wrap">All Vehicles</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-[#fafafa] h-[34px] min-w-[120px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill />
      <Container25 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M5.4 7.2L9 10.8L12.6 7.2" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[34px] items-end justify-center left-0 overflow-clip pl-[93px] pr-[9px] py-[8px] top-0 w-[120px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[13px] overflow-clip pr-[19.62px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#27272a] text-[12px] w-[74.38px]">
        <p className="leading-[16px] whitespace-pre-wrap">Service Type</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-[#fafafa] h-[34px] min-w-[120px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill1 />
      <Container26 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[#e4e4e7] h-[24px] shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[14px] relative shrink-0 w-[10.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14">
        <g id="Container">
          <path d={svgPaths.p37341980} fill="var(--fill-0, #52525B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container27 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] text-center w-[38.69px]">
        <p className="leading-[16px] whitespace-pre-wrap">Export</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p1e40bff0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#d72323] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Container28 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[71.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">Add Service</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Options />
        <Options1 />
        <Margin />
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container20 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[239.64px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[1px] uppercase w-[49.95px]">
          <p className="leading-[normal] whitespace-pre-wrap">Vehicle</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[1px] uppercase w-[83.73px]">
          <p className="leading-[normal] whitespace-pre-wrap">Service Type</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[148.39px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[1px] uppercase w-[30.14px]">
          <p className="leading-[normal] whitespace-pre-wrap">Date</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[148.06px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[1px] uppercase w-[45.39px]">
          <p className="leading-[normal] whitespace-pre-wrap">Status</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[1px] uppercase w-[32.25px]">
          <p className="leading-[normal] whitespace-pre-wrap">Cost</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[284.53px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] tracking-[1px] uppercase w-[39.31px]">
          <p className="leading-[normal] whitespace-pre-wrap">Notes</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#fafafa] mb-[-1px] relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-px pr-[85.63px] relative w-full">
          <Cell />
          <Cell1 />
          <Cell2 />
          <Cell3 />
          <Cell4 />
          <Cell5 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#d72323] text-[10px] text-center w-[14.16px]">
        <p className="leading-[normal] whitespace-pre-wrap">TH</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[84.88px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Toyota Hilux</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...238842</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.88px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[191.64px]" data-name="Data">
      <Background />
      <Container30 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-start px-[9px] py-[5px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fee2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#d72323] text-[10px] uppercase w-[79.83px]">
        <p className="leading-[normal] whitespace-pre-wrap">Brake Change</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[21.5px] relative shrink-0 w-[222.86px]" data-name="Data">
      <BackgroundBorder4 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[75.02px]">
        <p className="leading-[16px] whitespace-pre-wrap">Oct 20, 2023</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#d72323] text-[10px] uppercase w-[48.03px]">
        <p className="leading-[normal] whitespace-pre-wrap">Overdue</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-[#d72323] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container33 />
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[59.11px]">
        <p className="leading-[20px] whitespace-pre-wrap">$350.00</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#d72323] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-white w-[22.73px]">
        <p className="leading-[normal] whitespace-pre-wrap">HIGH</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[120px] overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[119.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">Critical safety chec…</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0 w-[236.53px]" data-name="Data">
      <Background1 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container35 />
    </div>
  );
}

function Data6() {
  return (
    <div className="content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative shrink-0 w-[85.63px]" data-name="Data">
      <Button2 />
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] relative w-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
          <Data5 />
          <Data6 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[16.72px]">
        <p className="leading-[normal] whitespace-pre-wrap">MC</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[84.38px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Mazda CX-5</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...552910</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.38px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background2 />
        <Container36 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[62.08px]">
        <p className="leading-[normal] whitespace-pre-wrap">Oil Change</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background3 />
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[74.88px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 28, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container39 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[52.78px]">
          <p className="leading-[20px] whitespace-pre-wrap">$115.00</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[163.77px]">
          <p className="leading-[16px] whitespace-pre-wrap">Regular synthetic oil change.</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container40 />
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button3 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data7 />
          <Data8 />
          <Data9 />
          <Data10 />
          <Data11 />
          <Data12 />
          <Data13 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[14.88px]">
        <p className="leading-[normal] whitespace-pre-wrap">HC</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[83.97px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Honda CR-V</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...991204</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.02px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background4 />
        <Container41 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[123.56px]">
        <p className="leading-[normal] whitespace-pre-wrap">Battery Replacement</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background5 />
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[74.75px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 26, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container44 />
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[56.22px]">
          <p className="leading-[20px] whitespace-pre-wrap">$210.00</p>
        </div>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[191.47px]">
          <p className="leading-[16px] whitespace-pre-wrap">New heavy-duty battery installed.</p>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container45 />
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data14 />
          <Data15 />
          <Data16 />
          <Data17 />
          <Data18 />
          <Data19 />
          <Data20 />
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[12.42px]">
        <p className="leading-[normal] whitespace-pre-wrap">SF</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[109.69px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Subaru Forester</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...443321</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[109.69px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background6 />
        <Container46 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[75.63px]">
        <p className="leading-[normal] whitespace-pre-wrap">Tire Rotation</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background7 />
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[74.52px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 25, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#ea580c] text-[10px] uppercase w-[27.89px]">
        <p className="leading-[normal] whitespace-pre-wrap">Open</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#f97316] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container49 />
      </div>
    </div>
  );
}

function Data25() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[49.8px]">
          <p className="leading-[20px] whitespace-pre-wrap">$65.00</p>
        </div>
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[88.55px]">
          <p className="leading-[16px] whitespace-pre-wrap">Pending arrival.</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container50 />
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data21 />
          <Data22 />
          <Data23 />
          <Data24 />
          <Data25 />
          <Data26 />
          <Data27 />
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[12.44px]">
        <p className="leading-[normal] whitespace-pre-wrap">FR</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[82.77px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Ford Ranger</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...119203</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.02px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background8 />
        <Container51 />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[62.08px]">
        <p className="leading-[normal] whitespace-pre-wrap">Oil Change</p>
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background9 />
      </div>
    </div>
  );
}

function Data30() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[72.56px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 12, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data31() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container54 />
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[56.22px]">
          <p className="leading-[20px] whitespace-pre-wrap">$120.00</p>
        </div>
      </div>
    </div>
  );
}

function Data33() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[106.7px]">
          <p className="leading-[16px] whitespace-pre-wrap">Synthetic oil swap.</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container55 />
    </div>
  );
}

function Data34() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button6 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data28 />
          <Data29 />
          <Data30 />
          <Data31 />
          <Data32 />
          <Data33 />
          <Data34 />
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[17.84px]">
        <p className="leading-[normal] whitespace-pre-wrap">VW</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[81.72px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">VW Amarok</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...884721</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.02px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Data35() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background10 />
        <Container56 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[109.48px]">
        <p className="leading-[normal] whitespace-pre-wrap">Transmission Fluid</p>
      </div>
    </div>
  );
}

function Data36() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background11 />
      </div>
    </div>
  );
}

function Data37() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[72.59px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 10, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data38() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container59 />
      </div>
    </div>
  );
}

function Data39() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[58.78px]">
          <p className="leading-[20px] whitespace-pre-wrap">$245.00</p>
        </div>
      </div>
    </div>
  );
}

function Data40() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[138.38px]">
          <p className="leading-[16px] whitespace-pre-wrap">Standard flush and refill.</p>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container60 />
    </div>
  );
}

function Data41() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button7 />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data35 />
          <Data36 />
          <Data37 />
          <Data38 />
          <Data39 />
          <Data40 />
          <Data41 />
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[15.03px]">
        <p className="leading-[normal] whitespace-pre-wrap">NC</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[106.09px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Nissan Casqhai</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...330912</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[106.09px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Data42() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background12 />
        <Container61 />
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[63.17px]">
        <p className="leading-[normal] whitespace-pre-wrap">Brake Pads</p>
      </div>
    </div>
  );
}

function Data43() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background13 />
      </div>
    </div>
  );
}

function Data44() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[74.86px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 05, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data45() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container64 />
      </div>
    </div>
  );
}

function Data46() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[55.86px]">
          <p className="leading-[20px] whitespace-pre-wrap">$185.00</p>
        </div>
      </div>
    </div>
  );
}

function Data47() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[116.86px]">
          <p className="leading-[16px] whitespace-pre-wrap">Front pads replaced.</p>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container65 />
    </div>
  );
}

function Data48() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button8 />
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data42 />
          <Data43 />
          <Data44 />
          <Data45 />
          <Data46 />
          <Data47 />
          <Data48 />
        </div>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[13.55px]">
        <p className="leading-[normal] whitespace-pre-wrap">HE</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[108.44px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Hyundai Elantra</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...667123</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108.44px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Data49() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background14 />
        <Container66 />
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[60.75px]">
        <p className="leading-[normal] whitespace-pre-wrap">Alignment</p>
      </div>
    </div>
  );
}

function Data50() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[22.5px] relative w-full">
        <Background15 />
      </div>
    </div>
  );
}

function Data51() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[75.33px]">
          <p className="leading-[16px] whitespace-pre-wrap">Oct 02, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data52() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container69 />
      </div>
    </div>
  );
}

function Data53() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[49.8px]">
          <p className="leading-[20px] whitespace-pre-wrap">$95.00</p>
        </div>
      </div>
    </div>
  );
}

function Data54() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[162.73px]">
          <p className="leading-[16px] whitespace-pre-wrap">Four wheel alignment check.</p>
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container70 />
    </div>
  );
}

function Data55() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button9 />
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data49 />
          <Data50 />
          <Data51 />
          <Data52 />
          <Data53 />
          <Data54 />
          <Data55 />
        </div>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[13.27px]">
        <p className="leading-[normal] whitespace-pre-wrap">TA</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[96.98px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Toyota Avalon</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...112288</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96.98px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Data56() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background16 />
        <Container71 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-start px-[9px] py-[5px] relative rounded-[4px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fee2e2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#d72323] text-[10px] uppercase w-[75.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Engine Check</p>
      </div>
    </div>
  );
}

function Data57() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[21.5px] relative w-full">
        <BackgroundBorder5 />
      </div>
    </div>
  );
}

function Data58() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[25px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[76.89px]">
          <p className="leading-[16px] whitespace-pre-wrap">Sep 28, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#d72323] text-[10px] uppercase w-[48.03px]">
        <p className="leading-[normal] whitespace-pre-wrap">Overdue</p>
      </div>
    </div>
  );
}

function Data59() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#d72323] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container74 />
      </div>
    </div>
  );
}

function Data60() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[59.64px]">
          <p className="leading-[20px] whitespace-pre-wrap">$420.00</p>
        </div>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#d72323] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-white w-[22.73px]">
        <p className="leading-[normal] whitespace-pre-wrap">HIGH</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[120px] overflow-clip pr-[1.16px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[118.84px]">
        <p className="leading-[16px] whitespace-pre-wrap">Diagnostics pendin…</p>
      </div>
    </div>
  );
}

function Data61() {
  return (
    <div className="relative shrink-0 w-[236.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.01px] items-center relative w-full">
        <Background17 />
        <Container75 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container76 />
    </div>
  );
}

function Data62() {
  return (
    <div className="relative shrink-0 w-[85.63px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[20.5px] relative w-full">
        <Button10 />
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data56 />
          <Data57 />
          <Data58 />
          <Data59 />
          <Data60 />
          <Data61 />
          <Data62 />
        </div>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-center w-[14.2px]">
        <p className="leading-[normal] whitespace-pre-wrap">KC</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[82.39px]">
        <p className="leading-[17.5px] whitespace-pre-wrap">Kia Carnival</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[11px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[10px] w-[84.02px]">
        <p className="leading-[normal] whitespace-pre-wrap">VIN: ...774411</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.02px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Data63() {
  return (
    <div className="relative shrink-0 w-[191.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background18 />
        <Container77 />
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] uppercase w-[65.16px]">
        <p className="leading-[normal] whitespace-pre-wrap">Brake Fluid</p>
      </div>
    </div>
  );
}

function Data64() {
  return (
    <div className="relative shrink-0 w-[222.86px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22px] pt-[22.5px] px-[24px] relative w-full">
        <Background19 />
      </div>
    </div>
  );
}

function Data65() {
  return (
    <div className="relative shrink-0 w-[124.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24.5px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-[76.53px]">
          <p className="leading-[16px] whitespace-pre-wrap">Sep 25, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#16a34a] text-[10px] uppercase w-[62.61px]">
        <p className="leading-[normal] whitespace-pre-wrap">Completed</p>
      </div>
    </div>
  );
}

function Data66() {
  return (
    <div className="relative shrink-0 w-[100.06px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative w-full">
        <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container80 />
      </div>
    </div>
  );
}

function Data67() {
  return (
    <div className="relative shrink-0 w-[127.89px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[22.5px] pt-[22px] px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-[48.72px]">
          <p className="leading-[20px] whitespace-pre-wrap">$75.00</p>
        </div>
      </div>
    </div>
  );
}

function Data68() {
  return (
    <div className="relative shrink-0 w-[260.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24.5px] pr-[24px] pt-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[118.86px]">
          <p className="leading-[16px] whitespace-pre-wrap">Annual maintenance.</p>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container81 />
    </div>
  );
}

function Data69() {
  return (
    <div className="relative shrink-0 w-[61.64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[20px] pt-[20.5px] px-[24px] relative w-full">
        <Button11 />
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center pl-[24px] pt-px relative w-full">
          <Data63 />
          <Data64 />
          <Data65 />
          <Data66 />
          <Data67 />
          <Data68 />
          <Data69 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Table />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p10965ac0} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <Container82 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[12px] text-center w-[51.31px]">
          <p className="leading-[16px] whitespace-pre-wrap">Previous</p>
        </div>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#d72323] content-stretch flex items-center justify-center pb-[7px] pt-[6px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[4.31px]">
        <p className="leading-[15px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7px] pt-[6px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] text-center w-[6.31px]">
        <p className="leading-[15px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7px] pt-[6px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] text-center w-[6.47px]">
        <p className="leading-[15px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[7px] pt-[6px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[10px] text-center w-[6.77px]">
        <p className="leading-[15px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Background20 />
        <Container84 />
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #18181B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[12px] text-center w-[27.59px]">
          <p className="leading-[16px] whitespace-pre-wrap">Next</p>
        </div>
        <Container87 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(250,250,250,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pt-[17px] px-[16px] relative w-full">
          <Button12 />
          <Container83 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container29 />
        <OverlayHorizontalBorder />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15.843px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8431 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e15b80} fill="var(--fill-0, #D72323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[10px] tracking-[1px] uppercase w-[71.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">AI Insights</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container90 />
        <Heading />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[9px] uppercase w-full">
          <p className="leading-[13.5px] whitespace-pre-wrap">Next Maintenance</p>
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3f3f46] text-[12px] w-full">
          <p className="whitespace-pre-wrap">
            <span className="leading-[16px]">{`Service in `}</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic text-[#d72323]">1,240 km</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fee2e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start p-[13px] relative w-full">
        <Container91 />
        <Container92 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[8px] uppercase w-full">
        <p className="leading-[12px] whitespace-pre-wrap">Est. Cost</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">$540.00</p>
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container94 />
        <Container95 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[8px] uppercase w-full">
        <p className="leading-[12px] whitespace-pre-wrap">Confidence</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">92%</p>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center relative size-full">
        <Background21 />
        <Background22 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#d72323] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[8px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.5px] uppercase w-[113.14px]">
          <p className="leading-[15px] whitespace-pre-wrap">Optimize Schedule</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#d72323] border-l-6 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[26px] pr-[20px] py-[20px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.17px_0] rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container89 />
        <BackgroundBorder6 />
        <Container93 />
        <Button14 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[10px] tracking-[1px] uppercase w-[64.16px]">
          <p className="leading-[15px] whitespace-pre-wrap">Upcoming</p>
        </div>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#d72323] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-white w-[50.33px]">
          <p className="leading-[12px] whitespace-pre-wrap">30D Window</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Heading1 />
          <Background23 />
        </div>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[14.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6667">
        <g id="Container">
          <path d={svgPaths.p371ab7c0} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#27272a] text-[12px] w-[74.84px]">
        <p className="leading-[15px] whitespace-pre-wrap">Tire Rotation</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[9px] w-[55.69px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">Nov 15, 2023</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[74.84px]" data-name="Container">
      <Container103 />
      <Container104 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background24 />
      <Container102 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[8px] relative shrink-0 w-[4.933px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93333 8">
        <g id="Container">
          <path d={svgPaths.p39c06800} fill="var(--fill-0, #D4D4D8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[13.667px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.6667">
        <g id="Container">
          <path d={svgPaths.p3c33dc0} fill="var(--fill-0, #A1A1AA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container107 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#27272a] text-[12px] w-[80.48px]">
        <p className="leading-[15px] whitespace-pre-wrap">Coolant Flush</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1aa] text-[9px] w-[57.92px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">Dec 02, 2023</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80.48px]" data-name="Container">
      <Container109 />
      <Container110 />
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Background25 />
        <Container108 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[8px] relative shrink-0 w-[4.933px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93333 8">
        <g id="Container">
          <path d={svgPaths.p39c06800} fill="var(--fill-0, #D4D4D8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-solid border-t inset-0 pointer-events-none" />
      <Container106 />
      <Container111 />
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Container99 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <BackgroundHorizontalBorder1 />
        <Container98 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[12.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 16.6667">
        <g id="Container">
          <path d={svgPaths.p13f13580} fill="var(--fill-0, #D72323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[10px] tracking-[1px] uppercase w-[109.48px]">
        <p className="leading-[15px] whitespace-pre-wrap">Maintenance Tip</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container113 />
        <Heading2 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#52525b] text-[12px] w-full whitespace-pre-wrap">
          <p className="leading-[19.5px] mb-0">Check tire pressure monthly to improve fuel</p>
          <p className="mb-0">
            <span className="leading-[19.5px]">{`efficiency by up to `}</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] not-italic text-[#d72323]">3%</span>
            <span className="leading-[19.5px]">. Correct inflation also</span>
          </p>
          <p className="leading-[19.5px]">increases tire lifespan significantly.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.17px_0] rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container112 />
        <Container114 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.958px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9583 20">
        <g id="Container">
          <path d={svgPaths.p28ddb400} fill="var(--fill-0, #D72323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[10px] tracking-[1px] uppercase w-[115px]">
        <p className="leading-[15px] whitespace-pre-wrap">Need Assistance?</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container116 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#18181b] text-[18px] tracking-[0.9px] w-[178.44px]">
          <p className="leading-[28px] whitespace-pre-wrap">1-800-GEAR-HELP</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center px-px py-[9px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f4f4f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container118 />
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p2a4a7600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#d72323] content-stretch flex gap-[8px] items-center justify-center py-[10px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
      <Container119 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[109.41px]">
        <p className="leading-[16px] whitespace-pre-wrap">Call Roadside Help</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <BackgroundBorder9 />
        <Button15 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_20px_-2px_rgba(0,0,0,0.05)]" data-name="Overlay+Shadow" />
        <Container115 />
        <Container117 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[320px]" data-name="Container">
      <BackgroundVerticalBorder />
      <BackgroundBorderShadow1 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[32px] h-[795.333px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <Container88 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[270px] p-[32px] top-[96px] w-[1675px]" data-name="Container">
      <Container1 />
      <Container19 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[40px] size-full" data-name="9">
      <Header />
      <Group6 />
      <Group7 />
      <Container />
    </div>
  );
}