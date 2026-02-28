import svgPaths from "./svg-ttcs8jtjg8";
import imgEllipse18 from "figma:asset/6b95d007c278b8132369d55f7c491640aac3cde7.png";
import imgScreenshot20260225234204RemovebgPreview1 from "figma:asset/03c1c018d224ec5a01ab9f8f28a8b6410bbea367.png";
import imgOutputOnlinepngtools181 from "figma:asset/e1bd7f70874e64a223fad52d6b2766921cf6981d.png";
import imgImagesRemovebgPreview31 from "figma:asset/10772ff7b4119801bcb7613b796bbab0c82b6891.png";
import imgImages1RemovebgPreview11 from "figma:asset/3b289ce05b3755c16114be8971cff5c07751ddf2.png";
import imgImages2RemovebgPreview11 from "figma:asset/65b4f7fe1bf9b2025844215b0b71182e700a6eb0.png";

function Button() {
  return (
    <div className="absolute contents left-[1115px] top-[619px]" data-name="Button">
      <div className="absolute bg-[#d72321] h-[52px] left-[1115px] rounded-[10px] top-[619px] w-[200px]" data-name="bg" />
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[62.13%_12.26%_36.01%_81.04%] leading-[normal] text-[16px] text-center text-white whitespace-pre-wrap">Book Now</p>
    </div>
  );
}

function DepositIllustration() {
  return (
    <div className="absolute contents left-[1115px] top-[619px]" data-name="Deposit Illustration">
      <Button />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[1041px] top-[358px]">
      <div className="absolute bg-white h-[340px] left-[1041px] rounded-[8px] top-[358px] w-[348px]" />
      <DepositIllustration />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[30px]" data-name="gift">
        <div className="absolute inset-[12.5%]" data-name="gift">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5005">
            <path d={svgPaths.p1e908d00} fill="var(--fill-0, #2B2B2B)" id="gift" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[74.24%] right-[5.56%] top-[calc(50%-125.25px)]" data-name="Skeleton">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#04091e] text-[20px] whitespace-nowrap">
        <p className="leading-[1.4]">Limited Time Offer</p>
      </div>
      <Frame />
    </div>
  );
}

