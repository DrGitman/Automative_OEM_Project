import svgPaths from "./svg-0168h2iyl5";
import imgEllipse18 from "figma:asset/6b95d007c278b8132369d55f7c491640aac3cde7.png";
import imgEllipse32 from "figma:asset/b93ba4b2421283a8aa2b8a98b5f6770bfa85270f.png";
import imgIntersect from "figma:asset/d3db66cd72b8fcac4c7ae9c01794d2874218ec74.png";
import imgIntersect1 from "figma:asset/ca92e2682e1ccdade852726ae18a101bf8fea453.png";
import imgIntersect2 from "figma:asset/028bb5c5865616c48472fa87f33cfcbb486e27b3.png";
import imgIntersect3 from "figma:asset/025536c8448edecd125e9dc46312b1ff9cb8c4ff.png";
import imgIntersect4 from "figma:asset/f32632fe424e584ce8de0b488bb4b9d25973c3f5.png";
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
        <p className="leading-[1.3]">Settings</p>
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
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2766)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2766" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
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
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2766)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2766" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
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

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Dashboard</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="grid-web-7">
        <div className="absolute inset-[16.67%]" data-name="grid-web-7">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p2ecb09a0} fill="var(--fill-0, #D62424)" id="grid-web-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">My Vehicles</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="taxi">
        <div className="absolute inset-[9.38%]" data-name="taxi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2b700bf0} fill="var(--fill-0, #D72324)" id="taxi" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Maintenance</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="tool">
        <div className="absolute inset-[12.5%]" data-name="tool">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9991 18">
            <path d={svgPaths.pffa8800} fill="var(--fill-0, #D62424)" id="tool" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center ml-[32px] mt-[2px] relative row-1 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Bookings</p>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="calendar">
        <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="calendar">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.75">
            <path d={svgPaths.p1b0f4300} fill="var(--fill-0, white)" id="calendar" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Settings</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="settings">
        <div className="absolute inset-[12.5%]" data-name="settings">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1c8f5000} fill="var(--fill-0, #D72325)" id="settings" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start leading-[0] left-[46px] top-[217px]">
      <Group18 />
      <Group19 />
      <Group17 />
      <Group16 />
      <Group15 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[256px]" />
      <Frame />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[56px] items-center p-[16px] relative rounded-[4px] shrink-0" data-name="Dropdown">
      <div className="flex flex-col font-['Outfit:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[0px] tracking-[0.3px] whitespace-nowrap">
        <p className="text-[16px]">
          <span className="font-['Urbanist:Medium',sans-serif] font-medium leading-[1.5] text-[#a0aec0] tracking-[0.2px]">Show:</span>
          <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5] tracking-[0.3px]">{` `}</span>
          <span className="font-['Urbanist:Bold',sans-serif] font-bold leading-[1.5] tracking-[0.3px]">All Orders</span>
        </p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
              <path d={svgPaths.p14416700} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_20.83%]" data-name="Group">
      <div className="absolute inset-[-4.17%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
          <g id="Group">
            <path d={svgPaths.p20d09680} id="Vector" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pf1dd480} id="Vector_2" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M7.75 8.75V14.75" id="Vector_3" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.pa7c5500} id="Vector_4" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="file-download">
        <Group1 />
      </div>
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Import</p>
      </div>
    </div>
  );
}

function Download() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center justify-between p-[16px] relative rounded-[4px] shrink-0 w-[153px]" data-name="Download">
      <Frame2 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
              <path d={svgPaths.p14416700} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[20.83%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5002 15.5">
          <g id="Group">
            <path d={svgPaths.p4e80f00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3d876d80} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Download1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[56px] items-center p-[16px] relative rounded-[4px] shrink-0" data-name="Download">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mail">
        <Group2 />
      </div>
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Email segment</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Action">
      <Download />
      <Download1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[302px] top-[136px] w-[1088px]" data-name="Actions">
      <Dropdown />
      <Action />
    </div>
  );
}

