import svgPaths from "./svg-an1kyr4vip";
import imgEllipse18 from "figma:asset/6b95d007c278b8132369d55f7c491640aac3cde7.png";
import imgScreenshot20260225234204RemovebgPreview1 from "figma:asset/03c1c018d224ec5a01ab9f8f28a8b6410bbea367.png";
import imgEllipse32 from "figma:asset/b93ba4b2421283a8aa2b8a98b5f6770bfa85270f.png";

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
        <p className="leading-[1.3]">Bookings</p>
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

function Group10() {
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

function Group9() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[256px]" />
      <Group10 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[674px] left-[24px] top-[150px] w-[1486px]" data-name="Table">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1486 674">
        <g id="Table">
          <line id="Line 9" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="150.5" y2="150.5" />
          <line id="Line 10" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="252.5" y2="252.5" />
          <line id="Line 11" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="354.5" y2="354.5" />
          <line id="Line 12" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="456.5" y2="456.5" />
          <line id="Line 13" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="558.5" y2="558.5" />
          <line id="Line 17" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="660.5" y2="660.5" />
          <line id="Line 4" stroke="var(--stroke-0, #E6E8F0)" x1="146.5" x2="146.5" y1="2.18557e-08" y2="674" />
          <line id="Line 5" stroke="var(--stroke-0, #E6E8F0)" x1="336.5" x2="336.5" y1="2.18557e-08" y2="674" />
          <line id="Line 6" stroke="var(--stroke-0, #E6E8F0)" x1="526.5" x2="526.5" y1="2.18557e-08" y2="674" />
          <line id="Line 7" stroke="var(--stroke-0, #E6E8F0)" x1="716.5" x2="716.5" y1="2.18557e-08" y2="674" />
          <line id="Line 8" stroke="var(--stroke-0, #E6E8F0)" x1="906.5" x2="906.5" y1="2.18557e-08" y2="674" />
          <line id="Line 14" stroke="var(--stroke-0, #E6E8F0)" x1="1096.5" x2="1096.5" y1="2.18557e-08" y2="674" />
          <line id="Line 15" stroke="var(--stroke-0, #E6E8F0)" x1="1286.5" x2="1286.5" y1="2.18557e-08" y2="674" />
          <line id="Line 16" stroke="var(--stroke-0, #E6E8F0)" x1="1476.5" x2="1476.5" y1="2.18557e-08" y2="674" />
          <line id="Line 3" stroke="var(--stroke-0, #E6E8F0)" x1="143" x2="1486" y1="48.5" y2="48.5001" />
          <line id="Line 2" stroke="var(--stroke-0, #E6E8F0)" x2="1486" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Days() {
  return (
    <div className="absolute contents font-['Outfit:Bold',sans-serif] font-bold leading-[24px] left-[242px] text-[#081735] text-[16px] top-[102px]" data-name="Days">
      <p className="absolute left-[242px] top-[102px]">Mon 7</p>
      <p className="absolute left-[431px] top-[102px]">Tue 8</p>
      <p className="absolute left-[614px] top-[102px]">Wed 9</p>
      <p className="absolute left-[805px] top-[102px]">Thu 10</p>
      <p className="absolute left-[995px] top-[102px]">Fri 11</p>
      <p className="absolute left-[1194px] top-[102px]">Sat 12</p>
      <p className="absolute left-[1388px] top-[102px]">Sun 13</p>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute contents font-['Outfit:Medium',sans-serif] font-medium leading-[20px] left-[48px] text-[#081735] text-[14px] top-[186px]" data-name="Time">
      <p className="absolute left-[48px] top-[186px]">07.00 am</p>
      <p className="absolute left-[48px] top-[288px]">08.00 am</p>
      <p className="absolute left-[48px] top-[390px]">09.00 am</p>
      <p className="absolute left-[48px] top-[491px]">10.00 am</p>
      <p className="absolute left-[48px] top-[593px]">11.00 am</p>
      <p className="absolute left-[48px] top-[695px]">12.00 am</p>
      <p className="absolute left-[48px] top-[797px]">01.00 pm</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#d72325] content-stretch flex items-start left-[883px] px-[26px] py-[10px] rounded-[4px] shadow-[0px_8px_16px_0px_rgba(143,149,178,0.15)] top-[26px]">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white">Week</p>
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute contents left-[799px] top-[21px]" data-name="Slider">
      <div className="absolute bg-[#e9e9e9] inset-[2.55%_2.94%_91.5%_73.44%] rounded-[10px]" />
      <Frame1 />
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold inset-[4.37%_21.32%_93.2%_76.19%] leading-[20px] text-[14px] text-black">Day</p>
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold inset-[4.37%_5.33%_93.2%_90.81%] leading-[20px] text-[14px] text-black">Month</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute inset-[4.13%_93.7%_93.26%_4.5%]" data-name="Calendar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5001 21.5001">
        <g id="Calendar">
          <path clipRule="evenodd" d={svgPaths.p1c830cd0} fill="var(--fill-0, #D72325)" fillRule="evenodd" id="Combined-Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconlyLightOutlineCalendar() {
  return (
    <div className="absolute contents inset-[4.13%_93.7%_93.26%_4.5%]" data-name="Iconly/Light-Outline/Calendar">
      <Calendar />
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="absolute contents inset-[2.55%_73.16%_91.63%_3.22%]" data-name="Calendar icon">
      <div className="absolute inset-[2.55%_92.37%_91.63%_3.22%]">
        <div className="absolute inset-[-1.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
            <circle cx="24.5" cy="24.5" id="Ellipse 1" r="24" stroke="var(--stroke-0, #8F95B2)" />
          </svg>
        </div>
      </div>
      <IconlyLightOutlineCalendar />
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold inset-[4%_73.16%_93.08%_9.1%] leading-[24px] text-[#d72325] text-[18px]">Today, September 2021</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute contents left-[203px] top-[214px]" data-name="Avatar">
      <div className="absolute left-[203px] size-[40px] top-[214px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #D72325)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="absolute left-[203px] size-[40px] top-[214px]">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgEllipse32} width="40" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[191px] top-[206px]">
      <div className="absolute bg-[#d72325] h-[90px] left-[191px] rounded-[15px] top-[206px] w-[240px]" data-name="Base" />
      <Avatar1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[259px] text-[16px] text-white top-[234px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Devon Lane</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] left-[259px] text-[14px] text-white top-[263.5px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Vehicle Maintenance</p>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute contents left-[386px] top-[420px]" data-name="Avatar">
      <div className="absolute left-[386px] size-[40px] top-[420px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="absolute left-[386px] size-[40px] top-[420px]">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgEllipse32} width="40" />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[374px] top-[412px]">
      <div className="absolute bg-[#d72325] h-[90px] left-[374px] rounded-[15px] top-[412px] w-[240px]" data-name="Base" />
      <Avatar2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[442px] text-[16px] text-white top-[440px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Devon Lane</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] left-[442px] text-[14px] text-white top-[469.5px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Vehicle Maintenance</p>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute contents left-[767px] top-[316px]" data-name="Avatar">
      <div className="absolute left-[767px] size-[40px] top-[316px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #FDCF24)" id="Ellipse 22" r="20" />
        </svg>
      </div>
      <div className="absolute left-[767px] size-[40px] top-[316px]">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={imgEllipse32} width="40" />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[755px] top-[308px]">
      <div className="absolute bg-[#d72325] h-[90px] left-[755px] rounded-[15px] top-[308px] w-[240px]" data-name="Base" />
      <Avatar3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[823px] text-[16px] text-white top-[336px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Devon Lane</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] left-[823px] text-[14px] text-white top-[365.5px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Vehicle Maintenance</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[#db3939] left-[726px] overflow-clip rounded-[1000px] size-[48px] top-[22px]" data-name="Icon">
      <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="plus">
        <div className="absolute inset-[16.67%]" data-name="plus">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.pae52a00} fill="var(--fill-0, white)" id="plus" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[824px] left-[302px] overflow-clip top-[136px] w-[1088px]">
      <div className="absolute bg-white h-[824px] left-0 rounded-[4px] top-0 w-[1088px]" />
      <Table />
      <Days />
      <Time />
      <Slider />
      <CalendarIcon />
      <Group1 />
      <Group2 />
      <Group3 />
      <Icon2 />
    </div>
  );
}

function Group7() {
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

function Group8() {
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

function Group6() {
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

function Group5() {
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

function Group4() {
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
      <Group7 />
      <Group8 />
      <Group6 />
      <Group5 />
      <Group4 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[40px] size-full" data-name="11">
      <Header />
      <Group9 />
      <Frame2 />
      <div className="absolute bg-[#d72325] h-[56px] left-[30px] rounded-[10px] top-[393px] w-[196px]" />
      <Frame />
    </div>
  );
}