function SalesReport() {
  return (
    <div className="absolute contents left-[1041px] top-[358px]" data-name="Sales Report">
      <Group4 />
      <Skeleton />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[85.45%_62.08%_10.45%_29.86%] leading-[normal]">
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[85.45%_62.08%_12.7%_29.86%] text-[#04091e] text-[16px]">Hyundai : Sedan</p>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[87.89%_65.49%_10.45%_29.86%] text-[#747681] text-[14px]">N 45678 W</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[85.45%_53.33%_10.35%_38.96%] leading-[normal]">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[87.99%_56.88%_10.35%_38.96%] text-[#747681] text-[14px]">09.20 AM</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[85.45%_53.33%_12.7%_38.96%] text-[#04091e] text-[16px]">March 24, 2022</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#fdccc8] content-stretch flex inset-[85.94%_36.53%_11.04%_57.99%] items-start px-[23px] py-[7px] rounded-[100px]">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ff383c] text-[14px] text-center">High</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[85.94%_36.53%_11.04%_57.99%]">
      <Frame1 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[85.45%_36.53%_10.35%_22.64%]">
      <Group14 />
      <Group15 />
      <p className="absolute bottom-[11.52%] font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 right-[44.93%] text-[#04091e] text-[16px] top-[86.62%]">45,000km</p>
      <Group13 />
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold inset-[86.43%_76.04%_11.23%_22.64%] leading-[normal] text-[#747681] text-[20px]">01</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[84.28%_30.21%_9.18%_21.6%]" data-name="1">
      <div className="absolute bg-white border-[#f5f5f5] border-b border-solid inset-[84.28%_30.21%_9.18%_21.6%]" />
      <Group17 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[91.99%_62.92%_3.91%_30.07%] leading-[normal]">
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[91.99%_62.92%_6.15%_30.07%] text-[#04091e] text-[16px]">VW Polo 6 GTI</p>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[94.43%_64.79%_3.91%_30.07%] text-[#747681] text-[14px]">N 123-456 A</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[91.99%_53.13%_3.81%_39.17%] leading-[normal]">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[94.53%_56.67%_3.81%_39.17%] text-[#747681] text-[14px]">09.20 AM</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[91.99%_53.13%_6.15%_39.17%] text-[#04091e] text-[16px]">March 24, 2022</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#e2fff5] content-stretch flex inset-[92.48%_36.25%_4.49%_57.99%] items-start px-[23px] py-[7px] rounded-[100px]">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#34c759] text-[14px] text-center">Low</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[92.48%_36.25%_4.49%_57.99%]">
      <Frame2 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[91.99%_36.25%_-0.39%_22.85%]">
      <Group16 />
      <Group19 />
      <p className="absolute bottom-[4.98%] font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 right-[45%] text-[#04091e] text-[16px] top-[93.16%]">37,000km</p>
      <Group20 />
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold inset-[92.97%_75.49%_4.69%_22.85%] leading-[normal] text-[#747681] text-[20px]">02</p>
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold inset-[98.05%_75.49%_-0.39%_22.85%] leading-[normal] text-[#747681] text-[20px]">02</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-[90.82%_30.21%_-0.39%_21.6%]" data-name="2">
      <div className="absolute bg-white border-[#f5f5f5] border-b border-solid inset-[90.82%_30.21%_2.64%_21.6%]" />
      <Group18 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[98.54%_63.13%_-2.64%_22.85%] leading-[normal]">
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[98.54%_63.13%_-0.39%_29.86%] text-[#04091e] text-[16px]">Mazda Demio</p>
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold inset-[99.02%_75.56%_-1.37%_22.85%] text-[#727272] text-[20px]">03</p>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[100.98%_65.97%_-2.64%_29.86%] text-[#747681] text-[14px]">#A4064B</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[98.54%_53.33%_-2.73%_38.96%] leading-[normal]">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[101.07%_56.88%_-2.73%_38.96%] text-[#747681] text-[14px]">09.20 AM</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[98.54%_53.33%_-0.39%_38.96%] text-[#04091e] text-[16px]">March 24, 2022</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[98.54%_44.86%_-2.73%_48.75%] leading-[normal]">
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[101.07%_47.08%_-2.73%_48.75%] text-[#747681] text-[14px]">09.20 AM</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[98.54%_44.86%_-0.39%_49.38%] text-[#04091e] text-[16px]">400,000km</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#fdffc2] content-stretch flex inset-[99.02%_36.25%_-2.05%_57.92%] items-start px-[23px] py-[7px] rounded-[100px]">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#fc0] text-[14px] text-center w-[52px] whitespace-pre-wrap">Medium</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[99.02%_36.25%_-2.05%_57.92%]">
      <Frame3 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[98.54%_36.25%_-2.73%_22.85%]">
      <Group23 />
      <Group24 />
      <Group25 />
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold inset-[99.71%_39.79%_-1.56%_57.92%] leading-[normal] text-[#04091e] text-[16px]">£130</p>
      <Group26 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents inset-[97.36%_30.21%_-3.91%_21.6%]" data-name="3">
      <div className="absolute bg-white border-[#f5f5f5] border-b border-solid inset-[97.36%_30.21%_-3.91%_21.6%]" />
      <Group22 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[77.73%_30.21%_15.72%_21.6%]">
      <div className="absolute bg-white border-[#f5f5f5] border-b border-solid inset-[77.73%_30.21%_15.72%_21.6%]" />
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[79.88%_76.11%_18.26%_22.5%] leading-[normal] text-[#04091e] text-[16px]">No</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[79.88%_67.5%_18.26%_25.62%] leading-[normal] text-[#04091e] text-[16px]">Vehicle Name</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[79.88%_55.14%_18.26%_38.82%] leading-[normal] text-[#04091e] text-[16px]">Last Service</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[79.88%_45.49%_18.26%_50.42%] leading-[normal] text-[#04091e] text-[16px]">Mileage</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[79.88%_37.64%_18.26%_57.57%] leading-[normal] text-[#04091e] text-[16px]">Risk Level</p>
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[79.88%_31.11%_18.26%_65.21%] leading-[normal] text-[#04091e] text-[16px]">Actions</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[73.63%_30.21%_-3.91%_21.6%]">
      <Component />
      <Component1 />
      <Component2 />
      <Group27 />
      <p className="absolute font-['Urbanist:Bold',sans-serif] font-bold inset-[73.63%_68.61%_24.02%_22.43%] leading-[normal] text-[#747681] text-[20px]">Vehicle Status</p>
    </div>
  );
}

function SalesHistory() {
  return (
    <div className="absolute contents inset-[71.48%_29.38%_-3.91%_20.83%]" data-name="Sales History">
      <div className="absolute bg-white inset-[71.48%_29.38%_-3.71%_20.83%] rounded-[8px]" data-name="Background" />
      <Group21 />
      <div className="absolute inset-[86.52%_32.22%_11.52%_66.39%] opacity-54 overflow-clip" data-name="Huge-icon/interface/outline/more-vertical">
        <div className="absolute inset-[8.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-4.5%_-22.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 18.183">
              <g id="Vector">
                <path d={svgPaths.p31ad5880} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
                <path d={svgPaths.p7d08980} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
                <path d={svgPaths.p34cf4a00} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[92.97%_32.22%_5.08%_66.39%] opacity-54 overflow-clip" data-name="Huge-icon/interface/outline/more-vertical">
        <div className="absolute inset-[8.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-4.5%_-22.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 18.183">
              <g id="Vector">
                <path d={svgPaths.p31ad5880} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
                <path d={svgPaths.p7d08980} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
                <path d={svgPaths.p34cf4a00} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[99.41%_32.22%_-1.37%_66.39%] opacity-54 overflow-clip" data-name="Huge-icon/interface/outline/more-vertical">
        <div className="absolute inset-[8.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-4.5%_-22.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 18.183">
              <g id="Vector">
                <path d={svgPaths.p31ad5880} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
                <path d={svgPaths.p7d08980} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
                <path d={svgPaths.p34cf4a00} stroke="var(--stroke-0, #001116)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute contents left-[1067px] top-[958px]" data-name="Button">
      <div className="absolute bg-[#d72321] h-[52px] left-[1067px] rounded-[10px] top-[958px] w-[138px]" data-name="bg" />
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[94.24%_18.82%_3.91%_76.6%] leading-[normal] text-[16px] text-center text-white whitespace-pre-wrap">View Details</p>
    </div>
  );
}

function DepositIllustration1() {
  return (
    <div className="absolute contents left-[1067px] top-[958px]" data-name="Deposit Illustration">
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute contents left-[1224px] top-[958px]" data-name="Button">
      <div className="absolute bg-[#718096] h-[52px] left-[1224px] rounded-[10px] top-[958px] w-[138px]" data-name="bg" />
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[95.21%_7.92%_2.93%_87.5%] leading-[normal] text-[16px] text-center text-white whitespace-pre-wrap">Dismiss</p>
    </div>
  );
}

function DepositIllustration2() {
  return (
    <div className="absolute contents left-[1224px] top-[958px]" data-name="Deposit Illustration">
      <Button2 />
    </div>
  );
}

function WeeklyTransactionSummary() {
  return (
    <div className="absolute contents left-[1041px] top-[732px]" data-name="Weekly Transaction Summary">
      <div className="absolute bg-white h-[330px] left-[1041px] rounded-[8px] top-[732px] w-[347px]" />
      <p className="absolute font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] left-[1097px] text-[#04091e] text-[18px] top-[757px]">AI Insight</p>
      <DepositIllustration1 />
      <DepositIllustration2 />
    </div>
  );
}

function BackgroundIcon() {
  return (
    <div className="absolute inset-[0_16.36%_13.04%_0]" data-name="Background - Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 32.2054">
        <g id="Background - Icon" opacity="0.3">
          <ellipse cx="20.9129" cy="16.1027" fill="var(--fill-0, #D72322)" id="Ellipse" rx="16.087" ry="16.1027" />
          <ellipse cx="2.41304" cy="2.4154" fill="var(--fill-0, #D72322)" id="Ellipse_2" rx="2.41304" ry="2.4154" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[15.25%_74.08%_81.13%_22.85%] overflow-clip" data-name="Icon">
      <BackgroundIcon />
      <div className="absolute inset-[13.04%_0_0_27.27%]" data-name="dollar-circle">
        <div className="absolute inset-[8.33%]" data-name="dollar-circle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8116 26.8378">
            <path d={svgPaths.p8840370} fill="var(--fill-0, #DB3939)" id="dollar-circle" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Previous() {
  return (
    <div className="absolute inset-[12.5%_20.83%_14.5%_16.54%]" data-name="previous">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5256 14.6008">
        <g id="previous">
          <path d={svgPaths.p6a47700} fill="var(--fill-0, #D72322)" id="Vector" />
          <path d={svgPaths.p21843000} fill="var(--fill-0, #D72322)" id="Vector_2" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-0 text-[#04091e] text-[32px] top-[20px] whitespace-nowrap">
        <p className="leading-[1.25]">N$8,245.00</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] left-[20px] text-[#747681] text-[0px] top-[59.5px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.6] text-[#d72322]">- 0,5%</span>
          <span className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.6]">{` `}</span>
          <span className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.6]">from last week</span>
        </p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[20px] top-[49px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="overflow-clip relative size-[20px]" data-name="Huge-icon/arrows/bulk/previous-arrow">
            <Previous />
          </div>
        </div>
      </div>
    </div>
  );
}

function Amount() {
  return (
    <div className="absolute inset-[21.7%_66.81%_71.46%_22.99%]" data-name="Amount">
      <Group6 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[54.637px] left-[528px] top-[237px] w-[97.674px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.6737 54.6372">
        <g id="Group 1000000837">
          <path d={svgPaths.p12df3cf0} fill="var(--fill-0, #04091E)" id="Rectangle 5" opacity="0.9" />
          <path d={svgPaths.pf1bfe80} fill="var(--fill-0, #04091E)" id="Rectangle 5_2" opacity="0.9" />
          <path d={svgPaths.p29c8ec80} fill="var(--fill-0, #D72322)" id="Subtract" opacity="0.9" />
          <path d={svgPaths.p1dd2d500} fill="var(--fill-0, #04091E)" id="Subtract_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function NewNetIncome() {
  return (
    <div className="absolute contents left-[301px] top-[132px]" data-name="New Net Income">
      <div className="absolute bg-white h-[190px] left-[301px] rounded-[8px] top-[132px] w-[347px]" />
      <div className="absolute inset-[16.03%_56.25%_82.01%_42.36%] opacity-54 overflow-clip" data-name="Huge-icon/interface/outline/more-vertical">
        <div className="absolute inset-[8.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-4.5%_-22.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 18.183">
              <g id="Vector">
                <path d={svgPaths.p31ad5880} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
                <path d={svgPaths.p7d08980} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
                <path d={svgPaths.p34cf4a00} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[15.72%_64.03%_81.74%_27.15%] justify-center leading-[0] text-[#04091e] text-[16px]">
        <p className="leading-[1.6] whitespace-pre-wrap">Total Investment</p>
      </div>
      <Icon />
      <Amount />
      <Group5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.63%_-5%_-5.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 16.5">
          <g id="Group">
            <path d={svgPaths.p12e55f0} id="Vector" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10.75 0.75V4.08333" id="Vector_2" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M4.08333 0.75V4.08333" id="Vector_3" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M0.75 7.41667H14.0833" id="Vector_4" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M6.58333 10.75H7.41667" id="Vector_5" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.41667 10.75V13.25" id="Vector_6" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[59.47%] content-stretch flex gap-[8px] items-center left-[calc(50%+203px)] px-[12px] py-[8px] rounded-[8px] top-[36.62%]" data-name="Calendar">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#04091e] text-[12px] whitespace-nowrap">
        <p className="leading-[1.6]">Last 7 month</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="calendar">
        <Group />
      </div>
    </div>
  );
}

function ListVertical() {
  return (
    <div className="absolute font-['Urbanist:Medium',sans-serif] font-medium inset-[42.38%_75.28%_38.77%_23.13%] leading-[0] text-[#718096] text-[14px] whitespace-nowrap" data-name="List - Vertical">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[42px]">
        <p className="leading-[1.6]">40</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[92px]">
        <p className="leading-[1.6]">30</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[142px]">
        <p className="leading-[1.6]">20</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[192px]">
        <p className="leading-[1.6]">10</p>
      </div>
    </div>
  );
}

function ListHorizontal() {
  return (
    <div className="absolute content-stretch flex font-['Urbanist:Medium',sans-serif] font-medium inset-[62.79%_32.43%_35.06%_27.08%] items-center justify-between leading-[0] text-[#718096] text-[14px] whitespace-nowrap" data-name="List - Horizontal">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">Jan</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">Feb</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">Mar</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">Apr</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">May</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">Jun</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.6]">Jul</p>
      </div>
    </div>
  );
}

function BarSkeleton() {
  return (
    <div className="absolute contents left-[0.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[0.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, #EAFBF7)" id="Rectangle 5" />
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[22px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarSkeleton1() {
  return (
    <div className="absolute contents left-[93.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[93.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, #EAFBF7)" id="Rectangle 5" />
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[115px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarSkeleton2() {
  return (
    <div className="absolute contents left-[186.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[186.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, #EAFBF7)" id="Rectangle 5" />
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[208px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarSkeleton3() {
  return (
    <div className="absolute contents left-[279.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[279.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="url(#paint0_linear_1_2622)" id="Rectangle 5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2622" x1="22" x2="22" y1="0" y2="174">
              <stop stopColor="#D72322" />
              <stop offset="1" stopColor="#B8E716" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[301px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarSkeleton4() {
  return (
    <div className="absolute contents left-[372.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[372.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, #EAFBF7)" id="Rectangle 5" />
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[394px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarSkeleton5() {
  return (
    <div className="absolute contents left-[465.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[465.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, #EAFBF7)" id="Rectangle 5" />
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[487px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarSkeleton6() {
  return (
    <div className="absolute contents left-[558.29px] top-[-0.81px]" data-name="Bar - Skeleton">
      <div className="absolute h-[174px] left-[558.29px] top-[-0.81px] w-[44px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 174">
          <path d={svgPaths.p37f07300} fill="var(--fill-0, #EAFBF7)" id="Rectangle 5" />
        </svg>
      </div>
      <div className="absolute flex h-[160.303px] items-center justify-center left-[580px] top-[12.7px] w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[160.303px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.303 1">
                <line id="Divider" stroke="var(--stroke-0, white)" strokeLinecap="round" x1="0.5" x2="159.803" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chart() {
  return (
    <div className="absolute contents left-0 top-[49.29px]" data-name="Chart">
      <div className="absolute flex h-[120.937px] items-center justify-center left-0 top-[51.75px] w-[602px]">
        <div className="flex-none rotate-180">
          <div className="h-[120.937px] relative w-[602px]" data-name="Direct">
            <div className="absolute inset-[-0.5%_-0.25%_4.26%_-0.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605.001 116.387">
                <path d={svgPaths.pdb09300} id="Direct" stroke="var(--stroke-0, #B8E716)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[112.646px] left-0 top-[49.29px] w-[602px]" data-name="Marketing">
        <div className="absolute inset-[1.67%_-0.25%_3.04%_-0.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605 107.338">
            <path d={svgPaths.p30efb200} id="Marketing" stroke="var(--stroke-0, #DB3939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute inset-[44.34%_31.6%_38.77%_26.6%]" data-name="List">
      <BarSkeleton />
      <BarSkeleton1 />
      <BarSkeleton2 />
      <BarSkeleton3 />
      <BarSkeleton4 />
      <BarSkeleton5 />
      <BarSkeleton6 />
      <Chart />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[29.17%_12.5%]" data-name="Group">
      <div className="absolute inset-[-10%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
          <g id="Group">
            <path d={svgPaths.p207de280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 0.5H9.5V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Up() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#db3939] bottom-[58.11%] content-stretch flex gap-[4px] items-center justify-center left-[calc(50%-222px)] px-[8px] py-[4px] rounded-[1000px] top-[39.55%]" data-name="Up">
      <div className="relative shrink-0 size-[12px]" data-name="trending-up">
        <Group1 />
      </div>
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[1.6]">23,5%</p>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[49.02%] content-stretch flex flex-col items-center leading-[0] left-[calc(50%+48px)] p-[8px] rounded-[8px] shadow-[0px_8px_40px_0px_rgba(26,32,44,0.09)] text-center top-[45.7%] whitespace-nowrap" data-name="Chip">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#db3939] text-[14px]">
        <p className="leading-[1.6]">34</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#747681] text-[10px]">
        <p className="leading-[1.6]">Alerts</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[38.38%_51.04%_59.47%_42.43%]">
      <div className="absolute flex flex-col font-['Urbanist:Medium',sans-serif] font-medium inset-[38.38%_51.04%_59.47%_43.82%] justify-center leading-[0] text-[#747681] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Open Alerts</p>
      </div>
      <div className="absolute inset-[38.87%_56.6%_59.77%_42.43%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #DB3939)" id="Ellipse 1179" r="7" />
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[38.38%_42.22%_59.47%_50.69%]">
      <div className="absolute flex flex-col font-['Urbanist:Medium',sans-serif] font-medium inset-[38.38%_42.22%_59.47%_52.08%] justify-center leading-[0] text-[#747681] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">Closed Alerts</p>
      </div>
      <div className="absolute inset-[38.77%_48.33%_59.86%_50.69%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #B8E716)" id="Ellipse 1180" r="7" />
        </svg>
      </div>
    </div>
  );
}

function OveralSalesChart() {
  return (
    <div className="absolute contents left-[300px] top-[358px]" data-name="Overal Sales - Chart">
      <div className="absolute bg-white inset-[34.96%_29.38%_32.32%_20.83%] rounded-[8px]" data-name="Background" />
      <Calendar />
      <ListVertical />
      <ListHorizontal />
      <List />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] left-[336px] text-[#718096] text-[14px] top-[386px] w-[196px]">
        <p className="leading-[1.6] whitespace-pre-wrap">Maintenance Activity Overview</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] left-[336px] text-[#04091e] text-[24px] top-[416.5px] whitespace-nowrap">
        <p className="leading-[1.3]">242 Alerts</p>
      </div>
      <div className="absolute inset-[48.93%_52.08%_49.9%_47.08%]" data-name="Dot">
        <div className="absolute inset-[-16.67%_-33.33%_-50%_-33.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g filter="url(#filter0_d_1_2583)" id="Dot">
              <circle cx="10" cy="8" fill="var(--fill-0, white)" r="6" />
              <circle cx="10" cy="8" r="5" stroke="var(--stroke-0, #00C0E8)" strokeWidth="2" />
              <circle cx="10" cy="8" r="5" stroke="var(--stroke-1, black)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_1_2583" width="20" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.12549 0 0 0 0 0.172549 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2583" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2583" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Up />
      <Chip />
      <Group11 />
      <Group12 />
    </div>
  );
}

function BackgroundIcon1() {
  return (
    <div className="absolute inset-[15.25%_48.82%_81.61%_48.61%]" data-name="Background - Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 32.2054">
        <g id="Background - Icon" opacity="0.3">
          <ellipse cx="20.9129" cy="16.1027" fill="var(--fill-0, #DB3939)" id="Ellipse" rx="16.087" ry="16.1027" />
          <ellipse cx="2.41304" cy="2.4154" fill="var(--fill-0, #DB3939)" id="Ellipse_2" rx="2.41304" ry="2.4154" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents inset-[15.25%_48.82%_81.61%_48.61%]" data-name="Icon">
      <BackgroundIcon1 />
      <div className="absolute left-[712px] size-[24px] top-[161px]" data-name="clock">
        <div className="absolute inset-[8.33%]" data-name="clock">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p15c4d500} fill="var(--fill-0, #DB3939)" fillRule="evenodd" id="clock" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Previous1() {
  return (
    <div className="absolute inset-[12.5%_20.83%_14.5%_16.54%]" data-name="previous">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5256 14.6008">
        <g id="previous">
          <path d={svgPaths.p6a47700} fill="var(--fill-0, #DB3939)" id="Vector" />
          <path d={svgPaths.p21843000} fill="var(--fill-0, #DB3939)" id="Vector_2" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-0 text-[#04091e] text-[32px] top-[20px] whitespace-nowrap">
        <p className="leading-[1.25]">143</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] left-[20px] text-[#747681] text-[0px] top-[59.5px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.6] text-[#db3939]">+ 1.0%</span>
          <span className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.6]">{` `}</span>
          <span className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.6]">from last week</span>
        </p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[20px] top-[49px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="overflow-clip relative size-[20px]" data-name="Huge-icon/arrows/bulk/previous-arrow">
            <Previous1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Amount1() {
  return (
    <div className="absolute inset-[21.7%_41.04%_71.46%_48.75%]" data-name="Amount">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[54.637px] left-[899px] top-[237px] w-[97.674px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.6737 54.6372">
        <g id="Group 1000000837">
          <path d={svgPaths.p12df3cf0} fill="var(--fill-0, #04091E)" id="Rectangle 5" opacity="0.9" />
          <path d={svgPaths.pf1bfe80} fill="var(--fill-0, #04091E)" id="Rectangle 5_2" opacity="0.9" />
          <path d={svgPaths.p29c8ec80} fill="var(--fill-0, #04091E)" id="Subtract" opacity="0.9" />
          <path d={svgPaths.p1dd2d500} fill="var(--fill-0, #DB3939)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function TotalOrder() {
  return (
    <div className="absolute contents left-[672px] top-[132px]" data-name="Total Order">
      <div className="absolute bg-white h-[190px] left-[672px] rounded-[8px] top-[132px] w-[347px]" />
      <div className="absolute inset-[16.03%_30.49%_82.01%_68.13%] opacity-54 overflow-clip" data-name="Huge-icon/interface/outline/more-vertical">
        <div className="absolute inset-[8.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-4.5%_-22.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 18.183">
              <g id="Vector">
                <path d={svgPaths.p31ad5880} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
                <path d={svgPaths.p7d08980} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
                <path d={svgPaths.p34cf4a00} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[15.74%_39.08%_81.72%_52.93%] justify-center leading-[0] text-[#04091e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.6]">Service Records</p>
      </div>
      <Icon1 />
      <Amount1 />
      <Group8 />
    </div>
  );
}

function BackgroundIcon2() {
  return (
    <div className="absolute inset-[15.25%_23.06%_81.61%_74.38%]" data-name="Background - Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 32.2054">
        <g id="Background - Icon" opacity="0.3">
          <ellipse cx="20.9129" cy="16.1027" fill="var(--fill-0, #DB3939)" id="Ellipse" rx="16.087" ry="16.1027" />
          <ellipse cx="2.41304" cy="2.4154" fill="var(--fill-0, #DB3939)" id="Ellipse_2" rx="2.41304" ry="2.4154" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute contents inset-[15.25%_23.06%_81.61%_74.38%]" data-name="Icon">
      <BackgroundIcon2 />
      <div className="absolute left-[1083px] size-[24px] top-[161px]" data-name="document-list-check">
        <div className="absolute inset-[12.5%]" data-name="document-list-check">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pf3bb900} fill="var(--fill-0, #DB3939)" id="document-list-check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Previous2() {
  return (
    <div className="absolute inset-[12.5%_20.83%_14.5%_16.54%]" data-name="previous">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5256 14.6008">
        <g id="previous">
          <path d={svgPaths.p6a47700} fill="var(--fill-0, #DB3939)" id="Vector" />
          <path d={svgPaths.p21843000} fill="var(--fill-0, #DB3939)" id="Vector_2" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-0 text-[#04091e] text-[32px] top-[20px] whitespace-nowrap">
        <p className="leading-[1.25]">12</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Outfit:Medium',sans-serif] font-medium justify-center leading-[0] left-[20px] text-[#747681] text-[0px] top-[59.5px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[1.6] text-[#db3939]">+ 1.0%</span>
          <span className="font-['Outfit:Medium',sans-serif] font-medium leading-[1.6]">{` `}</span>
          <span className="font-['Urbanist:Regular',sans-serif] font-normal leading-[1.6]">from last week</span>
        </p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[20px] top-[49px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="overflow-clip relative size-[20px]" data-name="Huge-icon/arrows/bulk/previous-arrow">
            <Previous2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Amount2() {
  return (
    <div className="absolute inset-[21.7%_15.28%_71.46%_74.51%]" data-name="Amount">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute h-[54.637px] left-[1270px] top-[237px] w-[97.674px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.6737 54.6372">
        <g id="Group 1000000837">
          <path d={svgPaths.p12df3cf0} fill="var(--fill-0, #DB3939)" id="Rectangle 5" opacity="0.9" />
          <path d={svgPaths.pf1bfe80} fill="var(--fill-0, #04091E)" id="Rectangle 5_2" opacity="0.9" />
          <path d={svgPaths.p29c8ec80} fill="var(--fill-0, #04091E)" id="Subtract" opacity="0.9" />
          <path d={svgPaths.p1dd2d500} fill="var(--fill-0, #04091E)" id="Subtract_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function AverageSales() {
  return (
    <div className="absolute contents left-[1043px] top-[132px]" data-name="Average Sales">
      <div className="absolute bg-white h-[190px] left-[1043px] rounded-[8px] top-[132px] w-[347px]" />
      <div className="absolute inset-[16.03%_4.72%_82.01%_93.89%] opacity-54 overflow-clip" data-name="Huge-icon/interface/outline/more-vertical">
        <div className="absolute inset-[8.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-4.5%_-22.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83333 18.183">
              <g id="Vector">
                <path d={svgPaths.p31ad5880} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
                <path d={svgPaths.p7d08980} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
                <path d={svgPaths.p34cf4a00} stroke="var(--stroke-0, #04091E)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold inset-[15.74%_12.97%_81.72%_78.7%] justify-center leading-[0] text-[#04091e] text-[16px] whitespace-nowrap">
        <p className="leading-[1.6]">Scheduled Tasks</p>
      </div>
      <Icon2 />
      <Amount2 />
      <Group10 />
    </div>
  );
}

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
        <p className="leading-[1.3]">Hi,Cody Fisher</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#747681] text-[14px]">
        <p className="leading-[1.6]">Let’s check your Garage today</p>
      </div>
    </div>
  );
}

function Group2() {
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

function Icon3() {
  return (
    <div className="absolute bg-white left-[890px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
      <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="bell">
        <Group2 />
      </div>
      <div className="absolute left-[27px] size-[8px] top-[14px]" data-name="Skeleton">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2519)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2519" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
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

function Group3() {
  return (
    <div className="absolute inset-[20.83%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5002 15.5">
          <g id="Group">
            <path d={svgPaths.p4e80f00} id="Vector" stroke="var(--stroke-0, #04091E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3d876d80} id="Vector_2" stroke="var(--stroke-0, #04091E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute bg-white left-[842px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
      <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="mail">
        <Group3 />
      </div>
      <div className="absolute left-[28px] size-[8px] top-[14px]" data-name="Skeleton">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2519)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2519" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
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

function Icon5() {
  return (
    <div className="absolute bg-white left-[840px] overflow-clip rounded-[1000px] size-[48px] top-[24px]" data-name="Icon">
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
            <circle cx="5.5" cy="5.5" fill="url(#paint0_linear_1_2519)" id="Skeleton" r="4.75" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2519" x1="-1.73333" x2="10.0401" y1="1.5" y2="2.63193">
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
      <Icon3 />
      <Icon4 />
      <Icon5 />
    </div>
  );
}

function Group30() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-['Outfit:SemiBold',sans-serif] font-semibold justify-center ml-[32px] mt-[2px] relative row-1 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Dashboard</p>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="grid-web-7">
        <div className="absolute inset-[16.67%]" data-name="grid-web-7">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p2ecb09a0} fill="var(--fill-0, white)" id="grid-web-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">My Vehicles</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="taxi">
        <div className="absolute inset-[9.38%]" data-name="taxi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2b700bf0} fill="var(--fill-0, #D72322)" id="taxi" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group29() {
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

function Group28() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Bookings</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="calendar">
        <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="calendar">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.75">
            <path d={svgPaths.p1b0f4300} fill="var(--fill-0, #D72322)" id="calendar" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Outfit:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[2px] relative row-1 text-[#030303] text-[16px]">Settings</p>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="settings">
        <div className="absolute inset-[12.5%]" data-name="settings">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1c8f5000} fill="var(--fill-0, #D72322)" id="settings" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start leading-[0] left-[46px] top-[217px]">
      <Group30 />
      <Group31 />
      <Group29 />
      <Group28 />
      <Group32 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[256px]" />
      <div className="absolute bg-[#d72322] h-[56px] left-[30px] rounded-[10px] top-[201px] w-[196px]" />
      <Frame4 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[53px] top-[29px]">
      <div className="absolute h-[85px] left-[77px] top-[29px] w-[106px]" data-name="Screenshot_2026-02-25_234204-removebg-preview 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260225234204RemovebgPreview1} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Black',sans-serif] font-black justify-center leading-[0] left-[53px] text-[#db2225] text-[24px] top-[131.5px] whitespace-nowrap">
        <p className="leading-[1.3]">GEARHOUSE</p>
      </div>
    </div>
  );
}

export default function Component3() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative rounded-[40px] size-full" data-name="7">
      <SalesReport />
      <SalesHistory />
      <WeeklyTransactionSummary />
      <div className="absolute left-[1060px] size-[25px] top-[754px]" data-name="sparkle">
        <div className="absolute inset-[10.58%_10.42%_10.41%_10.41%]" data-name="sparkle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7938 19.7508">
            <path d={svgPaths.p15f9e00} fill="var(--fill-0, #030303)" id="sparkle" />
          </svg>
        </div>
      </div>
      <NewNetIncome />
      <OveralSalesChart />
      <TotalOrder />
      <AverageSales />
      <Header />
      <Group33 />
      <Group34 />
      <div className="absolute flex h-[382.424px] items-center justify-center left-[1011px] top-[329px] w-[397.159px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-30">
          <div className="h-[265.219px] relative w-[305.476px]" data-name="output-onlinepngtools (18) 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[165.22%] left-[-44.96%] max-w-none top-[-32.61%] w-[191.47%]" src={imgOutputOnlinepngtools181} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold h-[88px] justify-center leading-[0] left-[1127px] text-[24px] text-white top-[512px] w-[134px]">
        <p className="leading-[1.4] whitespace-pre-wrap">20% Off Brake Service</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] left-[1063px] text-[#04091e] text-[28px] top-[876.5px] w-[248px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Maintenance likely needed in 2 weeks for 3 vehicles</p>
      </div>
      <div className="absolute bg-[#d9d9d9] left-[376px] rounded-[6px] size-[44px] top-[875px]" />
      <div className="absolute bg-[#d9d9d9] left-[376px] rounded-[6px] size-[44px] top-[942px]" />
      <div className="absolute bg-[#d9d9d9] left-[376px] rounded-[6px] size-[44px] top-[1009px]" />
      <div className="absolute h-[18px] left-[379px] top-[887px] w-[37px]" data-name="images-removebg-preview (3) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.77%] left-[-31.2%] max-w-none top-[-11.93%] w-[158.12%]" src={imgImagesRemovebgPreview31} />
        </div>
      </div>
      <div className="absolute h-[24px] left-[382px] top-[952px] w-[32px]" data-name="images__1_-removebg-preview (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImages1RemovebgPreview11} />
      </div>
      <div className="absolute h-[23px] left-[380px] top-[1013px] w-[34px]" data-name="images__2_-removebg-preview (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.95%] left-[-9.75%] max-w-none top-[-6.92%] w-[120.34%]" src={imgImages2RemovebgPreview11} />
        </div>
      </div>
    </div>
  );
}