function Search2() {
  return (
    <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]" data-name="Search">
      <div className="absolute inset-[-3.9%_-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2643 20.722">
          <g id="Search">
            <circle cx="9.73856" cy="9.73856" id="Ellipse_739" r="8.98856" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p323d1bd8} id="Line_181" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute inset-[18.75%_16.67%_21.25%_16.67%]" data-name="Filter">
      <div className="absolute inset-[-5.21%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 15.9">
          <g id="Filter">
            <path d="M7.08016 12.8429H0.779439" id="Stroke 1" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.89048 3.15038H16.1912" id="Stroke 3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.peab2c80} fillRule="evenodd" id="Stroke 5" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p1e184fc0} fillRule="evenodd" id="Stroke 7" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] h-[56px] items-center p-[16px] relative rounded-[12px] shrink-0" data-name="Filters">
      <div className="relative shrink-0 size-[24px]" data-name="Filter">
        <Filter />
      </div>
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Filters</p>
      </div>
    </div>
  );
}

function Action1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[326px] top-[252px] w-[1040px]" data-name="Action">
      <div className="bg-[#f5f5f5] flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Input">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Search">
              <Search2 />
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#a0aec0] text-[16px] tracking-[0.2px]">
              <p className="leading-[1.5] whitespace-pre-wrap">Search by name, email, or others...</p>
            </div>
          </div>
        </div>
      </div>
      <Filters />
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex h-[72px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-7.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1665 13.5">
          <g id="Group">
            <path d="M9.4165 0.75V12.75" id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1f6f8500} id="Vector_2" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M2.75 12.75V0.75" id="Vector_3" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p38ee2200} id="Vector_4" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowsDownUp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows-down-up">
      <Group3 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Customer name</p>
      </div>
      <ArrowsDownUp />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-7.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1665 13.5">
          <g id="Group">
            <path d="M9.4165 0.75V12.75" id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1f6f8500} id="Vector_2" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M2.75 12.75V0.75" id="Vector_3" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p38ee2200} id="Vector_4" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowsDownUp1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows-down-up">
      <Group4 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Email</p>
      </div>
      <ArrowsDownUp1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-7.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1665 13.5">
          <g id="Group">
            <path d="M9.4165 0.75V12.75" id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1f6f8500} id="Vector_2" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M2.75 12.75V0.75" id="Vector_3" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p38ee2200} id="Vector_4" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowsDownUp2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows-down-up">
      <Group5 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Location</p>
      </div>
      <ArrowsDownUp2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-7.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1665 13.5">
          <g id="Group">
            <path d="M9.4165 0.75V12.75" id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1f6f8500} id="Vector_2" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M2.75 12.75V0.75" id="Vector_3" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p38ee2200} id="Vector_4" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowsDownUp3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows-down-up">
      <Group6 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.5]">Orders</p>
          </div>
          <ArrowsDownUp3 />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-7.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1665 13.5">
          <g id="Group">
            <path d="M9.4165 0.75V12.75" id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1f6f8500} id="Vector_2" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M2.75 12.75V0.75" id="Vector_3" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p38ee2200} id="Vector_4" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowsDownUp4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows-down-up">
      <Group7 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] tracking-[0.2px] whitespace-nowrap">
            <p className="leading-[1.5]">Spent</p>
          </div>
          <ArrowsDownUp4 />
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return <div className="rounded-[12px] shrink-0 size-[72px]" data-name="cell" />;
}

function Header1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex h-[80px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgEllipse32} width="40" />
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center leading-[0] p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <Avatar1 />
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Devon Lane</p>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">chieko@mail.com</p>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Philadelphia, USA</p>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">125 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">$101,345.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[16.67%_45.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
          <g id="Group">
            <path d={svgPaths.pad1cf00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pca93400} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32cd9cf0} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[72px]" data-name="cell">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[24px]" data-name="dots-vertical">
            <Group8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rows() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Rows">
      <Cell7 />
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
      <Cell12 />
      <Cell13 />
    </div>
  );
}

function Cell14() {
  return (
    <div className="content-stretch flex h-[80px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="col-1 h-[40px] ml-[3.6px] mt-0 relative row-1 w-[32.8px]" data-name="Intersect">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgIntersect} width="32.8" />
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center leading-[0] p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <Avatar2 />
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Kathryn Murphy</p>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">rohan_anna@mail.com</p>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Los Angeles, USA</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">11 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell19() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">$2,400.98</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[16.67%_45.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
          <g id="Group">
            <path d={svgPaths.pad1cf00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pca93400} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32cd9cf0} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[72px]" data-name="cell">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[24px]" data-name="dots-vertical">
            <Group9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rows1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Rows">
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
      <Cell20 />
    </div>
  );
}

