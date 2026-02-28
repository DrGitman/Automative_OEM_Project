import svgPaths from "./svg-b64wl8h300";
import imgOutputOnlinepngtools173 from "figma:asset/a0ac121ac4fee91fa2284bb4805fbf05e53f6b16.png";

function Input1() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex h-[56px] items-center left-0 p-[16px] rounded-[8px] top-0 w-[235px]" data-name="Input">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#747681] text-[16px] tracking-[0.2px]">
        <p className="leading-[1.5] whitespace-pre-wrap">First name</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex h-[56px] items-center left-[251px] p-[16px] rounded-[8px] top-0 w-[235px]" data-name="Input">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#747681] text-[16px] tracking-[0.2px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Last name</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="absolute h-[56px] left-0 top-0 w-[486px]" data-name="Name">
      <Input1 />
      <Input2 />
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex h-[56px] items-center left-0 p-[16px] rounded-[8px] top-[80px] w-[486px]" data-name="Input">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#747681] text-[16px] tracking-[0.2px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Email</p>
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
            <path d="M1.75 0.75L19.75 18.75" id="Vector" stroke="var(--stroke-0, #747681)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p111cde40} id="Vector_2" stroke="var(--stroke-0, #747681)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3f275c80} id="Vector_3" stroke="var(--stroke-0, #747681)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex gap-[12px] h-[56px] items-center left-0 p-[16px] rounded-[8px] top-[160px] w-[486px]" data-name="Input">
      <div className="flex flex-[1_0_0] flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#747681] text-[16px] tracking-[0.2px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Password</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="eye-off">
        <Group />
      </div>
    </div>
  );
}

function Agree() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-[240px] w-[486px]" data-name="Agree">
      <div className="relative shrink-0 size-[20px]" data-name="check">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" id="checkbox/unchecked" r="9.5" stroke="var(--stroke-0, #CBD5E0)" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#04091e] text-[0px] tracking-[0.2px]">
        <p className="font-['Outfit:Medium',sans-serif] font-medium text-[16px] whitespace-pre-wrap">
          <span className="leading-[1.5]">{`By proceeding, you agree to the `}</span>
          <span className="leading-[1.5] text-[#ec221f]">Terms and Conditions</span>
        </p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="col-1 h-[264px] ml-0 mt-0 relative row-1 w-[486px]" data-name="Input">
      <Name />
      <Input3 />
      <Input4 />
      <Agree />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d72322] col-1 content-stretch flex h-[56px] items-center justify-center ml-0 mt-[296px] p-[8px] relative rounded-[8px] row-1 w-[486px]" data-name="Button">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.5]">Sign up with email</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Input />
      <Button />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 1">
                <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="147.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#718096] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[1.75]">Or Signup with</p>
      </div>
      <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 1">
                <line id="Divider" stroke="var(--stroke-0, #EEEFF2)" strokeLinecap="round" x1="0.5" x2="147.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonSocial() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Button Social">
      <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Button-social">
        <div aria-hidden="true" className="absolute border border-[#eeeff2] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[22px]" data-name="google">
              <div className="absolute inset-[42.03%_6.25%_16.85%_50.9%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.42856 9.0475">
                  <path d={svgPaths.p32d4ab00} fill="var(--fill-0, #4285F4)" id="vector" />
                </svg>
              </div>
              <div className="absolute inset-[58.65%_19.54%_6.25%_11.01%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2777 7.72146">
                  <g id="vector">
                    <path d={svgPaths.p348bac40} fill="var(--fill-0, #00C0E8)" />
                    <path d={svgPaths.p348bac40} fill="var(--fill-1, black)" fillOpacity="0.2" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[30.15%_74.5%_30.36%_6.25%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.23408 8.68793">
                  <path d={svgPaths.p2aa7f680} fill="var(--fill-0, #FDCF24)" id="vector" />
                </svg>
              </div>
              <div className="absolute inset-[6.25%_19.24%_58.65%_11.01%]" data-name="vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3433 7.72138">
                  <path d={svgPaths.p18bd6d00} fill="var(--fill-0, #EB4335)" id="vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] text-center tracking-[0.2px] whitespace-nowrap">
              <p className="leading-[1.5]">Google</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Button-social">
        <div aria-hidden="true" className="absolute border border-[#eeeff2] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex gap-[16px] items-start justify-center px-[24px] py-[16px] relative size-full">
            <div className="h-[22px] relative shrink-0 w-[20px]" data-name="apple">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                <path d={svgPaths.p132f3180} fill="var(--fill-0, #111827)" id="apple" />
              </svg>
            </div>
            <div className="flex flex-col font-['Outfit:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] text-center tracking-[0.2px] whitespace-nowrap">
              <p className="leading-[1.5]">Apple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignInSocial() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Sign In - Social">
      <Divider />
      <ButtonSocial />
    </div>
  );
}

function ContentLogin() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content Login">
      <SignInSocial />
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#718096] text-[0px] text-center tracking-[0.2px] w-full">
        <p className="text-[16px] whitespace-pre-wrap">
          <span className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.5] tracking-[0.2px]">Already have an account?</span>
          <span className="font-['Outfit:Regular',sans-serif] font-normal leading-[1.5] tracking-[0.2px]">{` `}</span>
          <span className="font-['Outfit:Bold',sans-serif] font-bold leading-[1.5] text-[#ec221f] tracking-[0.3px]">Login Now</span>
        </p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(33.33%+15px)] top-[278.61px] w-[449px]" data-name="Login">
      <p className="font-['Outfit:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#111827] text-[32px] text-center w-[min-content] whitespace-pre-wrap">Create a new account</p>
      <Group1 />
      <ContentLogin />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#d72322] overflow-clip relative rounded-[40px] size-full" data-name="2">
      <div className="-translate-x-1/2 absolute bg-white h-[720px] left-[calc(50%-0.5px)] rounded-[20px] shadow-[0px_4px_52px_0px_rgba(0,0,0,0.15)] top-[239px] w-[567px]" />
      <Login />
      <div className="absolute h-[82px] left-[calc(33.33%+41px)] top-[97px] w-[396px]" data-name="output-onlinepngtools (17) 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOutputOnlinepngtools173} />
      </div>
    </div>
  );
}