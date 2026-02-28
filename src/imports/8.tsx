import svgPaths from "./svg-6wn9oyjbo2";
import imgEllipse18 from "figma:asset/6b95d007c278b8132369d55f7c491640aac3cde7.png";
import imgScreenshot20260225234204RemovebgPreview1 from "figma:asset/03c1c018d224ec5a01ab9f8f28a8b6410bbea367.png";
import imgImage16 from "figma:asset/4288eba4e59501551064d664f4ceb9271d6c9f13.png";

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
        <p className="leading-[1.3]">My Vehicles</p>
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
    <div className="absolute bg-white left-[890px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
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
    <div className="absolute bg-white left-[842px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
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
    <div className="absolute bg-white h-[96px] left-[254px] overflow-clip top-0 w-[1184px]" data-name="Header">
      <Profile />
      <div className="absolute flex h-[40px] items-center justify-center left-[938px] top-[28px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "22" } as React.CSSProperties}>
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
            <path d={svgPaths.p2ecb09a0} fill="var(--fill-0, #D72322)" id="grid-web-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center ml-[32px] mt-[2px] relative row-1 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">My Vehicles</p>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="taxi">
        <div className="absolute inset-[9.38%]" data-name="taxi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2b700bf0} fill="var(--fill-0, white)" id="taxi" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Maintenance</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="tool">
        <div className="absolute inset-[12.5%]" data-name="tool">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9991 18">
            <path d={svgPaths.pffa8800} fill="var(--fill-0, #D72322)" id="tool" />
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
            <path d={svgPaths.p1b0f4300} fill="var(--fill-0, #D72321)" id="calendar" />
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
            <path d={svgPaths.p1c8f5000} fill="var(--fill-0, #D72321)" id="settings" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start leading-[0] left-[46px] top-[217px]">
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
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[256px]" />
      <div className="absolute bg-[#d72321] h-[56px] left-[30px] rounded-[10px] top-[265px] w-[196px]" />
      <Frame />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[44px] top-[39px]">
      <div className="absolute h-[85px] left-[68px] top-[39px] w-[106px]" data-name="Screenshot_2026-02-25_234204-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260225234204RemovebgPreview1} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Black',sans-serif] font-black justify-center leading-[0] left-[44px] text-[#db2225] text-[24px] top-[141.5px] whitespace-nowrap">
        <p className="leading-[1.3]">GEARHOUSE</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[40px] size-full" data-name="8">
      <Header />
      <Group6 />
      <div className="absolute bg-[#f5eded] h-[762px] left-[302px] rounded-[4px] top-[202px] w-[1088px]" data-name="Background" />
      <div className="absolute bg-[#d72321] content-stretch flex h-[56px] items-center justify-center left-[1266px] px-[20px] py-[8px] rounded-[4px] top-[136px]" data-name="Button">
        <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.3px] whitespace-nowrap">
          <p className="leading-[1.5]">+ Add Vehicle</p>
        </div>
      </div>
      <Group7 />
      <div className="absolute h-[751px] left-[378px] top-[213px] w-[932px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}