function Cell21() {
  return (
    <div className="content-stretch flex h-[80px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="col-1 h-[38.6px] ml-[2px] mt-[1.4px] relative row-1 w-[36px]" data-name="Intersect">
        <img alt="" className="absolute block max-w-none size-full" height="38.6" src={imgIntersect1} width="36" />
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center leading-[0] p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <Avatar3 />
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Eleanor Pena</p>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">pedrohuar@mail.com</p>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Manhattan, USA</p>
      </div>
    </div>
  );
}

function Cell25() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">98 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell26() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">$56,987.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[16.67%_45.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
          <g id="Group">
            <path d={svgPaths.pad1cf00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pca93400} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32cd9cf0} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cell27() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[72px]" data-name="cell">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[24px]" data-name="dots-vertical">
            <Group10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rows2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Rows">
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
      <Cell25 />
      <Cell26 />
      <Cell27 />
    </div>
  );
}

function Cell28() {
  return (
    <div className="content-stretch flex h-[80px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="col-1 h-[34.4px] ml-0 mt-[5.6px] relative row-1 w-[40px]" data-name="Intersect">
        <img alt="" className="absolute block max-w-none size-full" height="34.4" src={imgIntersect2} width="40" />
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center leading-[0] p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <Avatar4 />
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Annette Black</p>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">eusebio234@mail.com</p>
      </div>
    </div>
  );
}

function Cell31() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Toronto, CA</p>
      </div>
    </div>
  );
}

function Cell32() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">51 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell33() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">$12,567.90</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[16.67%_45.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
          <g id="Group">
            <path d={svgPaths.pad1cf00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pca93400} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32cd9cf0} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cell34() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[72px]" data-name="cell">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[24px]" data-name="dots-vertical">
            <Group11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rows3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Rows">
      <Cell28 />
      <Cell29 />
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
      <Cell34 />
    </div>
  );
}

function Cell35() {
  return (
    <div className="content-stretch flex h-[80px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="col-1 h-[35.8px] ml-[0.4px] mt-[4.2px] relative row-1 w-[38px]" data-name="Intersect">
        <img alt="" className="absolute block max-w-none size-full" height="35.8" src={imgIntersect3} width="38" />
      </div>
    </div>
  );
}

function Cell36() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center leading-[0] p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <Avatar5 />
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Guy Hawkins</p>
      </div>
    </div>
  );
}

function Cell37() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">midgett245@mail.com</p>
      </div>
    </div>
  );
}

function Cell38() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Pittsburgh, USA</p>
      </div>
    </div>
  );
}

function Cell39() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">12 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell40() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">$4,670.44</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[16.67%_45.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
          <g id="Group">
            <path d={svgPaths.pad1cf00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pca93400} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32cd9cf0} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cell41() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[72px]" data-name="cell">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[24px]" data-name="dots-vertical">
            <Group12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rows4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Rows">
      <Cell35 />
      <Cell36 />
      <Cell37 />
      <Cell38 />
      <Cell39 />
      <Cell40 />
      <Cell41 />
    </div>
  );
}

function Cell42() {
  return (
    <div className="content-stretch flex h-[80px] items-center pl-[24px] relative rounded-[12px] shrink-0 w-[64px]" data-name="cell">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Avatar">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="col-1 h-[40px] ml-[2.8px] mt-0 relative row-1 w-[34.4px]" data-name="Intersect">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgIntersect4} width="34.4" />
      </div>
    </div>
  );
}

function Cell43() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center leading-[0] p-[12px] relative rounded-[12px] shrink-0 w-[275px]" data-name="cell">
      <Avatar6 />
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Floyd Miles</p>
      </div>
    </div>
  );
}

function Cell44() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[240px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">motgeoff@mail.com</p>
      </div>
    </div>
  );
}

function Cell45() {
  return (
    <div className="content-stretch flex h-[80px] items-center p-[12px] relative rounded-[12px] shrink-0 w-[190px]" data-name="cell">
      <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Montreal, CA</p>
      </div>
    </div>
  );
}

