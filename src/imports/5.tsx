import svgPaths from "./svg-60ijqf2qe1";
import imgOutputOnlinepngtools174 from "figma:asset/a0ac121ac4fee91fa2284bb4805fbf05e53f6b16.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.25] relative shrink-0 text-[#111827] text-[32px] w-full">Create new password</p>
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#718096] text-[18px] w-full">Please enter a new password. Your new password must be different from previous password.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80px]">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 20">
          <g id="Frame 1">
            <circle cx="6" cy="10" fill="var(--fill-0, #04091E)" id="dot" r="6" />
            <circle cx="26" cy="10" fill="var(--fill-0, #04091E)" id="dot_2" r="6" />
            <circle cx="46" cy="10" fill="var(--fill-0, #04091E)" id="dot_3" r="6" />
            <circle cx="66" cy="10" fill="var(--fill-0, #04091E)" id="dot_4" r="6" />
            <line id="line" stroke="var(--stroke-0, #0CAF60)" strokeLinecap="round" x1="80.5" x2="80.5" y1="0.5" y2="19.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-4.17%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 19.5">
          <g id="Group">
            <path d="M1.75 0.75L19.75 18.75" id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p111cde40} id="Vector_2" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3f275c80} id="Vector_3" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-4.17%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 19.5">
          <g id="Group">
            <path d="M1.75 0.75L19.75 18.75" id="Vector" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p111cde40} id="Vector_2" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3f275c80} id="Vector_3" stroke="var(--stroke-0, #A0AEC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Input">
      <div className="h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#009aba] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
            <Frame />
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="eye-off">
              <Group />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="flex flex-[1_0_0] flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#a0aec0] text-[16px] tracking-[0.2px]">
              <p className="leading-[1.5] whitespace-pre-wrap">Confirm new password</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="eye-off">
              <Group1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentReset() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content Reset">
      <Input />
      <div className="bg-[#d72322] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <div className="flex flex-col font-['Outfit:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.3px] whitespace-nowrap">
              <p className="leading-[1.5]">Reset Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewPassword() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[40px] items-start left-1/2 p-[40px] rounded-[12px] top-[253px] w-[552px]" data-name="New Password">
      <Text />
      <ContentReset />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#d72322] overflow-clip relative rounded-[40px] size-full" data-name="5">
      <NewPassword />
      <div className="absolute h-[82px] left-[calc(33.33%+24px)] top-[97px] w-[396px]" data-name="output-onlinepngtools (17) 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools174} />
      </div>
    </div>
  );
}