function Cell46() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">56 orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell47() {
  return (
    <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative rounded-[12px]" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#111827] text-[16px] tracking-[0.3px]">
            <p className="leading-[1.5] whitespace-pre-wrap">$24,456.56</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[16.67%_45.83%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
          <g id="Group">
            <path d={svgPaths.pad1cf00} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pca93400} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32cd9cf0} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Cell48() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0 w-[72px]" data-name="cell">
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[24px]" data-name="dots-vertical">
            <Group13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Rows5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Rows">
      <Cell42 />
      <Cell43 />
      <Cell44 />
      <Cell45 />
      <Cell46 />
      <Cell47 />
      <Cell48 />
    </div>
  );
}

function TableContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[302px] top-[332px] w-[1088px]" data-name="Table Content">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Header1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Rows5 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1088 1">
            <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="1087.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[68px]" data-name="number">
      <div aria-hidden="true" className="absolute border border-[#eeeff2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.6]">6</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
              <path d={svgPaths.p14416700} id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Result() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="result">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Show result:</p>
      </div>
      <Number />
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="number">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10%_-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d="M6 1L1 6L6 11" id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="number">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a0aec0] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">1</p>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[40px]" data-name="number">
      <div className="flex flex-col font-['Outfit:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#009aba] text-[14px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.6]">2</p>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="number">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a0aec0] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">3</p>
      </div>
    </div>
  );
}

function Number5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="number">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a0aec0] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">4</p>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="dot">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a0aec0] text-[14px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">...</p>
      </div>
    </div>
  );
}

function Number6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="number">
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#a0aec0] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">20</p>
      </div>
    </div>
  );
}

function Number7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="number">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[20px]" data-name="chevron-left">
            <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
              <div className="absolute inset-[-10%_-20%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                  <path d="M6 1L1 6L6 11" id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="pagination">
      <Number1 />
      <Number2 />
      <Number3 />
      <Number4 />
      <Number5 />
      <Dot />
      <Number6 />
      <Number7 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[326px] top-[916px] w-[1040px]" data-name="Pagination">
      <Result />
      <Pagination1 />
    </div>
  );
}

function CustomerLists() {
  return (
    <div className="absolute contents left-[302px] top-[228px]" data-name="Customer Lists">
      <div className="absolute bg-white h-[760px] left-[302px] rounded-[4px] top-[228px] w-[1088px]" data-name="Background" />
      <Action1 />
      <TableContent />
      <Pagination />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[302px] top-[136px]">
      <Actions />
      <CustomerLists />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[52px] top-[29px]">
      <div className="absolute h-[85px] left-[76px] top-[29px] w-[106px]" data-name="Screenshot_2026-02-25_234204-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260225234204RemovebgPreview1} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Black',sans-serif] font-black justify-center leading-[0] left-[52px] text-[#db2225] text-[24px] top-[131.5px] whitespace-nowrap">
        <p className="leading-[1.3]">GEARHOUSE</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[52px] top-[29px]">
      <Group27 />
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Dashboard</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="grid-web-7">
        <div className="absolute inset-[16.67%]" data-name="grid-web-7">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p2ecb09a0} fill="var(--fill-0, #DD2122)" id="grid-web-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">My Vehicles</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="taxi">
        <div className="absolute inset-[9.38%]" data-name="taxi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2b700bf0} fill="var(--fill-0, #DD2122)" id="taxi" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Maintenance</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="tool">
        <div className="absolute inset-[12.5%]" data-name="tool">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9991 18">
            <path d={svgPaths.pffa8800} fill="var(--fill-0, #DD2122)" id="tool" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Bookings</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="calendar">
        <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="calendar">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.75">
            <path d={svgPaths.p1b0f4300} fill="var(--fill-0, #DD2122)" id="calendar" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center ml-[32px] mt-[2px] relative row-1 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Settings</p>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="settings">
        <div className="absolute inset-[12.5%]" data-name="settings">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1c8f5000} fill="var(--fill-0, white)" id="settings" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start leading-[0] left-[46px] top-[217px]">
      <Group20 />
      <Group22 />
      <Group23 />
      <Group24 />
      <Group25 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[40px] size-full" data-name="10">
      <Header />
      <Group21 />
      <Group26 />
      <Group14 />
      <div className="absolute bg-[#dd2122] h-[56px] left-[30px] rounded-[10px] top-[457px] w-[196px]" />
      <Frame1 />
    </div>
  );
}